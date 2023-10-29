import generateModel from "@/functions/modelGenerate";
import syncModelsRelation from "@/functions/syncModelsGenerate";



export default async function syncDBAPI(req,res) {
    if (req.method === 'POST'){
        console.log(req.body)
        const route = await generateModel(req.body.name, req.body.data, req.body.relationship);

        if (route !== false && req.body.relationship !== null){
            await syncModelsRelation(req.body.name);
        }

        console.log("se creo el modelo en la ruta: ", route);
        res.json({msj:route});
    }
    else{
        res.status(404).json({msj:'Page not found'})
    }
}