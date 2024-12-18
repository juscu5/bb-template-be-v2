const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "menus",
    {
      allow_unpost: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_post: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_lay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_inquiry: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_export: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      recid: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      menico: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      allow_add: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_edit: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_delete: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_print: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      allow_view: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      aclkey: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      allow_cancel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      menheader: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mencol: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menrow: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      modcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menprg: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      mencap: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      mengrp: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      mensub: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      linenum: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      mennum: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      menidx: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      menlvl: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      menid: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      comcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      dashico: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fontsize: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      in_dashboard: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      mf_tblname: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      modcd: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      moddesc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      modsubdry: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      popover: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      subdrycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      usedscascde: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      usrtyp: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      def_inquiry: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "0",
      },
      def_lay: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "0",
      },
      panelsize: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      usrtyp2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "x",
      },
      sal_info_toggle: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      sal_inquiry_toggle: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      tmp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "menus",
      timestamps: false,
    }
  );
};
