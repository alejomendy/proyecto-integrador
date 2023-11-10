
const { sequelize } = require("../../bd");
const Sequelize = require('sequelize');
      
const Modelo5 = sequelize.define('Modelo5', {
idporquesi: { type: Sequelize.STRING, allowNull: true, unique: true, defaultValue: 'defaultIdPorqueSi'  },
  otroTerribleCampo: { type: Sequelize.STRING, allowNull: false, unique: true, defaultValue: 'AltoDefault'  }}, 
{timestamps:false,
tableName: "Modelo5"});

module.exports ={ 
  Modelo5,
}
