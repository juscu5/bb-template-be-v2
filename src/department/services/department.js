const { models } = require("../../_shared/config/config-db");
const { putSysPar } = require("../../_shared/services/syspar");
const {
  getSysparIncNum,
  getSysparDocnum,
} = require("../../_shared/utilities/syspar");

const getDepartment = async () => {
  try {
    const getDept = await models.departmentfile.findAll({ order: [["recid"]] });
    return getDept;
  } catch (error) {
    throw error;
  }
};

const postDepartment = async (body) => {
  try {
    const validate = await models.departmentfile.findOne({
      attributes: ["deptcode"],
      where: { deptcode: body.deptcode },
    });

    if (validate) {
      return false;
    } else {
      const returnObj = { ...body };
      await models.departmentfile.create(returnObj);
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const postDepartmentWDocnum = async (body) => {
  try {
    let deptdocnum;
    let validate = true;

    // Prevent Error for Duplicating SysparDocnum
    while (validate) {
      deptdocnum = await getSysparIncNum("deptdocnum");
      validate = await models.departmentfile.findOne({
        attributes: ["deptcode"],
        where: { deptcode: deptdocnum },
      });
    }

    const deptcde = { deptcode: deptdocnum };
    const returnObj = { ...body, ...deptcde };
    const postCus = await models.departmentfile.create(returnObj);

    if (postCus) {
      await putSysPar(1, { deptdocnum: deptdocnum });
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const putDepartment = async (docnum, body) => {
  try {
    if (!docnum) {
      throw new Error("Document ID is required");
    }

    const updatedRows = await models.departmentfile.update(body, {
      where: { deptcode: docnum },
    });

    if (updatedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const deleteDepartment = async (docnum) => {
  try {
    if (!docnum) {
      throw new Error("Document ID is required");
    }

    const deletedRows = await models.departmentfile.destroy({
      where: { deptcode: docnum },
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
  getDepartment,
  postDepartment,
  postDepartmentWDocnum,
  putDepartment,
  deleteDepartment,
};
