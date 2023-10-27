import { syncDB } from "@/BD/bd";
import generateModel from "@/functions/modelGenerate";
import syncModelsRelation from "@/functions/syncModelsGenerate";



export default async function syncDBAPI(req,res) {
    if (req.method === 'GET'){
        const name = ['ModelByUser', 'SecondModel'];
    
        const data = [[{ name: 'nombre', type: 'STRING', allowNull: false },],[{ name: 'nombre', type: 'STRING', allowNull: false },],
        //pasar json
        ];
        const relationship = [{tipo:'1a1', tabla:'ModelByUser', relacion: "Comments"},]
        const route = await generateModel(name, data, relationship);
        if (route !== false && relationship !== null){
            await syncModelsRelation(name);

        }
        console.log("se creo el modelo en la ruta: ", route);
        res.json({msj:route});
    }
    else{
        res.status(404).json({msj:'Page not found'})
    }
}