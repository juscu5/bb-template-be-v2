const { models } = require("../../_shared/config/config-db");

const getEmployee = async () => {
  try {
    const emp = await models.employeefile.findAll({});
    const inJoin = await Promise.all(
      emp.map(async (emp) => {
        const dept = await models.departmentfile.findOne({
          where: { deptcode: emp.deptcode },
        });

        return {
          ...emp.dataValues,
          deptdescription: dept ? dept.deptdescription : null,
        };
      })
    );

    return inJoin;
  } catch (error) {
    throw error;
  }
};

const postEmployee = async (body) => {
  try {
    const deptcode = body.deptcode;
    const dept = await models.departmentfile.findOne({
      where: {
        deptcode: deptcode,
      },
    });

    const combineBody = { ...body, deptdescription2: dept.deptdescription };
    const emp = await models.employeefile.create(combineBody);
    if (emp) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const putEmployee = async (recid, body) => {
  try {
    const deptcode = body.deptcode;
    const dept = await models.departmentfile.findOne({
      where: {
        deptcode: deptcode,
      },
    });

    const combineBody = { ...body, deptdescription2: dept.deptdescription };

    if (!recid) {
      throw new Error("Employee ID is required");
    }

    const updatedRows = await models.employeefile.update(combineBody, {
      where: { recid: recid },
    });

    if (updatedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteEmployee = async (recid) => {
  try {
    if (!recid) {
      throw new Error("Employee recid is required");
    }

    const deletedRows = await models.employeefile.destroy({
      where: { recid: recid },
    });

    if (deletedRows === 0) {
      return false; // No rows deleted
    }

    return true; // Successful deletion
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
};
