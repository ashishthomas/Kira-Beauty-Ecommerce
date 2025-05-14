import "./UtilitySection.scss";
import search from "../../assets/svg/search.svg";
import person from "../../assets/svg/person.svg";
import cart from "../../assets/svg/cart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../app/Store";
import { useNavigate } from "react-router";
import { useState } from "react";
import UserModal from "../UserModal/UserModal";
import LoginModal from "../LoginModal/LoginModal";

const UtilitySection = () => {
  const userName = useSelector((state: RootState) => state.auth.userName);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handlePersonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="utility-section">
      {isLoggedIn && userName && (
        <span className="user-name">Hi, {userName}</span>
      )}
      <img src={search} alt="Search" className="icon" />
      <img
        src={person}
        alt="User"
        className="icon"
        onClick={handlePersonClick}
      />
      <img
        src={cart}
        alt="Cart"
        className="icon"
        onClick={() => navigate("/cart")}
      />
      {showModal &&
        (isLoggedIn && userName ? (
          <UserModal userName={userName} onClose={() => setShowModal(false)} />
        ) : (
          <LoginModal onClose={() => setShowModal(false)} />
        ))}
    </div>
  );
};

export default UtilitySection;
