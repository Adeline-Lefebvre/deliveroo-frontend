import Meal from "./Meal.js";
import Basket from "./Basket.js";
import "../App.css";

const Categories = ({ data }) => {
  return (
    <div className="container" style={{ padding: "30px 0", display: "flex" }}>
      <div className="categories">
        {data.categories.map((category, index) => {
          return (
            <div>
              {category.meals.length > 0 && (
                <div className="category">
                  <h2 key={index}>{category.name}</h2>
                  <div className="meals">
                    {category.meals.map((meal) => {
                      return <Meal meal={meal} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Basket />
    </div>
  );
};

export default Categories;
