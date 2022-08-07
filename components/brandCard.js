import React from "react";

const BrandCard = ({ img, heading, desc, style = 0 }) => {
  const maiDiv = {
    width: "30%",
    top: `${style}px`,
  };
  const headingStyle = {
    fontSize: "25px",
    fontWeight: "500",
  };
  const imageStyle = {
    top: "-40px",
  };
  return (
    <div
      className="bg-white px-3 py-2 rounded-3 position-relative"
      style={maiDiv}>
      <div
        className="bg-v-dark-blue position-absolute p-3 rounded-circle"
        style={imageStyle}>
        <img src={img} alt="brand-img" />
      </div>

      <h1 className="pt-5" style={headingStyle}>
        {heading}
      </h1>
      <p className="gray-voilet fw-500 fz-md" >
        {desc}
      </p>
    </div>
  );
};

export default BrandCard;
