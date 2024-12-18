const { authMiddleware } = require("../../_shared/middleware");
const {
  getSales,
  getIjSales,
  getSalesItem,
  getSalesFilteredByDate,
  getSalesFilteredByDocNo,
  postSale,
  postSaleWDocnum,
  putSale,
  deleteSale,
} = require("../services/sales");

const router = require("express").Router();

const initSales = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const salesFind = await getIjSales();
      res
        .status(200)
        .json({ status: "Success", code: 200, payload: salesFind });
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.get("/salesitem/:docnum", authMiddleware, async (req, res) => {
    try {
      const { docnum } = req.params;
      const salesItemFind = await getSalesItem(docnum);
      res
        .status(200)
        .json({ status: "Success", code: 200, payload: salesItemFind });
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.get("/salesFilteredByDate", async (req, res) => {
    const { fromDate, toDate } = req.query;
    try {
      const sales = await getSalesFilteredByDate(fromDate, toDate);
      res.json(sales);
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.get("/salesFilteredByDocNo", async (req, res) => {
    const { docNumFrom, docNumTo } = req.query;
    try {
      const sales = await getSalesFilteredByDocNo(docNumFrom, docNumTo);
      res.json(sales);
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postSale(body.salesDetails, body.salesItem);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Document code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Transaction successfully added" },
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
      const uploaded = await postSaleWDocnum(body.salesDetails, body.salesItem);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Document code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Transaction successfully added" },
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
      const updated = await putSale(
        docnum,
        body.salesDetails,
        body.salesItem,
      );

      if (!updated) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Transaction not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Transaction was successfully updated." },
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

      const deleted = await deleteSale(docnum);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Transaction not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Transaction was successfully deleted." },
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
  initRoutes: initSales,
};
