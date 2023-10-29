const { Modelo3 } = require("./Modelo3");
const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Modelo1 = sequelize.define('Modelo1', {
nombre: { type: Sequelize.STRING, allowNull: false, unique: false }}, 
{timestamps:false,
tableName: "Modelo1"});

module.exports ={ 
  Modelo1,
}
Modelo1.hasMany(Modelo3) 
Modelo3.belongsTo(Modelo1) 