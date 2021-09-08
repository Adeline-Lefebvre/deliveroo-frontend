import Meal from "./Meal.js";
import Cart from "./Cart.js";
import { useState } from "react";
import "../App.css";

const Categories = ({ data }) => {
  const [items, setItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (meal) => {
    const exist = items.find((item) => item.title === meal.title);

    if (exist) {
      let newCart = items.slice();

      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i] === exist) {
          newCart[i].quantity = newCart[i].quantity + 1;
        }
      }
      setItems(newCart);
      setSubTotal(subTotal + Number(meal.price));
      setTotal(parseFloat(subTotal + Number(meal.price) + 2.5).toFixed(2));
    } else {
      let newCart = items.slice();

      newCart.push({
        title: meal.title,
        price: meal.price,
        quantity: 1,
      });

      setItems(newCart);
      setSubTotal(subTotal + Number(meal.price));
      setTotal(parseFloat(subTotal + Number(meal.price) + 2.5).toFixed(2));
    }
  };

  const deleteOne = (item) => {
    const exist = items.find((elem) => elem.title === item.title);
    let newCart = items.slice();

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i] === exist) {
        newCart[i].quantity = newCart[i].quantity - 1;
      }
    }
    setItems(newCart);
    setSubTotal(subTotal - Number(item.price));
    setTotal(parseFloat(subTotal - Number(item.price) + 2.5).toFixed(2));
  };

  return (
    <div>
      <div className="container cat">
        <div className="categories">
          {data.categories.map((category, index) => {
            return (
              <div key={index}>
                {category.meals.length > 0 && (
                  <div className="category">
                    <h2 key={index}>{category.name}</h2>
                    <div className="meals">
                      {category.meals.map((meal) => {
                        return (
                          <Meal
                            meal={meal}
                            key={meal.id}
                            addToCart={addToCart}
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
        <Cart
          items={items}
          subTotal={subTotal}
          total={total}
          addToCart={addToCart}
          deleteOne={deleteOne}
        />
      </div>
      <div className="see-cart">
        <div className="see-cart-btn">Voir le panier</div>
      </div>
    </div>
  );
};

export default Categories;
