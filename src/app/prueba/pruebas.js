import { testConecction } from "../BD/bd";
export default function prueba(req , res) {
    const data = await(testConecction)
    console.log(data)
    res.json({msj: data})

}