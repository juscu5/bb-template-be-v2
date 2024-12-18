const { models } = require("../config/config-db");

const postActivity = async (body) => {
  try {
    const returnObj = { ...body };

    // con
    const logfile = await models.useractivitylogfile.create(returnObj);
    const sysparRecord = await models.syspar.findOne();

    // count
    const countLogs = await models.useractivitylogfile.count();
    const userlogmaxrec = sysparRecord.userlogmaxrec;

    // logic came from php
    if (countLogs > userlogmaxrec) {
      const exceedRec = countLogs - userlogmaxrec;
      try {
        await models.useractivitylogfile.destroy({
          where: {},
          order: [["recid", "ASC"]],
          limit: exceedRec,
        });
      } catch (error) {
        console.log(error);
      }
    }

    return logfile;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  postActivity,
};
