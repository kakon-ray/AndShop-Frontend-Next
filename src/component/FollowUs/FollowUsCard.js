import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// install and social shere icon use
// npm install --save @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

const FollowUsCard = () => {
  return (
    <div className="col-md-3 mx-0 px-0">
      <div className="img-container">
        <img
          src="https://andshop-react.netlify.app/static/media/post2.674c2953.png"
          alt="Avatar"
          className="image"
          style={{ width: "100%" }}
        />
        <div className="middle social-shere-icon">
          {" "}
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default FollowUsCard;
