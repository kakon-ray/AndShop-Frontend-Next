"use client"
import React from "react";

export default function PageBanner({ page }) {
  const myStyle = {
    backgroundImage:
      "url('https://andshop-react.netlify.app/static/media/common_bg.7b040441.png')",
    height: "40vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: ".2%",
  };

  return (
    <div
      style={myStyle}
      className="position-relative mb-5 d-flex justify-content-center align-items-center"
    >
      <h1 style={{ color: "#fff" }}>{page}</h1>
      <div className="position-absolute page text-light pageStyle"> </div>
    </div>
  );
}
