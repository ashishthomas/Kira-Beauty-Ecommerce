import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Product } from "../../ShopFeatures/services/fetchFragrance";
import "../styles/DetailsFeatures.scss";
import Button from "../../../components/common/Button/Button";
import shopcart from "../../../assets/svg/cart.svg";
import { imageMap } from "../constants/imageMap";

const categoryFileMap: Record<string, string> = {
  fragrance: "/data/shopdata/FragranceData.json",
  skincare: "/data/shopdata/SkincareData.json",
  makeup: "/data/shopdata/MakeupData.json",
  mensgrooming: "/data/shopdata/MensgroomingData.json",
  topbrands: "/data/shopdata/TopbrandsData.json",
};

const ProDetails = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      if (!category || !id) return;
      const filePath = categoryFileMap[category.toLowerCase()];
      if (!filePath) return;

      try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error("Failed to load data");

        const data: Product[] = await response.json();
        const selected = data.find((item) => item.id === parseInt(id));
        setProduct(selected || null);
        setQuantity(1);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };

    fetchData();
  }, [category, id]);

  const handleIncrease = () => {
    if (product && quantity < product.maxLimit) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (!product) return <p>Loading...</p>;

  const sanitizedPrice = parseFloat(
    product.offerPrice.toString().replace(/[^0-9.]/g, "")
  );
  const totalPrice = quantity * sanitizedPrice;

  return (
    <div className="product-details">
      <div className="image-section">
        <img src={imageMap[product.imageKey]} alt={product.name} />
      </div>
      <div className="info-section">
        <h3>{product.name}</h3>
        <p className="brand">{product.brandName}</p>
        <div className="pricing">
          <span className="original">₹{product.price}</span>
          <span className="offer">₹{product.offerPrice}</span>
          <p className="total">Total: ₹{totalPrice.toFixed(2)}</p>
        </div>
        <p className="stock">
          {Math.max(product.itemsLeft - quantity, 0)} items left
        </p>

        <div className="progress-bar">
          <div
            className="filled"
            style={{ width: `${((product.itemsLeft - quantity) / 50) * 100}%` }}
          />
        </div>
        <p className="description">{product.details}</p>

        <div className="quantity-section">
          <Button
            size="small"
            variant="primary"
            onClick={handleDecrease}
            disabled={quantity === 1}
            className="qty-button"
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            size="small"
            variant="primary"
            onClick={handleIncrease}
            disabled={quantity === product.maxLimit}
            className="qty-button"
          >
            +
          </Button>

          <p className="note">Maximum purchase {product.maxLimit}</p>
        </div>

        <div className="actions">
          <Button
            variant="primary"
            size="medium"
            className="custom-btn-wrapper"
            onClick={() => {}}
          >
            Buy Now
          </Button>

          <Button
            variant="outline"
            size="medium"
            className="custom-btn-wrapper"
          >
            Add to Cart <img src={shopcart} alt="Cart" className="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProDetails;
