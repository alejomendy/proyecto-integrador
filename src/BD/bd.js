const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('Practico-Integrador', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});


    

const testConecction = async () => { 
    try {
        await sequelize.authenticate({force: true});
        console.log('Connection has been established successfully.');
        return true
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false
    }
}

const syncDB = async () => { 
    try {
        await sequelize.sync({force: true});
        console.log('Sync was successfully.');
        return true
    } catch (error) {
        console.error('Unable to sync to the database:', error);
        return false
    }
}

module.exports = {
    testConecction,
    sequelize,
    syncDB
}



