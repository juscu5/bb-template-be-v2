const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "usermenus",
    {
      aclkey: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      grpcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      has_add: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_delete: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_edit: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_export: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_inquiry: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_lay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_print: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_post: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_cancel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_view: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      has_unpost: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      linenum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menico: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      menacc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      mencap: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mengrp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menheader: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      menid: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      menidx: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menlvl: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      mennum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menprg: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      mensub: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menvis: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      modcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      recid: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      subdrycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      usrcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrtyp: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      usrtype: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      usrtype2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      menkey: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "user_menus",
      timestamps: false,
    }
  );
};
