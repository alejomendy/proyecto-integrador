import  {findModelByUser} from "@/controllers/modelControllers.js"

export default async function login(req, res){

    if(req.method === 'POST'){
        try {
            if (req.body.id !== null ){
                var request = await loginUser(req.body.name, req.body.password)
                if( request !== false){
                    console.log('user encontrado', request)
                    res.status(200).json({id: request.id})
                }else{
                    res.status(401).json({msg: 'Usuario no encontrado'})
                }
            }
            else{
                res.json({msg: 'Error, datos nulos'}).status(400)
                console.log('Error, datos nulos')
            }
        } catch (error) {
            res.status(400).json({msg: 'Hubo un error al iniciar sesion'})
        }
        
    }
}