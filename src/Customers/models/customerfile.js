const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "customerfile",
    {
      recid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      area: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      holdcrelim: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      holdsales: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      warcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cusbuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      scpwd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true,
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      remark: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      x_telno: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      conper: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      trmcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cusgrp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      cusadd1: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      cusadd2: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      tinnum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      tercde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      smncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      crelim: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0.00000",
      },
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      x_telno1: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      x_faxnum: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      mobnum: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      aractcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      ewtrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      x_gldepcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      taxper: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      evatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      evatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      custyp: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      busstyle: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cusgrpcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cusgrpdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cuslock: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      linksup: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      custypcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      custypdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      spousebday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      anndate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      salcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      cusewtreq: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusevatreq: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusewtreqtyp: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cusewtreqsal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusewtreqard: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusewtreqcs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusewtreqdrs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusevatreqtyp: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cusevatreqsal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusevatreqard: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusevatreqcs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cusevatreqdrs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      inactive: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      telno: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      telno1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      faxnum: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      advactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      excrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      mascusgrpcde1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mascusgrpcde2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mascusgrpcde3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mascusgrpcde4: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mascusgrpcde5: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      brhcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      colofccde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      subagntcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cusclass: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      indcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      vattyp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "customerfile",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["cuscde"],
        },
        {
          fields: ["crelim"],
        },
        {
          fields: ["cusdsc"],
        },
        {
          fields: ["holdsales"],
        },
        {
          fields: ["holdcrelim"],
        },
      ],
    }
  );
};
