'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {

    static associate(user) {
      this.belongsTo(user)
    }
  };
  Friend.init({
    name_id: DataTypes.STRING,
    primarykey:true

  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};