import { testConecction } from "@/BD/bd";
import { createUser } from "../../controllers/userControllers"

export default async function conectar(req,res) {
    if (req.method === 'GET'){
        const connect = await testConecction(); 
        console.log(connect);
        res.json({msj:connect});
    }
    else if(req.method === 'POST'){
            if (req.body.name !== null && req.body.password !== null){
                var request = await createUser(req.body.name, req.body.password)

        } 
    }
    else{
        res.status(404).json({msj:'Page not found'})
    }
}











