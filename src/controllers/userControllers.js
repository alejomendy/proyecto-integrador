import { syncDB } from "@/BD/bd";
import { Users } from "@/BD/models/User";


const createUser = async (name , password) => {
    try {
        const response = await Users.findOne({where: {name: name, password: password}})
        console.log(response)
        if (response === null){
            
            // console.log(name, password)
            const user = await Users.create({name: name, password: password})
            // console.log(user)
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

const loginUser = async (name , password) => {
    try {
        const response = await Users.findOne({where: {name: name, password: password}})
        if (response !== null){
            // console.log('response data: ', response.dataValues)
            return response.dataValues
        }
        else{
            console.log('Error al iniciar sesion')
            return false 
        }
    } catch (error) {
        console.log('Error al iniciar sesion catch')
        return false 
    }
}

module.exports = {
    createUser,
    loginUser,
}