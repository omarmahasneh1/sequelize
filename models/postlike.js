'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postlike extends Model {
    static associate(post) {
      this.belongsTo(post)
    }
  };
  postlike.init({
    postlike_id: DataTypes.STRING
    ,primarykey:true,
  }, {
    sequelize,
    modelName: 'postlike',
  });
  return postlike;
};