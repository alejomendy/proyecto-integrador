import NavBar from "../components/nav";
import VerificarCuenta from "../components/verificarCuenta";
import React, { Suspense } from "react";
import Visualizer from "../components/visualizar";

export default async function Inicio(){
    await new Promise ((resolve)=> setTimeout(resolve,2000))
    return (
        <div>
            <NavBar/>
            <Suspense fallback={<div>CARGANDO......</div>}>
            
            <Visualizer/>

            </Suspense>
           
        </div>
    )
}