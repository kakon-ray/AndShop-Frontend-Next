"use client"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { addCartList,clearMessages } from '@/src/redux/features/cartDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '@/src/redux/features/userDetailSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const HandleClick = ({ item }) => {

  const dispatch = useDispatch();
  const [user,setUser] = useState({});
  const router = useRouter()
  // start get user
 
  const { loading, successMessage, error } = useSelector((state) => state.cartlist);
 
  useEffect(() => {
    if (successMessage || error) {
      // Clear messages after 5 seconds
      const timer = setTimeout(() => {
        dispatch(clearMessages());
        
      }, 5000);
      return () => clearTimeout(timer);
    }

    if(successMessage){
      router.push('/cartlist')
    }
  }, [successMessage, error, dispatch, router]);

  



  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
      if (user) {
        setUser(user);
      }
    }
  }, []);



  const addToCartList = () => {

    const sellingPrice = parseFloat(item?.selling_price) || 0;
    const discountPrice = parseFloat(item?.discount_price) || 0;
    
  
      const price = sellingPrice  - discountPrice;
    

    const product = {
      'user_id': user?.id,
      'product_id': item?.id,
      'name': item?.name,
      'price': price,
      'quantity': 1,
      'image': item?.thumbnail,
    }

    dispatch(addCartList(product))


  }

  return (
    <>
    <ToastContainer/>
      <div className="overly-container">
        <button
          onClick={addToCartList}
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