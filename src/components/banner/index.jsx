import React from "react";
import bg from "../../assets/footer-bg.jpg";

const Banner = (props) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Banner;
