'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ziggot = sequelize.define('Ziggot', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false    
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deleted: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0,
      allowNull: false
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