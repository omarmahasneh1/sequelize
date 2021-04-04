'use strict';
const {
  Model
} = require('sequelize');
const comment = require('./comment');
const postlike = require('./postlike');
const shares = require('./shares');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(usre,shares,postlike,comment) {
      this.hasMany(shares)
      this.hasMany(postlike)
      this.hasMany(comment)
      this.belongsTo(user)
    }
  };
  post.init({
    conte: DataTypes.STRING
  },
  {post_id:
  DataTypes.STRING,
  primarykey:true,
  },
  {post_comment:DataTypes.STRING},
  {post_date:DataTypes.STRING},
  {
    sequelize,
    modelName: 'post',
  });
  return post;
};