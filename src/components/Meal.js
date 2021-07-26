import "../App.css";

const Meal = ({ meal }) => {
  return (
    <div className="meal">
      <div className="col-1">
        <h3>{meal.title}</h3>
        <p className="description">{meal.description}</p>
        <div className="line-3">
          <div style={{ fontSize: "17px", color: "#808484" }}>{meal.price}</div>
          {meal.popular && (
            <div className="popular">
              <i class="fas fa-star"></i>Populaire
            </div>
          )}
        </div>
      </div>
      {meal.picture && <img className="img" src={meal.picture} alt="" />}
    </div>
  );
};

export default Meal;
