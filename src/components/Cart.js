import Item from "./Item.js";
import "../App.css";

const cart = ({ items, subTotal, total, addToCart, deleteOne }) => {
  let displayItems = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].quantity > 0) {
      displayItems.push(items[i]);
    }
  }

  return displayItems.length > 0 ? (
    <div className="cart">
      <button>Valider mon panier</button>
      {displayItems.map((item, index) => (
        <Item
          key={index}
          item={item}
          addToCart={addToCart}
          deleteOne={deleteOne}
        />
      ))}
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
  ) : (
    <div className="empty-cart">
      <button className="empty-cart-btn">Valider mon panier</button>
      <div style={{ marginTop: "50px", color: "#8b9a9b" }}>
        Votre panier est vide
      </div>
    </div>
  );
};

export default cart;
