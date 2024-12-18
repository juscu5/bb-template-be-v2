const { postActivity } = require("../../_shared/services/useractivitylog");
const { models } = require("../../_shared/config/config-db");
const { encryptSHA1 } = require("../../_shared/utilities/encryption");
const { authMiddleware } = require("../../_shared/middleware");
const { getCurrentTimeString } = require("../../_shared/utilities/time-string");
const {
  getMe,
  login,
  changePass,
  addUser,
  editUser,
  deleteUser,
} = require("../services/users");

const router = require("express").Router();

const initUsers = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const user = await models.users.findAll({
        attributes: [
          "recid",
          "usrcde",
          "usrname",
          "usrlvl",
          "emailadd",
          "fullname",
        ],
      });
      res.status(200).json({ status: "Success", code: 200, payload: user });
    } catch (e) {
      res
        .status(400)
        .json({ status: "Failed", code: 400, payload: { msg: e } });
    }
  });

  router.get("/pass", authMiddleware, async (req, res) => {
    try {
      let pass = encryptSHA1(req.parsedToken.data.usrpwd);
      const password = await verPass(pass);
    } catch (error) {}
  });

  router.get("/me", authMiddleware, async (req, res) => {
    console.log("Pumasok sakin hehe");

    try {
      const myself = await getMe(req.parsedToken.data.usrcde);
      res
        .status(200)
        .json({ status: "Your profile", code: 200, payload: myself });
    } catch (error) {
      res
        .status(400)
        .json({ status: "Your profile", code: 400, payload: { msg: error } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const user = await addUser(body);

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "User Addedd Successfully" },
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.put("/:recid", authMiddleware, async (req, res) => {
    try {
      const { recid } = req.params;
      const { body } = req;
      const updated = await editUser(recid, body);

      if (!updated) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Updating admin is prohibited" },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "User was successfully updated." },
      });
    } catch (e) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occurred while updating the user." },
      });
    }
  });

  router.delete("/:recid", authMiddleware, async (req, res) => {
    try {
      const { recid } = req.params;

      const deleted = await deleteUser(recid);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Admin deletion is Prohibited" },
        });
      }
      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "User was successfully deleted." },
      });
    } catch (error) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occurred while deleting the User." },
      });
    }
  });

  router.post("/login", async (req, res) => {
    const { err, data } = await login(req.body);

    if (err) {
      await postActivity({
        modcde: "login",
        usrcde: req.body.usrcde,
        usrname: req.body.usrcde,
        usrdte: new Date(),
        usrtim: getCurrentTimeString(),
        trndte: new Date(),
        module: "login",
        activity: "Logging In",
        remarks: "Login Unsuccessful",
      });
      return res.status(err.code).json(err);
    }

    await postActivity({
      modcde: "login",
      usrcde: req.body.usrcde,
      usrname: req.body.usrcde,
      usrdte: new Date(),
      usrtim: getCurrentTimeString(),
      trndte: new Date(),
      module: "login",
      activity: "Logging In",
      remarks: "Login Successful",
    });

    res.status(data.code).json(data);
  });

  router.post("/changepass", authMiddleware, async (req, res) => {
    try {
      const { err, data } = await changePass(req.body);

      if (err) {
        await postActivity({
          modcde: "Set Password",
          usrcde: req.body.usrcde,
          usrname: req.body.usrcde,
          usrdte: new Date(),
          usrtim: getCurrentTimeString(),
          trndte: new Date(),
          module: "Set Password",
          activity: "Changing Password",
          remarks: "Password Unsuccessfully change",
        });
        return res.status(err.code).json({
          status: "Failure",
          code: 500,
          payload: { msg: "Incorrect old password." },
        });
      }

      await postActivity({
        modcde: "Set Password",
        usrcde: req.body.usrcde,
        usrname: req.body.usrcde,
        usrdte: new Date(),
        usrtim: getCurrentTimeString(),
        trndte: new Date(),
        module: "Set Password",
        activity: "Changing Password",
        remarks: "Password Successfully change",
      });

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Password Successfully Update" },
      });
    } catch (e) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occured while updating the password" },
      });
    }
  });

  return router;
};

module.exports = {
  initRoutes: initUsers,
};
