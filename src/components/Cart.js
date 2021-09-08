import Item from "./Item.js";
import "../App.css";

const cart = ({ items, subTotal, total, addToCart, deleteOne }) => {
  let displayItems = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].quantity > 0) {
      displayItems.push(items[i]);
    }
  }

  return (
    <div className="cart">
      <button>Valider mon panier</button>
      <div className="items">
        {displayItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            addToCart={addToCart}
            deleteOne={deleteOne}
          />
        ))}
      </div>

      <div className="subTotal">
        <div className="line">
          <div>Sous-total</div>
          <div>{subTotal.toFixed(2)} €</div>
        </div>
        <div className="line">
          <div>Frais de livraison</div>
          <div>2,50 €</div>
        </div>
      </div>

      <div className="total">
        <div>Total</div>
        <div>{total} €</div>
      </div>
    </div>
  );
};

export default cart;
