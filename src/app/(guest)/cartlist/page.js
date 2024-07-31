/* eslint-disable @next/next/no-img-element */
import PageBanner from "../../../component/PageBanner/PageBanner";
import CartListComponent from "../../../component/CartList/CartListComponent"

async function productsApi() {
    const res = await fetch(`http://127.0.0.1:8000/api/get-all-product`);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

const page = async() => {
const products = await productsApi();
    return (
        <>
           <PageBanner page="Cart List" />
           <CartListComponent products={products?.products}/>
        </>
    );
};

export default page;
