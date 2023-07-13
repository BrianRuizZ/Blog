export default function TextArea({funcSet}) {
    return(
        <textarea 
        maxLength={400}
        rows='10' 
        cols="40" 
        className='text-area-crearBlog' 
        placeholder='Escribe la informacion de tu blog'
        onChange={funcSet}
        ></textarea>
    )
}