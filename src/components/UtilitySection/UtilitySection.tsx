import "./UtilitySection.scss";
import { useEffect, useRef, useState } from "react";
import search from "../../assets/svg/search.svg";
import person from "../../assets/svg/person.svg";
import cart from "../../assets/svg/cart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../app/Store";
import { useNavigate } from "react-router";
import UserModal from "../UserModal/UserModal";
import LoginModal from "../LoginModal/LoginModal";
import { toast } from "react-toastify";

type Product = {
  id: number;
  name: string;
  brandName?: string;
  imageKey?: string;
  price?: string;
  offerPrice?: string;
  description?: string;
  itemsLeft?: number;
  category?: string;
  details?: string;
};

const UtilitySection = () => {
  const userName = useSelector((state: RootState) => state.auth.userName);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const files = [
        "/data/shopdata/FragranceData.json",
        "/data/shopdata/SkincareData.json",
        "/data/shopdata/MakeupData.json",
        "/data/shopdata/MensgroomingData.json",
        "/data/shopdata/TopbrandsData.json",
      ];
      let products: Product[] = [];
      for (const file of files) {
        try {
          const res = await fetch(file);
          if (res.ok) {
            const data = await res.json();
            products = products.concat(data);
          }
        } catch (e) {
          console.error(`Failed to fetch ${file}:`, e);
        }
      }
      setAllProducts(products);
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (!showSearchInput) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearchInput(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchInput]);

  const handlePersonClick = () => {
    setShowModal(true);
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      toast.info("Login to add to cart");
      setShowModal(true);
    }
  };

  const handleSearchIconClick = () => {
    setShowSearchInput((prev) => !prev);
    setSearchQuery("");
    setSearchResults([]);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setSearchResults([]);
      setIsDropdownOpen(false);
      return;
    }

    const results = allProducts.filter((item) =>
      item.name?.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(results);
    setIsDropdownOpen(results.length > 0);
  };

  const handleResultClick = (id: string, category?: string) => {
    setShowSearchInput(false);
    setSearchQuery("");
    setSearchResults([]);
    setIsDropdownOpen(false);
    navigate(`/${category || "product"}/details/${id}`);
  };

  return (
  <div className="utility-section" style={{ position: "relative" }}>
    {isLoggedIn && userName && (
      <span className="user-name">Hi, {userName}</span>
    )}

    {/* Search Button */}
    <button
      type="button"
      className="icon-btn"
      onClick={handleSearchIconClick}
      aria-label="Search"
    >
      <img src={search} alt="Search" className="icon" />
    </button>

    {showSearchInput && (
      <div className="search-dropdown-navbar-center" ref={searchRef}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
          autoFocus
          className="search-input"
          onFocus={() => searchResults.length > 0 && setIsDropdownOpen(true)}
        />
        {isDropdownOpen && searchResults.length > 0 && (
          <ul className="search-dropdown">
            {searchResults.map((item, idx) => (
              <button
                type="button"
                key={item.id ? `${item.id}-${item.category || ""}` : idx}
                className="search-result-item"
                onClick={() =>
                  handleResultClick(String(item.id), item.category)
                }
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </button>
            ))}
          </ul>
        )}
      </div>
    )}

    {/* Cart Button */}
    <button
      type="button"
      className="icon-btn"
      onClick={handleCartClick}
      aria-label="Cart"
    >
      <img src={cart} alt="Cart" className="icon" />
    </button>

    {showModal &&
      (isLoggedIn && userName ? (
        <UserModal userName={userName} onClose={() => setShowModal(false)} />
      ) : (
        <LoginModal onClose={() => setShowModal(false)} />
      ))}

    {/* User Button */}
    <button
      type="button"
      className="icon-btn"
      onClick={handlePersonClick}
      aria-label="User"
    >
      <img src={person} alt="User" className="icon" />
    </button>
  </div>
);

};

export default UtilitySection;
