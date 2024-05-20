import { useState } from "react";

const Theme = ({ showThemeModal, onClose }) => {
  const [fontSize, setFontSize] = useState("font-size-3");

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const handleColorChange = (hue) => {
    document.documentElement.style.setProperty("--primary-color-hue", hue);
  };

  const handleBackgroundChange = (lightness) => {
    document.documentElement.style.setProperty("--light-color-lightness", lightness);
    document.documentElement.style.setProperty("--white-color-lightness", lightness);
    document.documentElement.style.setProperty("--dark-color-lightness", lightness);
  };

  return (
    <div className={`customize-theme ${showThemeModal ? 'block' : 'hidden'}`}>
      <div className="card bg-white p-12 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl">Customize your view</h2>
        <p className="text-sm">Manage your font size, color, and background</p>

        {/* Font Size */}
        <div className="font-size mt-20">
          <h4>Font Size</h4>
          <div className="choose-size bg-light p-3 rounded-lg flex justify-between">
            <span className={`font-size-1 w-4 h-4 rounded-full cursor-pointer ${fontSize === 'font-size-1' ? 'bg-primary' : 'bg-secondary'}`} onClick={() => handleFontSizeChange('font-size-1')}></span>
            <span className={`font-size-2 w-4 h-4 rounded-full cursor-pointer ${fontSize === 'font-size-2' ? 'bg-primary' : 'bg-secondary'}`} onClick={() => handleFontSizeChange('font-size-2')}></span>
            <span className={`font-size-3 w-4 h-4 rounded-full cursor-pointer ${fontSize === 'font-size-3' ? 'bg-primary' : 'bg-secondary'}`} onClick={() => handleFontSizeChange('font-size-3')}></span>
            <span className={`font-size-4 w-4 h-4 rounded-full cursor-pointer ${fontSize === 'font-size-4' ? 'bg-primary' : 'bg-secondary'}`} onClick={() => handleFontSizeChange('font-size-4')}></span>
            <span className={`font-size-5 w-4 h-4 rounded-full cursor-pointer ${fontSize === 'font-size-5' ? 'bg-primary' : 'bg-secondary'}`} onClick={() => handleFontSizeChange('font-size-5')}></span>
          </div>
        </div>

        {/* Primary Colors */}
        <div className="color mt-8">
          <h4>Color</h4>
          <div className="choose-color bg-light p-3 rounded-lg flex items-center justify-between">
            <span className="w-9 h-9 rounded-full" style={{ backgroundColor: 'hsl(252, 75%, 60%)' }} onClick={() => handleColorChange('252')}></span>
            {/* Add other color spans */}
          </div>
        </div>

        {/* Background */}
        <div className="background mt-8">
          <h4>Background</h4>
          <div className="choose-bg flex items-center justify-between gap-6">
            <div className="bg-1 active cursor-pointer" onClick={() => handleBackgroundChange('15%')}>
              <span></span>
              <h5>Light</h5>
            </div>
            {/* Add other background options */}
          </div>
        </div>

        <button className="mt-8 bg-primary text-white px-4 py-2 rounded-md" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Theme;
