import './UtilitySection.scss';
import search from "../../assets/svg/search.svg";
import person from "../../assets/svg/person.svg";
import cart from "../../assets/svg/cart.svg"

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

