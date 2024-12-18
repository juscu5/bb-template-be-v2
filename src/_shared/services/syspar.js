const { models } = require("../config/config-db");

const putSysPar = async (recid, body) => {
  try {
    const { ...data } = body;
    const updatedRows = await models.syspar.update(data, {
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

module.exports = {
  putSysPar,
};
