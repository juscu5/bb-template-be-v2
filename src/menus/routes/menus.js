const router = require("express").Router();
const { models } = require("../../_shared/config/config-db");
const { findAndGroupRoutes } = require("../services/menus");
const { authMiddleware } = require("../../_shared/middleware");

const initMenus = () => {
  router.get("/", authMiddleware, async (req, res) => {
    const menus = await models.menus.findAll({ order: [["menidx"]] });
    res.status(200).json({ status: "Success", code: 200, payload: menus });
  });

  router.get("/routes", authMiddleware, async (req, res) => {
    const menus = await findAndGroupRoutes();
    res.status(200).json({ status: "Success", code: 200, payload: menus });
  });

  return router;
};

module.exports = {
  initRoutes: initMenus,
};
