"use client"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import {OverlayTrigger, Tooltip } from "react-bootstrap";

const HandleClick = ({item}) => {
    return (
        <>
             <div className="overly-container">
            <button
              className="btn btn-light overly-content-btn"
            >
              Add to Cart
            </button>
            <div className="overly-content-icon d-flex flex-column gap-4">
              {["top"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>Wish List</Tooltip>
                  }
                >
                  <button className=" icon-btn" >
                    <FontAwesomeIcon icon={faHeart} className="badge" size="lg" />
                  </button>
                </OverlayTrigger>
              ))}

              {["top"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>Quick View</Tooltip>
                  }
                >
                  <Link href={`${item.id}`}>
                    <button className=" icon-btn">
                      <FontAwesomeIcon icon={faEye} className="badge" size="lg" />
                    </button>
                  </Link>
                </OverlayTrigger>
              ))}

              {["top"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  overlay={<Tooltip id={`tooltip-${placement}`}>Compare</Tooltip>}
                >
                  <button className=" icon-btn">
                    <FontAwesomeIcon
                      icon={faCodeCompare}
                      className="badge"
                      size="lg"
                    />
                  </button>
                </OverlayTrigger>
              ))}

              {/* <ViewListIcon className="h-7 w-7 text-light-500 badge my-3" />
            <SwitchHorizontalIcon className="h-7 w-7 text-light-500 badge my-3" /> */}
            </div>
          </div>
        </>
    );
};

export default HandleClick;