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
    try {
        console.log('usuario id controller',userId)
        const response = await ModelByUser.findAll({where: {userId: userId}})
        for (let index = 0; index < response.length; index++) {
            
            const modelo = response[index].dataValues.modelo;
            console.log(modelo)
              
        }
        return modelo
        
    } catch (error) {
        console.log('Error al encontrar el JSON (catch)')
        return false 
    }
}

module.exports = {
    createModelByUser, 
    findModelByUser,
}