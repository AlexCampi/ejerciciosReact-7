import Card from "./Card"

function Cards(props) {
    return (
        <div className="catalogo">
            {props.cards.map((carta, index) => {
                return (<Card key={index} image={carta.imageUrl} description={carta.text} title={carta.name} />)
            })}
        </div>
    )
}

export default Cards