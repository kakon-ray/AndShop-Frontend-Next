"use client"
import React from "react";

const FooterList = ({ title, ...other }) => {
  const footerMenue = [];

  for (let li in other) {
    footerMenue.push(other[li]);
  }

  return (
    <div className="col-md-3 footer-menue pt-3 ps-0 ">
      <h1 className="ps-0 ms-3">{title}</h1>
      <ul className="ps-3">
        {footerMenue.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
