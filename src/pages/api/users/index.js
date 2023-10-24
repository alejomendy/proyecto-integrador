import { createUser } from '../../../controllers/userControllers'


export default async function createUserAPI(req, res){
    console.log('entrando')
    if(req.method === 'POST'){
        try {
            if (req.body.name !== null && req.body.password !== null){
                var request = await createUser(req.body.name, req.body.password)
                res.json({msg: 'usuario creado correctamente', name: request.name})
            } 
            else{
                res.json({msg: 'error, datos nulos'}).status(400)
                console.log('error, datos nulos')
            }
        } catch (error) {
            res.json({msg: 'hubo un error al crear el usuario'}).status(400)
        }
        
    }
}
