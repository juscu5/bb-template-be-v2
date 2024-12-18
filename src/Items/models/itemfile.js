const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "itemfile",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      ptycde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      olditmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      saldisact: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      purdisact: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      scpwddis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      supdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: "itmcde",
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      untmea2: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      conver: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      untcst1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      untcst2: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      crilvl: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      remarks: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      maxlvl: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      status: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      lstcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      untcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      brndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      itmcladsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      itmmdl: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      supcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      brncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      itmclacde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      salum: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      srtum: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      recum: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      prtum: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      invum: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      barcde: {
        type: DataTypes.STRING(35),
        allowNull: true,
      },
      cstdebcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cstcrecde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      inactive: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      cgsactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      salactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      invactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      srtactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      multium: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      x_gldepcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      reqsernum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      prtactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      puractcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      purtaxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      salewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      purewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      salevatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      purevatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      salcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      purcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
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
      itmbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      strqty: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      chknontrd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      package: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rebdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      itmprt: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      reqbatchnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      itmpic: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      itmpic2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      itmpic3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      itmpic4: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "itemfile",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "itmcde",
          unique: true,
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "itemfile_crilvl_index",
          using: "BTREE",
          fields: [{ name: "crilvl" }],
        },
        {
          name: "itemfile_itmcde_index",
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
      ],
    }
  );
};
