import BottomBanner from "../../../components/common/BottomBanner/BottomBanner";
import "../styles/DisplaySection.scss";
import display1 from "../../../assets/jpeg/lipstick.jpeg";
import display2 from "../../../assets/jpeg/perfume.jpeg";
import display3 from "../../../assets/jpeg/skincare.jpeg";

const DisplaySection = () => {
  const imageList = [display1, display2, display3];

  return (
    <div className="display-section">
      {imageList.map((src, idx) => (
        <BottomBanner key={idx} src={src} />
      ))}
    </div>
  );
};

export default DisplaySection;
