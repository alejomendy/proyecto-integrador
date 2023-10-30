
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Tabla2 = sequelize.define('Tabla2', {
dsadsadas: { type: Sequelize.STRING, allowNull: true, unique: false, defaultValue: 'sssaaaaa'  }}, 
{timestamps:false,
tableName: "Tabla2"});

module.exports ={ 
  Tabla2,
}
