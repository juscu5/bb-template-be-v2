const { authMiddleware } = require("../../_shared/middleware");
const {
  getDepartment,
  postDepartment,
  postDepartmentWDocnum,
  putDepartment,
  deleteDepartment,
} = require("../services/department");

const router = require("express").Router();

const initDepartment = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const departmentFind = await getDepartment();
      res
        .status(200)
        .json({ status: "Success", code: 200, payload: departmentFind });
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postDepartment(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Department code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Department successfully added" },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.post("/docnum", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postDepartmentWDocnum(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Department code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Department successfully added" },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      console.log("pumasok here");

      const { body } = req;
      const uploaded = await postDepartment(body);

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Department was successfully added." },
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.put("/:docnum", authMiddleware, async (req, res) => {
    try {
      const { docnum } = req.params;
      const { body } = req;
      const updated = await putDepartment(docnum, body);

      if (!updated) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Department not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Department was successfully updated." },
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Failure", code: 500, payload: { msg: error } });
    }
  });

  router.delete("/:docnum", authMiddleware, async (req, res) => {
    try {
      const { docnum } = req.params;

      const deleted = await deleteDepartment(docnum);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Department not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Department was successfully deleted." },
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Failure", code: 500, payload: { msg: error } });
    }
  });

  return router;
};

module.exports = {
  initRoutes: initDepartment,
};
