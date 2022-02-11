import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { BASE_API_URL } from "../config";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/products`)
      .then((response) => {
        if (Array.isArray(response.data?.products)) {
          setProducts(response.data.products);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
