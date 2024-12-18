const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "salesfile1",
    {
      recid: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      cancelrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      prttyp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      x_gldepcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      colschdnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      totscpwdamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      totscpwdamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        unique: true,
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      trmdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      smndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      shipto: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      trntot: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      smncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      trmcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cusgrp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      comcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      sonum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      shipto2: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      vatamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      vatrte: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      othchatot: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      textprc: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      trmtypcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      trmtypdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      othchatotfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      trntotfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      textprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      remarks: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      vat: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      ewtrte: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      refnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      docapp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      docbal: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      setdocbal: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      totpdc: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      settotpdc: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      amtapp: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      memtypcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      manualgl: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      ewtamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      pretaxamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      pretaxrte: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      netvatamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      ewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      docbalfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      vatableamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      vatexemptamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      vatzeroratedamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      nonvat: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      orderby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      projname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      projsite: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ra: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      sibill: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      billtype: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      siremarks: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      salesengr: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      preby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      chkby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      apvby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      delconfnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ffrom: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      chkasy: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      chkewt: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      totamtdis: {
        type: DataTypes.DECIMAL(18, 2),
        defaultValue: 0.0,
      },
      totgroext: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      totamtdisfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      totgroextfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      netamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      netamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      ponum: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      increp: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      pcknum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      cusgrpcde: {
        type: DataTypes.STRING(30),
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
      manualewt: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      bilnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      doclock: {
        type: DataTypes.STRING(1),
        defaultValue: "N",
      },
      bnkcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      chknum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      voudocnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      trndte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      duedate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      logdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      lastpaydte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      canceldte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      radte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      aprdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      drdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      chkevat: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      evatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      evatrte: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      evatamt: {
        type: DataTypes.DECIMAL(18, 5),
        defaultValue: 0.0,
      },
      manualevat: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      advdoc: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      brhcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      drnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      from: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      paydoc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      vattyp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      trgtdeldte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "salesfile1",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["docnum"],
        },
        {
          fields: ["cuscde"],
        },
        {
          fields: ["cusdsc"],
        },
        {
          fields: ["drdte"],
        },
        {
          fields: ["lastpaydte"],
        },
        {
          fields: ["refnum"],
        },
        {
          fields: ["setdocbal"],
        },
        {
          fields: ["setdocbalfor"],
        },
        {
          fields: ["settotpdc"],
        },
        {
          fields: ["trmcde"],
        },
        {
          fields: ["trncde"],
        },
        {
          fields: ["trndte"],
        },
        {
          fields: ["trntot"],
        },
        {
          fields: ["docnum"],
        },
        {
          fields: ["vattyp"],
        },
        {
          fields: ["docapp"],
        },
      ],
    }
  );
};
