const { ModelByUser } = require("@/BD/models/Modelos");

const createModelByUser = async (modelo, userId) => {
    try {
        const model = await ModelByUser.create({modelo: modelo, userId: userId})
        return model.dataValues
       
    } catch (error) {
        console.log('Error al crear el modelo')
        return false 
    }
}

const findModelByUser = async(userId) => {
    const modelos = []
    try {
        console.log('usuario id controller',userId)
        const response = await ModelByUser.findAll({where: {userId: userId}})
        console.log('response: ', response.length)
        for (let index = 0; index < response.length; index++) {
            
            const modelo = response[index].dataValues.modelo;
            modelos.push(modelo)
            
        }
        return modelos
        
    } catch (error) {
        console.log('Error al encontrar el JSON (catch)')
        return false 
    }
}

module.exports = {
    createModelByUser, 
    findModelByUser,
}