
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Tumodelo = sequelize.define('Tumodelo', {
dsadsa: { type: Sequelize.STRING, allowNull: false, unique: true, defaultValue: 'ssssss'  }}, 
{timestamps:false,
tableName: "Tumodelo"});

module.exports ={ 
  Tumodelo,
}
