const { sequelize } = require("../bd");
const {DataTypes} = require('sequelize')

// Modelo propio para generar los usuarios 
const Users = sequelize.define('users',{
  id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name : {type: DataTypes.STRING, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
},{
  timestamps:false,
  tableName:"users"
})

module.exports ={ 
    Users,
}




