import '../styles/Blogs.css'

export default function Blogs({titulo,descripcion,descripcion2,url,url2,setBlogCreado}) {
    return(
        <div className="Blogs-creados-Main">
          
            {<div className="blogCreado">
            <button className='boton-volver' 
            onClick={()=> {
                setBlogCreado(false)
                }}>Volver</button>
                <h1 className='titulo-blog-creado'>{titulo}</h1>
                {url != '' ? <img className='imagen-blogcreado' src={url}></img> : ''}
                {descripcion != '' ? <p className='p-blog-creado'>{descripcion}</p> : ''}
                {url != '' ? <img className='imagen-blogcreado' src={url2}></img> : ''}
                {descripcion2 != '' ? <p className='p-blog-creado'>{descripcion2}</p> : ''}
            </div>}
            
        </div>
    )
}