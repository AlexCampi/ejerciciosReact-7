function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <div className="container">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card