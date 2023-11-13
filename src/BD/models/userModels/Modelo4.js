
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Modelo4 = sequelize.define('Modelo4', {
campo4: { type: Sequelize.STRING, allowNull: false, unique: false, defaultValue: ''  }}, 
{timestamps:false,
tableName: "Modelo4"});

module.exports ={ 
  Modelo4,
}
