import BottomBanner from "../../../components/common/BottomBanner/BottomBanner";
import "../styles/DisplaySection.scss";

const DisplaySection = () => {
  const imageList = [
    "src/assets/jpeg/lipstick.jpeg",
    "src/assets/jpeg/perfume.jpeg",
    "src/assets/jpeg/skincare.jpeg",
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
