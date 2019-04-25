'use strict';
module.exports = (sequelize, DataTypes) => {
  const ModelTwo = sequelize.define('ModelTwo', {
    field1: DataTypes.STRING,
    field2: DataTypes.INTEGER
  }, {});
  ModelTwo.associate = function(models) {
    // associations can be defined here
  };
  return ModelTwo;
};