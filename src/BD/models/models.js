const { sequelize } = require("../bd");
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users' , { 
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : { type: DataTypes.STRING, allowNull: false},
    password : { type: DataTypes.STRING, allowNull: false},
}, {tableName: 'users'})

module.exports = {
    Users,
}
