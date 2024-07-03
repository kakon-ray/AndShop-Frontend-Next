import React from "react";
import "./HeaderBanner.css";
import banner1 from "../images/img/banner_3.71b74319.jpg";
import banner2 from "../images/img/man.422a052d.png";
import "./HeaderBanner.css";

const HeaderBanner = () => {
  return (
    <div
      id="header-banner"
      className="container-fluid background-container"
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="header-banner-content ms-3">
            <div className="header-banner-text">
              <p className="ps-0 pb-0 mb-0 title">LIVE FOR</p>
              <p className="ps-0 py-2 my-0 title-two">FASHION</p>
            </div>
            <p className="ps-2 mt-0 mb-3 save py-2">SAVE UP TO 50%</p>
            <button className="btn btn-dark py-2 px-4 ms-2">Shop Now</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ms-3">
            <img
              src={banner2}
              alt=""
              className="img-fluid"
              style={{ width: "88%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
