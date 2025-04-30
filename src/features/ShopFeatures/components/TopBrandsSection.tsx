import { useEffect, useState } from "react";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
import { fetchProducts, Product } from "../services/fetchTopBrands";

function Topbrands() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return <ProductCard products={products} />;
}

export default Topbrands;
