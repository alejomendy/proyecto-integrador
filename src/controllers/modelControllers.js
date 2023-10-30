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
        const response = await ModelByUser.findOne({where: {userId: userId}})
        if (response !== null){
            // console.log('response data: ', response.dataValues)
            return response.dataValues
        }
        else{
            console.log('Error al encontrar el JSON')
            return false 
        }
    } catch (error) {
        console.log('Error al encontrar el JSON (catch)')
        return false 
    }
}

module.exports = {
    createModelByUser, 
    findModelByUser,
}