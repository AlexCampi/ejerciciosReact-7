import Personaje from './Personaje'

function Personajes(props){
    return(
        <div className='catalogo'>
            {props.personajes.map((personaje, index) => {
                return (<Personaje key={index} imagen={personaje.image} nombre={personaje.name} />)
            })}
        </div>
    )
}

export default Personajes