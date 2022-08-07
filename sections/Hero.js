import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="container position-relative d-flex align-items-center"
      style={{ height: "65%" }}>
      <div className="right-conatiner w-50">
        <h1 className="main-tile w-75 fw-bold mb-2 display-5">
          More than just shorter links
        </h1>
        <p className="subtitle w-75 fz-md m0 gray-voilet mb-3">
          Build your brand recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          className="cta text-light rounded-5 bg-cyan"
          style={{
            fontWeight: "500",
            outline: "none",
            border: "none",
            padding: "8px 15px",
          }}>
          Get Started
        </button>
      </div>
      <div className="left-container ">
        <Image
          src="/assets/illustration-working.svg"
          alt="a woman working on desktop"
          width="500px"
          height="300px"
          objectFit="contains"
          layout="intrinsic"
          style={{ animation: "updown 3s ease-in infinite" }}
        />
      </div>
    </section>
  );
};

export default Hero;
