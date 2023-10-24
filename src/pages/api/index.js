import { testConecction } from "@/BD/bd";

export default async function conectar(req,res) {
    if (req.method === 'GET'){
        const connect = await testConecction(); 
        console.log(connect);
        res.json({msj:connect});
    }
    else{
        res.status(404).json({msj:'Page not found'})
    }
}











