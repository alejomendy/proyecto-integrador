const { Sequelize } = require('sequelize');
export default function connection(){
    const sequelize = new Sequelize('PracticoIntegrador', 'postgres', 'admin', {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    });


    try {
        const response = await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}