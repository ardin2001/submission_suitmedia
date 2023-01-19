import "./style.css";
import CardItem from "../CardItem/CardItem";

function CardList({ data }) {
  return (
    <article className="values">
      <h2 className="title-card">OUR VALUES</h2>
      <div className="cardlist center">
        {data.map((element) => {
          return (
            <CardItem
              key={element.id}
              title={element.title}
              icon={element.icon}
              description={element.description}
              color={element.color}
              triagle={element.triagle}
            />
          );
        })}
      </div>
    </article>
  );
}
export default CardList;