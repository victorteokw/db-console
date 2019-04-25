'use strict';
module.exports = (sequelize, DataTypes) => {
  const ModelOne = sequelize.define('ModelOne', {
    field1: DataTypes.STRING,
    field2: DataTypes.INTEGER
  }, {});
  ModelOne.associate = function(models) {
    // associations can be defined here
  };
  return ModelOne;
};