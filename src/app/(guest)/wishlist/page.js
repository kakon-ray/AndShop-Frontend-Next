/* eslint-disable @next/next/no-img-element */
import PageBanner from "../../../component/PageBanner/PageBanner";
import WishList from "../../../component/WishList/WishList";

const page = () => {

    return (
        <>
            <PageBanner page="Wishlsit" />
            <WishList/>
        </>
    );
};

export default page;
