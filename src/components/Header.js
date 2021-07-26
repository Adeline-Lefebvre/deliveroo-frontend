import logo from "../logo.png";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
