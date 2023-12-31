import  {findModelByUser} from "@/controllers/modelControllers.js"

export default async function findModel(req, res){

    if(req.method === 'POST'){
        const userId = req.body.userId
        try {
            if (userId !== null ){
                const request = await findModelByUser(userId)
                if( request !== false){
                    res.json({"modelo": request})
                }else{
                    res.status(401).json({msg: 'Modelo no encontrado '})
                }
            }
            else{
                res.json({msg: 'Error, datos nulos'}).status(400)
                console.log('Error, datos nulos')
            }
        } catch (error) {
            res.status(400).json({msg: 'Hubo un error al buscar el modelo'})
        }
    }
}