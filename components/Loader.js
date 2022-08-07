import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "100%",
        position: "relative",
      }}>
      <iframe
        src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
        width="100%"
        height="100%"
        style="position:absolute"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen></iframe>
    </div>
  );
};

export default Loader;
