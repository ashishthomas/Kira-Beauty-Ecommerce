import { useEffect, useState } from "react";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
import { fetchProducts, Product } from "../services/fetchGrooming";

function Mensgrooming() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return <ProductCard products={products} />;
}

export default Mensgrooming;
