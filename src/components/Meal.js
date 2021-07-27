import "../App.css";

const Meal = ({
  meal,
  items,
  setItems,
  subTotal,
  setSubTotal,
  total,
  setTotal,
}) => {
  const handleSubTotal = () => {
    let x = 0;
    for (let i = 0; i > items.length; i++) {
      x = x + Number(items[i].price);
    }
    x = parseFloat(x).toFixed(2);
    setSubTotal(x);
    return subTotal;
  };

  const handleTotal = (cb) => {
    let y = Number(cb) + 2.5;
    y = parseFloat(y).toFixed(2);
    setTotal(y);
  };

  return (
    <div
      className="meal"
      onClick={(event) => {
        setItems([
          ...items,
          { title: meal.title, price: meal.price, id: Math.random() * 100 },
        ]);
        handleTotal(handleSubTotal());
      }}
    >
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
