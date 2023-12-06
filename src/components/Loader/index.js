import React from "react";

const Loader = () => {
  return (
    <div className="text-center mt-5 text-primary ">
      <div
        className="spinner-border size-lg"
        role="status"
        style={{
          width: "4rem",
          height: "4rem",
        }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
