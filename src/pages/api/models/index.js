import generateModel from "@/functions/modelGenerate";
import syncModelsRelation from "@/functions/syncModelsGenerate";



export default async function syncDBAPI(req,res) {
    if (req.method === 'POST'){
        //Formato en el que deberia llegar
        const name = ["Modelo1", "Modelo2"];
        const data = [[{name:'elpa' ,type: 'STRING', allowNull: false}],[{name: 'elpatron', type: 'STRING', allowNull: false}]]
        const relationship = [{tabla1: 'Modelo1', tabla2: 'Modelo2', tipo: '1a1'}]

        const route = await generateModel(name, data, relationship);

        if (route !== false && relationship !== null){
            await syncModelsRelation(name);
        }

        // const route = await generateModel(req.body.name, req.body.data, req.body.relationship);

        // if (route !== false && req.body.relationship !== null){
        //     await syncModelsRelation(req.body.name);
        // }

        console.log("se creo el modelo en la ruta: ", route);
        res.json({msj:route});
    }
    else{
        res.status(404).json({msj:'Page not found'})
    }
}