'use strict';

module.exports = (sequelize, DataTypes) => {
  const Biodata = sequelize.define('Biodata', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
  
    nama: {
      type: DataTypes.STRING
    },
    umur: {
      type:DataTypes.STRING
    },
    alamat: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'createdAt',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updatedAt',
    },
    deleted: {
      allowNull: false,
      type: DataTypes.INTEGER(1),
      defaultValue: 0,
    }
  }, {
    tableName: 'biodata',
    timestamps: false,
    defaultScope: {
      where: {
        deleted: 0
      },
      attributes: { exclude: ['deleted'] },
    },
  })

  Biodata.associate = function (models) {
    // associations can be defined here
  };

  return Biodata;
};
