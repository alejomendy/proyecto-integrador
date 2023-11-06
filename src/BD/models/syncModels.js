const { sequelize } = require("../bd");
const { Modelo1 } = require("./Modelo1");
const { Modelo2 } = require("./Modelo2");

export default async function syncUserModel(){
    try {
        await sequelize.sync({force: true});
        console.log('Sync was successfully.');
        return true
    } catch (error) {
        console.error('Unable to sync to the database:', error);
        return false
    }
    
}