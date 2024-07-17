
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function IsAuth(Component) {
  return function IsAuthenticatedComponent(props) {
    const router = useRouter();

    const [userData, setUserData] = useState();

    useEffect(() => {
      // Retrieve user data from localStorage when component mounts
      const storedUserData = JSON.parse(localStorage.getItem("user"));
      setUserData(storedUserData);
    }, []);

    useEffect(() => {
      // Check if user data exists in localStorage when component mounts
      const storedUserData = JSON.parse(localStorage.getItem("user"));

      if (!storedUserData) {
        // If userData is not available, redirect to home page
        router.push("/login");
      }
    }, [router]);

    // If userData is available, render the component
    if (userData) {
      return <Component {...props} />;
    } else {
      // If userData is not available, render UserNotFound component
      return <></>;
    }
  };
}

export default IsAuth;
