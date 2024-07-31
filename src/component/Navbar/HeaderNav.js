/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from 'react-redux';
import { showCartList } from '@/src/redux/features/cartDetailSlice';

const HeaderNav = () => {

  const dispatch = useDispatch();

  const { cartlist } = useSelector((state) => state.cartlist);
 

  useEffect(() => {
    dispatch(showCartList())
  }, [dispatch])

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container fluid>
          <Link href="/" className="navbar-brand">
            Envobyte Shop
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex  align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link href="/" className="nav-link pt-0">
                Home
              </Link>
              <Link href="/shop" className="nav-link pt-0">
                Shop
              </Link>

            </Nav>
          </Navbar.Collapse>
          <div className="navbar-shop d-flex flex-nowrap aligen-item-center mb-0 pb-0">
            <Link href="/wishlist">
              <Button
                variant=""
                className="navbar-icon  position-relative  pb-0 "
              >
                <FontAwesomeIcon icon={faHeart} size="xl" />
                <span className="position-absolute  translate-middle badge rounded-pill p-1">
                  5
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Button>
            </Link>

            <Link href="/cartlist">
              <Button
                variant=""
                className="navbar-icon  position-relative  pb-0 "
              >
                <FontAwesomeIcon icon={faShoppingBag} size="xl" />
                <span className="position-absolute top-5 start-99 translate-middle badge rounded-pill p-1">
                  {cartlist?.length ? cartlist?.length : 0}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Button>
            </Link>


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
