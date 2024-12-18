const router = require("express").Router();
const { authMiddleware } = require("../../_shared/middleware");

const initSeccode = () => {
  const seccde = require("../controller/seccde.controller.js");
  router.post("/", authMiddleware, seccde.decryptlstcom);
  return router;
};

module.exports = {
  initRoutes: initSeccode,
};
