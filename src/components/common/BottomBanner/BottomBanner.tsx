import React from 'react';
import './BottomBanner.scss';

interface BottomBannerProps {
  src: string;
}

const BottomBanner: React.FC<BottomBannerProps> = ({ src }) => {
  return (
    <div className="bottom-banner">
      <img src={src} alt="bottom-banner" />
    </div>
  );
};

export default BottomBanner;
