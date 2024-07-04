/* eslint-disable @next/next/no-img-element */
import PageBanner from "../../../component/PageBanner/PageBanner";
import CartListComponent from "../../../component/CartList/CartListComponent"

const page = () => {

    return (
        <>
           <PageBanner page="Cart List" />
           <CartListComponent/>
        </>
    );
};

export default page;
