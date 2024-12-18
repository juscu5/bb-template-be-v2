const { models } = require("../../_shared/config/config-db");
const { encryptSHA1 } = require("../../_shared/utilities/encryption");
const { signToken } = require("../../_shared/middleware/authservices");

const addUser = async (body) => {
  try {
    const returnObj = {
      usrcde: body.usrname,
      usrname: body.usrname,
      usrpwd: encryptSHA1(body.usrpwd),
      usrlvl: body.usrlvl,
      emailadd: body.emailadd,
      fullname: body.fullname,
    };
    return await models.users.create(returnObj);
  } catch (error) {
    throw error;
  }
};

const editUser = async (recid, body) => {
  try {
    const data = {
      usrcde: body.usrname,
      usrname: body.usrname,
      usrlvl: body.usrlvl,
      emailadd: body.emailadd,
      fullname: body.fullname,
    };
    const dataWPass = {
      ...data,
      usrpwd: encryptSHA1(body.usrpwd),
    };
    if (!recid) {
      throw new Error("User ID is required");
    }

    if (parseInt(recid) === 0 || body.usrname === "admin") {
      console.log("Can't Update Admin");
      return false;
    } else {
      // w/ and w/o user password
      if (body.usrpwd === "") {
        const updateUser = await models.users.update(data, {
          where: { recid: recid },
        });
        if (updateUser === 0) {
          return false;
        }
      } else {
        const updateUser = await models.users.update(dataWPass, {
          where: { recid: recid },
        });
        if (updateUser === 0) {
          return false;
        }
      }
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (recid) => {
  try {
    if (!recid) {
      throw new Error("User recid is required");
    }

    if (parseInt(recid) === 0) {
      console.log("Can't delete Admin");
      return false;
    } else {
      const deletedRows = await models.users.destroy({
        where: { recid: recid },
      });

      if (deletedRows === 0) {
        return false;
      }

      return true;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMe = async (empcode) => {
  const me = await models.users.findOne({ where: { usrcde: empcode } });
  console.log(me);

  return me;
};

const login = async (req) => {
  try {
    const findUser = await models.users.findOne({
      where: {
        usrcde: req.usrcde,
        usrpwd: encryptSHA1(req.usrpwd),
      },
      raw: true,
    });

    console.log(findUser);

    if (!findUser) {
      return {
        err: {
          code: 401,
          status: "No user found",
        },
        data: findUser,
      };
    }

    const token = signToken(findUser);
    console.log(token);

    return {
      err: null,
      data: {
        code: 200,
        status: "Successfully logged in",
        payload: {
          BearerToken: token,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      err: {
        code: 500,
        status: error.message,
      },
      data: null,
    };
  }
};

const changePass = async (req) => {
  try {
    const data = {
      usrpwd: encryptSHA1(req.newpass),
    };

    const findUser = await models.users.findOne({
      where: {
        usrcde: req.usrcde,
        usrpwd: encryptSHA1(req.usrpwd),
      },
      raw: true,
    });

    if (!findUser) {
      return {
        err: {
          code: 401,
          status: "Invalid Password",
        },
        data: findUser,
      };
    } else {
      await models.users.update(data, {
        where: { usrcde: req.usrcde },
      });
    }

    return {
      err: null,
      data: {
        code: 200,
        status: "Password Change Successfully",
      },
    };
  } catch (error) {
    return {
      err: {
        code: 500,
        status: error.message,
      },
      data: null,
    };
  }
};

module.exports = {
  addUser,
  editUser,
  deleteUser,
  getMe,
  login,
  changePass,
};
