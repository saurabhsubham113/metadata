import React from "react";
import BrandCard from "../components/brandCard";

const Statistics = () => {
  const brandSection = {
    img: "/assets/icon-brand-recognition.svg",
    heading: "Brand Recognition",
    desc: "Boost your brand recognition with each links don't mean a thing. Branded links help instill confidence in your content.",
  };
  const detailsSection = {
    img: "/assets/icon-brand-recognition.svg",
    heading: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
  };
  const customSection = {
    img: "/assets/icon-brand-recognition.svg",
    heading: "Fully Cutomizable",
    desc: "Improve brand awareness and content discoverability through cutomizable links, suoercharging audience engagement.",
  };
  return (
    <div
      className="info text-center  pt-5 bg-gray-voilet"
      style={{ paddingTop: "10px",height:"85%" }}>
      <div className="container">
        <div className="w-50 m-auto">
          <h1 className="fw-bold">Advanced Statistics</h1>
          <p className="fz-md d-voilet fw-500">
            Track how your websites are performing across the web with our
            advanced statitics dashboard.
          </p>
        </div>
        <div className="d-flex justify-content-between pt-5 pb-3 position-relative">
          <BrandCard
            img={brandSection.img}
            heading={brandSection.heading}
            desc={brandSection.desc}
          />
          <div
            className="connector bg-cyan position-absolute"
            style={{
              height: "8px",
              width: "60px",
              top: "60%",
              left: "30%",
            }}></div>
          <BrandCard
            img={detailsSection.img}
            heading={detailsSection.heading}
            desc={detailsSection.desc}
            style={40}
          />
          <div
            className="connector bg-cyan position-absolute"
            style={{
              height: "8px",
              width: "55px",
              top: "80%",
              right: "30%",
            }}></div>
          <BrandCard
            img={customSection.img}
            heading={customSection.heading}
            desc={customSection.desc}
            style={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
