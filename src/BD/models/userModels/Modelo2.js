
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Modelo2 = sequelize.define('Modelo2', {
campo2: { type: Sequelize.STRING, allowNull: false, unique: false, defaultValue: ''  }}, 
{timestamps:false,
tableName: "Modelo2"});

module.exports ={ 
  Modelo2,
}
