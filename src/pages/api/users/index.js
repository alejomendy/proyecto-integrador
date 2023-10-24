import { createUser } from '../../../controllers/userControllers'



 if(req.method === 'POST'){
    if (req.body.name !== null && req.body.password !== null){
        var request = await createUser(req.body.name, req.body.password)

} 
}