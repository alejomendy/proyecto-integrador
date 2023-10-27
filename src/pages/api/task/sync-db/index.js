import { syncDB } from "@/BD/bd";
import { Users } from "@/BD/models/UserModel";


export default async function syncDBAPI(req,res) {
    if (req.method === 'GET'){
        const sync = await syncDB();
        console.log(sync);
        res.json({msj:sync});
    }
    else{
        res.status(404).json({msj:'Page not found'})
    }
}
