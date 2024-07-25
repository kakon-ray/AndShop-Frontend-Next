import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./features/userDetailSlice";
import productDetail from "./features/productDetailsSlice";



export const store = configureStore({
  reducer: {
    users:userDetail,
    products:productDetail,
  },
});