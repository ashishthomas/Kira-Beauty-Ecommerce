import Navbar from "../common/Navbar/Navbar";
import Logo from "../Logo/Logo";
import UtilitySection from "../UtilitySection/UtilitySection";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <UtilitySection />
    </div>
  );
};

export default Header;
