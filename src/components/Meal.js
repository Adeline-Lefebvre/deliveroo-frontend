import "../App.css";

const Meal = ({ meal, addToCart }) => {
  return (
    <div className="meal" onClick={() => addToCart(meal)}>
      <div className="col-1">
        <h3>{meal.title}</h3>
        {meal.description && <p className="description">{meal.description}</p>}
        <div className="line-3">
          <div style={{ fontSize: "17px", color: "#808484" }}>
            {meal.price}
            {" €"}
          </div>
          {meal.popular && (
            <div className="popular">
              <i className="fas fa-star" style={{ marginRight: "5px" }}></i>
              Populaire
            </div>
          )}
        </div>
      </div>
      {meal.picture && <img className="img" src={meal.picture} alt="" />}
    </div>
  );
};

export default Meal;
