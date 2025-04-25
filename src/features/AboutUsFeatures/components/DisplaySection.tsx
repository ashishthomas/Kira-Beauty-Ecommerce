import BottomBanner from "../../../components/common/BottomBanner/BottomBanner";
import "../styles/DisplaySection.scss";

const DisplaySection = () => {
  const imageList = [
    "src/assets/Bottom_Banner/lipstick.jpeg",
    "src/assets/Bottom_Banner/perfume.jpeg",
    "src/assets/Bottom_Banner/skincare.jpeg",
  ];

  return (
    <div className="display-section">
      {imageList.map((src, idx) => (
        <BottomBanner key={idx} src={src} />
      ))}
    </div>
  );
};

export default DisplaySection;
