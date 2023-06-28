'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ziggot = sequelize.define('Ziggot', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
    deleted: {
      allowNull: false,
      type: DataTypes.INTEGER(1),
      defaultValue: 0,
    }
  }, {
    tableName: 'ziggot',
    timestamps: false,
    defaultScope: {
      where: {
        deleted: 0
      },
      attributes: { exclude: ['deleted'] },
    },
  })

  Ziggot.associate = function (models) {
    // associations can be defined here
  };

  return Ziggot;
};
