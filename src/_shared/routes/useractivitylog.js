const { authMiddleware } = require("../middleware");
const { models } = require("../config/config-db");
const { postActivity } = require("../services/useractivitylog");

const router = require("express").Router();

const initUserActivityLog = () => {
  router.get("/", authMiddleware, async (req, res) => {
    const userActivityLog = await models.useractivitylogfile.findAll({
      order: [["recid", "DESC"]],
    });
    res
      .status(200)
      .json({ status: "Success", code: 200, payload: userActivityLog });
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postActivity(body);
      res.status(200).json({ status: "Success", code: 200, payload: uploaded });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  return router;
};

module.exports = {
  initRoutes: initUserActivityLog,
};
