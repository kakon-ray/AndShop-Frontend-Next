import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./features/userDetailSlice";
import productDetail from "./features/productDetailsSlice";
import categoryDetail from "./features/categoryDetailSlice";
import subCategoryDetail from "./features/subCategoryDetailSlice";



export const store = configureStore({
  reducer: {
    users:userDetail,
    products:productDetail,
    categories:categoryDetail,
    subcategories:subCategoryDetail,
  },
});