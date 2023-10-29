const { sequelize } = require("../bd");
const Sequelize = require('sequelize');
      
const Chamba1 = sequelize.define('Chamba1', {
diego: {  type: Sequelize.undefined, allowNull: true, unique: false }}, 
{tableName: "Chamba1"});

module.exports ={ 
  Chamba1,
}
