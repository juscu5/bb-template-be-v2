const { authMiddleware } = require("../../_shared/middleware");
const {
  getItemClass,
  postItemClass,
  postItemClassWDocnum,
  putItemClass,
  deleteItemClass,
} = require("../services/itemclass");

const router = require("express").Router();

const initItemClass = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const itemClassFind = await getItemClass();
      res
        .status(200)
        .json({ status: "Success", code: 200, payload: itemClassFind });
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postItemClass(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Item class code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Item class successfully added" },
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
      const uploaded = await postItemClassWDocnum(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Item class code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Item class successfully added" },
        });
      }
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
      const updated = await putItemClass(docnum, body);

      if (!updated) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Item class not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Item class was successfully updated." },
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

      const deleted = await deleteItemClass(docnum);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Item class not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Item class was successfully updated." },
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
  initRoutes: initItemClass,
};
