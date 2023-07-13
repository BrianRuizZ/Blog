import { useState } from 'react'
import '../styles/Inicio.css'


export default function Inicio({setInicio, setBlogsList}){

    return(
        <>
        <div className='Inicio-main'>
            <h1 className="titulo-inicio">Crea tu propio <span className="span-titulo-inicio">Blog</span></h1>
            <button onClick={()=> setInicio(false)} className="botonCrear-inicio">Crear</button> 
        </div>
        </>
    )
}