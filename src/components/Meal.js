import "../App.css";

const Meal = ({ meal }) => {
  return (
    <div className="meal">
      <div className="col-1">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <div>
          <div>{meal.price}</div>
          {meal.popular && <div>Populaire</div>}
        </div>
      </div>
      <img className="img" src={meal.picture} alt="" />
    </div>
  );
};

export default Meal;
