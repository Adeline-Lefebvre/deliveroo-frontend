import "../App.css";

const Item = () => {
  return (
    <div className="item">
      <div className="col-1">
        <button>
          <i class="fas fa-minus-circle"></i>
        </button>
        <div>1</div>
        <button>
          <i class="fas fa-plus-circle"></i>
        </button>
        <div style={{ marginLeft: "10px" }}>Brunch vegan</div>
      </div>
      <div>25,00€</div>
    </div>
  );
};

export default Item;
