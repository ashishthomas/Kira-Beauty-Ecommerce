import './UtilitySection.scss';
import search from "../../assets/icons/search.svg";
import person from "../../assets/icons/person.svg";
import cart from "../../assets/icons/cart.svg"

const UtilitySection = () => {
  return (
    <div className="utility-section">
      <img src={search} alt="Search" className="icon" />
      <img src={person} alt="User" className="icon" />
      <img src={cart} alt="Cart" className="icon" />
    </div>
  );
};

export default UtilitySection;

