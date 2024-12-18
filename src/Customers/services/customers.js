const { models } = require("../../_shared/config/config-db");
const { putSysPar } = require("../../_shared/services/syspar");
const {
  getSysparIncNum,
  getSysparDocnum,
} = require("../../_shared/utilities/syspar");

const getCustomer = async () => {
  try {
    const getCus = await models.customerfile.findAll({ order: [["recid"]] });
    return getCus;
  } catch (error) {
    throw error;
  }
};

const postCustomer = async (body) => {
  try {
    const validate = await models.customerfile.findOne({
      attributes: ["cuscde"],
      where: { cuscde: body.cuscde },
    });

    if (validate) {
      return false;
    } else {
      const returnObj = { ...body };
      await models.customerfile.create(returnObj);
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const postCustomerWDocnum = async (body) => {
  try {
    let cusdocnum;
    let validate = true;

    // Prevent Error for Duplicating SysparDocnum
    while (validate) {
      cusdocnum = await getSysparIncNum("cusdocnum");
      validate = await models.customerfile.findOne({
        attributes: ["cuscde"],
        where: { cuscde: cusdocnum },
      });
    }

    const cuscde = { cuscde: cusdocnum };
    const returnObj = { ...body, ...cuscde };
    const postCus = await models.customerfile.create(returnObj);

    if (postCus) {
      await putSysPar(1, cuscde);
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const putCustomer = async (docnum, body) => {
  try {
    if (!docnum) {
      throw new Error("Document ID is required");
    }

    const updatedRows = await models.customerfile.update(body, {
      where: { cuscde: docnum },
    });

    if (updatedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const deleteCustomer = async (docnum) => {
  try {
    if (!docnum) {
      throw new Error("Customer ID is required");
    }

    const deletedRows = await models.customerfile.destroy({
      where: { cuscde: docnum },
    });

    if (deletedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCustomer,
  postCustomer,
  postCustomerWDocnum,
  putCustomer,
  deleteCustomer,
};
