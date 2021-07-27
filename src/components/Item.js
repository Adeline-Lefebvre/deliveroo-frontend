import { useState } from "react";
import "../App.css";

const Item = ({ item }) => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="item">
      <div className="col-1">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          <i class="fas fa-minus-circle"></i>
        </button>
        <div>{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <i class="fas fa-plus-circle"></i>
        </button>
        <div
          style={{
            marginLeft: "10px",
            width: "180px",
            lineHeight: "20px",
            marginBottom: "10px",
          }}
        >
          {item.title}
        </div>
      </div>
      <div>{item.price} €</div>
    </div>
  );
};

export default Item;
