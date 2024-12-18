const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "departmentfile",
    {
      deptcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      deptcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      deptdescription: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      deptdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      divcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      glcredep: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      gldebdep: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      gldepcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      meetingdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      newdeptcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      olddeptcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      recid: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
      },
      subdrycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      rccode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "departmentfile",
      timestamps: false,
    }
  );
};
