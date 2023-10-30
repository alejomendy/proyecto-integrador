
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Model1 = sequelize.define('Model1', {
campo1: { type: Sequelize.STRING, allowNull: false, unique: false, defaultValue: ''  }}, 
{timestamps:false,
tableName: "Model1"});

module.exports ={ 
  Model1,
}
