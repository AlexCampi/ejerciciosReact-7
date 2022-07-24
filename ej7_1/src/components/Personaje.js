function Personaje(props){
    return(
        <div className='card'>
            <img src={props.imagen} alt={props.nombre} />
            <div className="container">
            <h4>{props.nombre}</h4>
            </div>
        </div>
    )
}

export default Personaje