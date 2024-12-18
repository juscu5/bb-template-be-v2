const { authMiddleware } = require("../../_shared/middleware");
const {
  getAndGroupUserMenus,
  deleteUserMenus,
  createUserMenus,
} = require("../services/usermenus");

const router = require("express").Router();

const initUserMenus = () => {
  router.get("/:usrcde", authMiddleware, async (req, res) => {
    try {
      const { usrcde } = req.params;
      const menus = await getAndGroupUserMenus(usrcde);

      if (!menus) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "User code not found on user menus" },
        });
      }

      res.status(200).json({ status: "Success", code: 200, payload: menus });
    } catch (error) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occurred while trying to get user menus." },
      });
    }
  });

  router.delete("/:usrcde", authMiddleware, async (req, res) => {
    try {
      const { usrcde } = req.params;
      const deleted = await deleteUserMenus(usrcde);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "User code not found on user menus" },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "User menus was successfully deleted." },
      });
    } catch (error) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occurred while deleting the user menus." },
      });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await createUserMenus(body);

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
  initRoutes: initUserMenus,
};
