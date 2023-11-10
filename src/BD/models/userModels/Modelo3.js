
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Modelo3 = sequelize.define('Modelo3', {
campo3: { type: Sequelize.STRING, allowNull: false, unique: false, defaultValue: ''  }}, 
{timestamps:false,
tableName: "Modelo3"});

module.exports ={ 
  Modelo3,
}
