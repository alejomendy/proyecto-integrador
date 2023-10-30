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

module.exports = {
    createModelByUser, 
}