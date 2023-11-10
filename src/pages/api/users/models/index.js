import  {findModelByUser} from "@/controllers/modelControllers.js"

export default async function findModel(req, res){

    if(req.method === 'GET'){
        var userId = 1
        try {
            console.log('usuario id',userId)
            var request = await findModelByUser(userId)
            //console.log('aca tamo en el request ',request)
            res.status(200).json({"modelo": request})
            // if (userId !== null ){
            //     console.log('el body: ',req.body)
            //     var request = await findModelByUser(userId)
            //     if( request !== false){
            //         console.log('Modelo encontrado ', request)
            //         res.status(200).json({"modelo: ": request})
            //     }else{
            //         res.status(401).json({msg: 'Modelo no encontrado '})
            //     }
            //}
            // else{
            //     res.json({msg: 'Error, datos nulos'}).status(400)
            //     console.log('Error, datos nulos')
            // }
        } catch (error) {
            res.status(400).json({msg: 'Hubo un error al buscar el modelo'})
        }
    }
}