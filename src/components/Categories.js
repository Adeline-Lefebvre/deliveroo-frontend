import Meal from "./Meal.js";
import Basket from "./Basket.js";
import { useState } from "react";
import "../App.css";

const Categories = ({ data }) => {
  const [items, setItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

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
                      return (
                        <Meal
                          meal={meal}
                          items={items}
                          setItems={setItems}
                          subTotal={subTotal}
                          setSubTotal={setSubTotal}
                          total={total}
                          setTotal={setTotal}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Basket items={items} subTotal={subTotal} total={total} />
    </div>
  );
};

export default Categories;
