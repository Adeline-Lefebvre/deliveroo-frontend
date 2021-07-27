import Item from "./Item.js";
import "../App.css";

const Basket = ({ items, subTotal, total }) => {
  return (
    <div className="basket">
      <button>Valider mon panier</button>
      <div className="items">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>

      <div className="subTotal">
        <div className="line">
          <div>Sous-total</div>
          <div>{subTotal} €</div>
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

export default Basket;
