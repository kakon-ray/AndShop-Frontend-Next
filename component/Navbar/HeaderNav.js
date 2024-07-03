/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./HeaderNav.css";
import Link from "next/link";



const HeaderNav = () => {


  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container fluid>
          <Link href="/" className="navbar-brand">
            AND SHOP
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 d-flex  align-items-center "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link href="/home" className="nav-link">
                Home
              </Link>
              <Link href="/home" className="nav-link">
                Shop
              </Link>

            </Nav>
          </Navbar.Collapse>
          <div className="navbar-shop d-flex flex-nowrap aligen-item-center mb-0 pb-0">
            <Button
              variant=""
              className="navbar-icon   position-relative  pb-0 "
            >
              <FontAwesomeIcon icon={faHeart} size="xl" />
              <span className="position-absolute  translate-middle badge rounded-pill p-1">
                5
                <span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon  position-relative  pb-0 "
            >
              <FontAwesomeIcon icon={faShoppingBag} size="xl" />
              <span className="position-absolute top-5 start-99 translate-middle badge rounded-pill p-1">
                5
                <span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon pb-0 "
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Button>
            {/* <Button variant="" className="navbar-icon mt-0 pt-0 ">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Button> */}
          </div>
        </Container>
      </Navbar>

      {/* this is offcanvas section */}

    </>
  );
};

export default HeaderNav;
