const { models } = require("../../_shared/config/config-db");
const { putSysPar } = require("../../_shared/services/syspar");
const {
  getSysparIncNum,
  getSysparDocnum,
} = require("../../_shared/utilities/syspar");

const getItemClass = async () => {
  try {
    const getItemClass = await models.itemclassfile.findAll({
      order: [["recid"]],
    });
    return getItemClass;
  } catch (error) {
    throw error;
  }
};

const postItemClass = async (body) => {
  try {
    const validate = await models.itemclassfile.findOne({
      attributes: ["itmclacde"],
      where: { itmclacde: body.itmclacde },
    });

    if (validate) {
      return false;
    } else {
      const returnObj = { ...body };
      await models.itemclassfile.create(returnObj);
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const postItemClassWDocnum = async (body) => {
  try {
    let itmclacde;
    let validate = true;

    // Prevent Error for Duplicating SysparDocnum
    while (validate) {
      itmclacde = await getSysparIncNum("itmclacde");
      validate = await models.itemclassfile.findOne({
        attributes: ["itmclacde"],
        where: { itmclacde: itmclacde },
      });
    }

    const docnum = { itmclacde: itmclacde };
    const returnObj = { ...body, ...docnum };
    const postItemClass = await models.itemclassfile.create(returnObj);

    if (postItemClass) {
      await putSysPar(1, docnum);
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const putItemClass = async (docnum, body) => {
  try {
    if (!docnum) {
      throw new Error("Document no is required");
    }

    const updatedRows = await models.itemclassfile.update(body, {
      where: { itmclacde: docnum },
    });

    if (updatedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const deleteItemClass = async (docnum) => {
  try {
    if (!docnum) {
      throw new Error("Document No is required");
    }

    const deletedRows = await models.itemclassfile.destroy({
      where: { itmclacde: docnum },
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
  getItemClass,
  postItemClass,
  postItemClassWDocnum,
  putItemClass,
  deleteItemClass,
};
