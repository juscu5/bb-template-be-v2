const { models } = require("../../_shared/config/config-db");
const { putSysPar } = require("../../_shared/services/syspar");
const {
  getSysparIncNum,
  getSysparDocnum,
} = require("../../_shared/utilities/syspar");

const getItem = async () => {
  try {
    const items = await models.itemfile.findAll({});
    const inJoin = await Promise.all(
      items.map(async (items) => {
        const itemClass = await models.itemclassfile.findOne({
          where: { itmclacde: items.itmclacde },
        });

        return {
          ...items.dataValues,
          itmcladsc: itemClass ? itemClass.itmcladsc : null,
        };
      })
    );

    return inJoin;
  } catch (error) {
    throw error;
  }
};

const postItemFile = async (body) => {
  try {
    const existingItem = await models.itemfile.findOne({
      where: { itmcde: body.itmcde },
    });

    if (existingItem) {
      return false;
    }
    await models.itemfile.create(body);
    return true;
  } catch (error) {
    throw error;
  }
};

const postItemFileDocnum = async (body) => {
  try {
    let itmcde;
    let validate = true;

    // Prevent Error for Duplicating SysparDocnum
    while (validate) {
      itmcde = await getSysparIncNum("itmcde");
      validate = await models.itemfile.findOne({
        // Use models.itemfile instead of models.itmcde
        attributes: ["itmcde"],
        where: { itmcde: itmcde },
      });
    }

    const docnum = { itmcde: itmcde };
    const returnObj = { ...body, ...docnum };
    const postItemFile = await models.itemfile.create(returnObj);

    if (postItemFile) {
      await putSysPar(1, docnum);
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const putItemFile = async (docnum, body) => {
  try {
    if (!docnum) {
      throw new Error("Document No is required");
    }

    const updatedRows = await models.itemfile.update(body, {
      where: { itmcde: docnum },
    });

    if (updatedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (docnum) => {
  try {
    const deleted = await models.itemfile.destroy({
      where: { itmcde: docnum },
    });

    if (deleted) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getItem,
  postItemFile,
  postItemFileDocnum,
  deleteItem,
  putItemFile,
};
