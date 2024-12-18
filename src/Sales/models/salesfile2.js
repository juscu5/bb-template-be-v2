const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "salesfile2",
    {
      recid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      linegrp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkasy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pck_itm_cde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      copyline: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      scpwddis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      scpwdamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      scpwdamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      prcdst1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      prcdst2: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      prcdst3: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      groprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      sonum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      disamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      conver1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      smncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      smndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
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
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      disamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      untprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      groprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      untcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      sernum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      drnum: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      disper: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      lstcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extlst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extave: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      fifcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extfif: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      netvatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      vatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      ewtamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      evatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      ewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      ewtrte: {
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
      itmrem1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmrem2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmrem3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      netvatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      chkewt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      amtdis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      groext: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      amtdisfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      groextfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      increp: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      cusgrpcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cusitmcde: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      dettyp: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "i",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      drdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      copyqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      barcodenum: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      brhcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      batchnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      expdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      mfgdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      barcde: {
        type: DataTypes.STRING(35),
        allowNull: true,
      },
      discamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      discamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
      },
      disccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      discper: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      ponum: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      vattyp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      tableName: "salesfile2",
      timestamps: false,
      indexes: [
        {
          name: "salesfile2_curcde_index",
          fields: ["curcde"],
        },
        {
          name: "salesfile2_itmcde_index",
          fields: ["itmcde"],
        },
        {
          name: "salesfile2_trncde_index",
          fields: ["trncde"],
        },
        {
          name: "salesfile2_trndte_index",
          fields: ["trndte"],
        },
        {
          name: "salesfile2_cuscde_index",
          fields: ["cuscde"],
        },
        {
          name: "salesfile2_docnum_index",
          fields: ["docnum"],
        },
        {
          name: "salesfile2_sonum_index",
          fields: ["sonum"],
        },
        {
          name: "salesfile2_untmea_index",
          fields: ["untmea"],
        },
        {
          name: "salesfile2_vattyp_index",
          fields: ["vattyp"],
        },
        {
          name: "salesfile2_warcde_index",
          fields: ["warcde"],
        },
      ],
    }
  );
};
