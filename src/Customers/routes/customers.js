const { authMiddleware } = require("../../_shared/middleware");
const {
  getCustomer,
  postCustomer,
  postCustomerWDocnum,
  putCustomer,
  deleteCustomer,
} = require("../services/customers");

const router = require("express").Router();

const initCustomer = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const customerFind = await getCustomer();
      res
        .status(200)
        .json({ status: "Success", code: 200, payload: customerFind });
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postCustomer(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Customer code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Customer successfully added" },
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
      const uploaded = await postCustomerWDocnum(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Customer code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Customer successfully added" },
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
      const updated = await putCustomer(docnum, body);

      if (!updated) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Customer not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Customer was successfully updated." },
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

      const deleted = await deleteCustomer(docnum);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Customer not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Customer was successfully deleted." },
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
  initRoutes: initCustomer,
};
