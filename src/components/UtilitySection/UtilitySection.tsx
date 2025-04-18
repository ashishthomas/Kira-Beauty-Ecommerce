import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const UtilitySection = () => {
  return (
    <div className="utility-section flex gap-7 items-center">
      <FiSearch size={22} />
      <FiUser size={22} />
      <FiShoppingCart size={22} />
    </div>
  );
};

export default UtilitySection;
