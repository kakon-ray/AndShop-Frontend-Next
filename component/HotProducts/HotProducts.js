"use client"
import React, { useEffect, useState } from "react";
import ShopCard from "../ShopCard/ShopCard";
import "./HotProducts.css";

const HotProducts = () => {

  return (
    <div id="hot-products" className="container-fluid mt-5 py-4">
      <div className="mx-auto text-center">
        <h1>Hot Products</h1>
        <p className="pt-0 mt-0">
          See What Everyone Is Shopping from Andshop E-Commerce
        </p>
      </div>
      <div className="d-flex mb-3 justify-content-center">
        <ul className="d-flex list-unstyled flex-wrap justify-content-center">
          <li
            className={`hot-menue active`}
            value={1}
          >
            NEW ARRIVAL
          </li>
          <li
            className={`hot-menue`}
          >
            TRENDING
          </li>
          <li
            className={`hot-menue`}
          >
            BEST SELLERS
          </li>
          <li
            className={`hot-menue`}
          >
            FEATURED
          </li>
        </ul>
      </div>

      <div className="row g-3">

          <ShopCard
            key={1}
            position="Trending"
            title='Green Dress For Woman'
            price={50}
            img='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
            img1='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png'
            item='https://andshop-react.netlify.app/static/media/product9.60333e3e.png'
          />
          <ShopCard
            key={1}
            position="Trending"
            title='Green Dress For Woman'
            price={50}
            img='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
            img1='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png'
            item='https://andshop-react.netlify.app/static/media/product9.60333e3e.png'
          />
          <ShopCard
            key={1}
            position="Trending"
            title='Green Dress For Woman'
            price={50}
            img='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
            img1='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png'
            item='https://andshop-react.netlify.app/static/media/product9.60333e3e.png'
          />
          <ShopCard
            key={1}
            position="Trending"
            title='Green Dress For Woman'
            price={50}
            img='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
            img1='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png'
            item='https://andshop-react.netlify.app/static/media/product9.60333e3e.png'
          />

      </div>
      <div className="text-center mt-5">
        <button className="btn btn-outline-warning">
          Show More
        </button>
      </div>
    </div>
  );
};

export default HotProducts;
