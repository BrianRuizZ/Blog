import React,{ useState } from 'react'
import Inicio from './components/Inicio'
import CrearBlog from './components/CrearBlog'
import ListaBlogs from './components/ListaBlogs'

import './App.css'

function App() {

  const [inicio, setInicio] = useState(true)
  const [blogsList, setBlogsList] = useState(false)

  return (
    <div className='main'>
      {inicio ? <Inicio inicio={inicio} setInicio={setInicio} setBlogsList={setBlogsList}/> : <CrearBlog/>}
      {blogsList ? <ListaBlogs></ListaBlogs> : ''}
    </div>
  )
}

export default App
