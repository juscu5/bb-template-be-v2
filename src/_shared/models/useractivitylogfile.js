const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "useractivitylogfile",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      modcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      usrdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      usrtim: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      trndte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      module: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      activity: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      fullname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      parameter: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      webpage: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      ipaddress: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      pcdomainname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      pcusername: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      osversion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pagename: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      method: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(7),
        allowNull: true,
      },
      log_dbname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      log_tablename: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      log_recid: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      logdte_client: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      logdte_server: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      system_version: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      newval: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      oldval: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fields: {
        type: DataTypes.STRING(8000),
        allowNull: true,
      },
      field1: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      field2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      field3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      logatt: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      subdrycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      table1: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      table2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      table3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      value1: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      value2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      value3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "useractivitylogfile",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "useractivitylogfile_logdte_client_index",
          using: "BTREE",
          fields: [{ name: "logdte_client" }],
        },
        {
          name: "useractivitylogfile_activity_usrdte_index",
          using: "BTREE",
          fields: [{ name: "activity" }, { name: "usrdte" }],
        },
      ],
    }
  );
};
