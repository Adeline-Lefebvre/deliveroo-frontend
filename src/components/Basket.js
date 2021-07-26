import Item from "./Item.js";
import "../App.css";

const Basket = () => {
  return (
    <div className="basket">
      <button>Valider mon panier</button>
      <div className="items">
        <Item />
        <Item />
      </div>

      <div className="subTotal">
        <div className="line">
          <div>Sous-total</div>
          <div>25,00 €</div>
        </div>
        <div className="line">
          <div>Frais de livraison</div>
          <div>2,50 €</div>
        </div>
      </div>

      <div className="total">
        <div>Total</div>
        <div>27,50€</div>
      </div>
    </div>
  );
};

export default Basket;
