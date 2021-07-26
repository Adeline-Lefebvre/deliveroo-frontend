import "../App.css";

const Restaurant = ({ data }) => {
  return (
    <div style={{ backgroundColor: "white", padding: "30px 0" }}>
      <div className="restaurant container">
        <div className="col-1">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img className="col-2" src={data.restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default Restaurant;
