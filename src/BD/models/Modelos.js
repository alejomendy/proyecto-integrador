const { sequelize } = require("../bd");
const {DataTypes} = require('sequelize');
const { Users } = require("./User");

// Genera los Modelos creados por el usuario
const ModelByUser = sequelize.define('ModelByUser',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    modelo : {type: DataTypes.STRING(1000), allowNull: false},

},{
    timestamps:false,
    tableName:"ModelByUser"
})

Users.hasMany(ModelByUser)
ModelByUser.belongsTo(Users)

module.exports ={ 
    ModelByUser,
}