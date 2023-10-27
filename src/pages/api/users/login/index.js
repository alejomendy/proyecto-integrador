import { loginUser } from '../../../controllers/userControllers'

export default async function loginUser(req, res){

    if(req.method === 'POST'){
        try {
            if (req.body.name !== null && req.body.password !== null){
                var request = await loginUser(req.body.name, req.body.password)
            }
            else{
                res.json({msg: 'Error, datos nulos'}).status(400)
                console.log('Error, datos nulos')
            }
        } catch (error) {
            res.json({msg: 'Hubo un error al iniciar sesion'}).status(400)
        }
        
    }
}