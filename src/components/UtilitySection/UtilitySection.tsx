import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const UtilitySection = () => {
  return (
    <div className="utility-section flex gap-7 items-center">
      <FiSearch size={30} />
      <FiUser size={30} />
      <FiShoppingCart size={30} />
    </div>
  );
};

export default UtilitySection;
