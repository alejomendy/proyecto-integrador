
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const daddsad = sequelize.define('daddsad', {
dadadasdsa: { type: Sequelize.STRING, allowNull: false, unique: false, defaultValue: 'dsadsadsa'  }}, 
{timestamps:false,
tableName: "daddsad"});

module.exports ={ 
  daddsad,
}
