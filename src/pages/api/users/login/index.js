import  {loginUser} from "@/controllers/userControllers.js"

export default async function login(req, res){

    if(req.method === 'POST'){
        try {
            if (req.body.name !== null && req.body.password !== null){
                var request = await loginUser(req.body.name, req.body.password)
                if( request !== false){
                    console.log('user encontrado', request)
                    res.status(200).json({id: request.id, name: request.name, password: request.password})
                }else{
                    res.status(401).json({msg: 'Usuario no encontrado'})
                }
            }
            else{
                res.status(401).json({msg: 'Error, datos nulos'})
                console.log('Error, datos nulos')
            }
        } catch (error) {
            res.status(401).json({msg: 'Hubo un error al iniciar sesion'})
        }
        
    }
}