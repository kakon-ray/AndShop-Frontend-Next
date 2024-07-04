import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import FooterList from "./FooterList";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="container-fluid my-5" id="footer">
      <div className="row">
        <div className="col-md-3">
          <h1>AND SHOP</h1>
          <p className="text-secondary">
            <span>ANDSHOP </span> is an multi-vendor B2C fast e-commerce
            company. The company mainly focuses on men,women and children wear,
            but it also offers other apparel, clothes, accessories, shoes, bags
            and other fashion items.
          </p>
          <div className="d-flex gap-4 flex-wrap footer-icon mb-sm-5">
            <div>
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </div>
            <div>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </div>
            <div>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </div>
          </div>
        </div>
        <FooterList
          title="INFORMATION"
          li1="Home"
          li2="About"
          li3="Privacy Policy"
          li4="Frequently Questions"
          li5="Order Tracking"
        />
        <FooterList
          title="SHOP"
          li1="Cart View One"
          li2="Cart View Two"
          li3="Empty Cart"
          li4="Checkout View One"
          li5="Checkout View Two"
          li6="Wishlist"
        />

        <div className="col-md-3 footer-subscription ml-0 mt-3">
          <h1 className="ml-0">NEWSLETTER</h1>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Footer;
