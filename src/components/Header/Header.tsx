import Navbar from "../common/Navbar/Navbar";
import Logo from "../Logo/Logo";
import UtilitySection from "../UtilitySection/UtilitySection";
import "./Header.scss";



const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full h-16 px-25 mt-7 z-10'>
        <Logo />
        <Navbar/>
        <UtilitySection/>
    </div>
  );
};

export default Header;
