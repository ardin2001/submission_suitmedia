import './style.css'

function CardItem({title, icon, description, color, triagle}) {
    return(
        <section className="carditem" style={{backgroundColor: color}}>
            <img src={icon} alt="" />
            <div className="segitiga" style={{borderLeft: `10px solid ${triagle}`}}></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    )
}
export default CardItem