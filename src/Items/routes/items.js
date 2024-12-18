const { authMiddleware } = require("../../_shared/middleware");
const {
  getItem,
  postItemFile,
  deleteItem,
  postItemFileDocnum,
  putItemFile,
} = require("../services/items");
// const postItemFile = require('../services/')

const router = require("express").Router();

const initItem = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const itemFind = await getItem();
      res.status(200).json({ status: "Success", code: 200, payload: itemFind });
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const created = await postItemFile(body);

      if (!created) {
        res.status(400).json({
          status: "Failure",
          code: 400,
          payload: { msg: "Item code already exists." },
        });
      } else {
        res.status(201).json({
          status: "Success",
          code: 201,
          payload: { msg: "Item successfully added" },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  // Added Item class
  router.post("/docnum", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postItemFileDocnum(body);

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

      console.log("docnum", docnum);

      const updated = await putItemFile(docnum, body);

      if (!updated) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Item not found." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Item successfully updated" },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.delete("/:docnum", authMiddleware, async (req, res) => {
    try {
      const { docnum } = req.params;
      const deleted = await deleteItem(docnum);

      if (deleted) {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Item successfully deleted" },
        });
      } else {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Item not found" },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  return router;
};

module.exports = {
  initRoutes: initItem,
};
