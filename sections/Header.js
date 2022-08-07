import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className="ms-5 d-flex"
      style={{ height: "8vh", overflow: "hidden" }}>
      <div className="logo position-relative h-100 w-25 mt-1 pointer">
        <Image
          src={"/assets/transparent-500x500.png"}
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <nav className="w-25 mt-4">
        <div className="links d-flex justify-content-around gray-voilet">
          <h3 className="fz-sm nav pointer">Features</h3>
          <h3 className="fz-sm nav pointer">Pricing</h3>
          <h3 className="fz-sm nav pointer">Resources</h3>
        </div>
      </nav>
    </div>
  );
};

export default Header;
