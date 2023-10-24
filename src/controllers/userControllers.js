import { Users } from "@/BD/models/models";

const createUser = async (name , password) => {
    try {
        const response = await Users.findOne({where: {name: name, password: password}})
        if (response === null){
            const user = await Users.create({name: name, password: password})
            return user.dataValues
        }
        else{
            console.log('Usuario ya existente')
            return false 
        }
    } catch (error) {
        console.log('Error al crear el usuario')
        return false 
    }
}


module.exports = {
    createUser,
}