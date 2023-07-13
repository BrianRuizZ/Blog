import { useState } from 'react'
import '../styles/CrearBlog.css'
import Blogs from '../components/Blogs'
import Inicio from './Inicio'
import TextArea from './TextArea'

export default function CrearBlog() {

    const [blogCreado, setBlogCreado] = useState(false)
    const [urlInput, setUrlInput] = useState('')
    const [url2Input, setUrl2Input] = useState('')
    const [tituloInput, setTituloInput] = useState('')
    const [descripcionInput, setDescripcionInput] = useState('')
    const [descripcion2Input, setDescripcion2Input] = useState('')
    const [agregar, setAgregar] = useState(false)

    return(
        <div className="CrearBlog-Main">
            
            {blogCreado ? <Blogs url={urlInput} url2={url2Input} titulo={tituloInput} descripcion={descripcionInput} descripcion2={descripcion2Input} setBlogCreado={setBlogCreado}/> : 
            
            <div className='CreateBlog-Form'>
                <input 
                    maxLength={15}
                    className='titulo-crearBlog' 
                    type="text" 
                    placeholder="Crea un titulo"
                    onChange={(event)=> {
                        setTituloInput(event.target.value)
                        console.log(tituloInput)
                        }
                    }
                    ></input>
                    <input 
                    type='url' 
                    className='url-crearBlog' 
                    placeholder='Pega la url de una imagen'
                    onChange={(event)=> setUrlInput(event.target.value)}
                    ></input>
                    <textarea 
                    maxLength={400}
                    rows='10' 
                    cols="40" 
                    className='text-area-crearBlog' 
                    placeholder='Escribe la informacion de tu blog'
                    onChange={(event)=> setDescripcionInput(event.target.value)}
                    ></textarea>
                    <input 
                    type='url' 
                    className='url-crearBlog' 
                    placeholder='Pega la url de una imagen'
                    onChange={(event)=> setUrl2Input(event.target.value)}
                    ></input>
                    {agregar ? '' :
                    <button 
                    className='boton-agregar-textArea'
                    onClick={()=> {
                        setAgregar(true)
                    }}>
                        +
                    </button>}
                    {agregar && <TextArea funcSet={(event)=> setDescripcion2Input(event.target.value)}/>}
                <button
                    type='submit' 
                    className='boton-subir-crearBlog'
                    onClick={()=> setBlogCreado(true)}
                    >Subir</button>
            </div>}
        </div>
    )
}