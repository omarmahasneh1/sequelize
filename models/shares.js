'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shares extends Model {
    static associate(post) {
      this.belongsTo(post)
    }
  };
  Shares.init({
    share_id: DataTypes.STRING
    ,primarykey:true,
  }, {
    sequelize,
    modelName: 'Shares',
  });
  return Shares;
};