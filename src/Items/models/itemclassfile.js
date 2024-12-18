const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "itemclassfile",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      itmclacde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      itmcladsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      newitmclacde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      olditmclacde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      cgsdebcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cgscrecde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      recdebcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      reccrecde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "itemclassfile",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
      ],
    }
  );
};
