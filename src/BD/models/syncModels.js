const { sequelize } = require("../bd");
const { Modelo5 } = require("./Modelo5");

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