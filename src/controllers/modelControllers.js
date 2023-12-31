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
        //console.log('aca tamo en el response:', response[0].dataValues.modelo)
        const modelos = []
        for (let index = 0; index < response.length; index++) {
            const modelo = response[index].dataValues.modelo;
            modelos.push(modelo)
            
        }
        //console.log('los modelos: ', modelos)
        return modelos
        
    } catch (error) {
        console.log('Error al encontrar el JSON (catch)')
        return false 
    }
}

const findModelById = async(modelId) => {
    console.log("model id:",modelId)
    const modelos=[]
    try {
        const response = await ModelByUser.findByPk(modelId)
        modelos.push(response.dataValues.modelo)
        return modelos
        
    } catch (error) {
        console.log('Error al encontrar el JSON (catch)')
        return false 
    }
}


module.exports = {
    createModelByUser, 
    findModelByUser,
    findModelById,
}