
import FollowUs from "../../../component/FollowUs/FollowUs";
import PageBanner from "../../../component/PageBanner/PageBanner";
import ShopCard from "../../../component/ShopCard/ShopCard";

const page = () => {

    return (
        <>
            <PageBanner page="SHOP" />
            <div className="container-fluid">
                <div className="row g-3">

                    <ShopCard
                        key={1}
                        position="Trending"
                        title='Green Dress For Woman'
                        price={50}
                        img='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
                        img1='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png'
                        item='https://andshop-react.netlify.app/static/media/product9.60333e3e.png'
                    />

                </div>
            </div>
            <FollowUs />
        </>
    );
};

export default page;