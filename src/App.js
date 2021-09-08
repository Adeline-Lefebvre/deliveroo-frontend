import "./responsive.css";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Restaurant from "./components/Restaurant.js";
import Categories from "./components/Categories.js";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-adeline.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Header />
      <Restaurant data={data} />
      <Categories data={data} />
    </div>
  );
}

export default App;
