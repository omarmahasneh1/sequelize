'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(post,Friend) {
      // define association here
      this.hasMany(post)
      this.hasMany(Friend)

    }
  };
  User.init({
    name: DataTypes.STRING,
    allonull:false,
  }, 
  {email: DataTypes.STRING,
    allonull:false,
    primarykey:true,
    unique:true,
    validate:{ISEMaile:true,
    notEmpty:true}
  },
  {DOT:DataTypes.STRING,
    allonull:false},
  
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};