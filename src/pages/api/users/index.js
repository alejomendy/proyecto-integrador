import { syncDB } from '@/BD/bd'
import { createUser } from '../../../controllers/userControllers'


export default async function createUserAPI(req, res){
    console.log('Intentando crear usuario')
    if(req.method === 'POST'){
        try {
            if (req.body.name !== null && req.body.password !== null){
                var request = await createUser(req.body.name, req.body.password, req.body.models)
                
                res.json({msg: 'Usuario creado correctamente', name: request.name})
            } 
            else{
                res.json({msg: 'Error, datos nulos'}).status(400)
                console.log('Error, datos nulos')
            }
        } catch (error) {
            res.json({msg: 'Hubo un error al crear el usuario'}).status(400)
        }
        
    }
}
