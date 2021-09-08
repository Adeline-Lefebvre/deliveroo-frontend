import "../App.css";

const Item = ({ item, addToCart, deleteOne }) => {
  const total = (item.price * item.quantity).toFixed(2);

  return (
    <div className="item">
      <div className="col-1">
        <i className="fas fa-minus-circle" onClick={() => deleteOne(item)}></i>
        <div>{item.quantity}</div>
        <i className="fas fa-plus-circle" onClick={() => addToCart(item)}></i>
        <div
          style={{
            marginLeft: "10px",
            width: "180px",
            lineHeight: "25px",
          }}
        >
          {item.title}
        </div>
      </div>
      <div>{total} €</div>
    </div>
  );
};

export default Item;
