
import ShopCard from "../ShopCard/ShopCard";
import "./HotProducts.css";

const HotProducts = ({ products }) => {
  // console.log(products)
  if (!products?.products || !products) {
    return <h1>No product available</h1>
  }

  return (
    <div id="hot-products" className="container mt-5 py-4">
      <div className="mx-auto text-center">
        <h1>Hot Products</h1>
        <p className="pt-0 mt-0">
          See What Everyone Is Shopping from Andshop E-Commerce
        </p>
      </div>
      <div className="d-flex mb-3 justify-content-center">
        <ul className="d-flex list-unstyled flex-wrap justify-content-center">
          <li
            className={`hot-menue active`}
            value={1}
          >
            NEW ARRIVAL
          </li>
          <li
            className={`hot-menue`}
          >
            TRENDING
          </li>
          <li
            className={`hot-menue`}
          >
            BEST SELLERS
          </li>
          <li
            className={`hot-menue`}
          >
            FEATURED
          </li>
        </ul>
      </div>

      <div className="row g-3">

        {products?.products?.map(product => {
          return <ShopCard
            key={product.id}
            position="Trending"
            title={product?.name}
            price={product?.selling_price}
            img={product?.images[0]}
            img1={product?.images[1]}
            item={product}
          />
        })}


      </div>
      <div className="text-center mt-5">
        <button className="btn btn-outline-warning">
          Show More
        </button>
      </div>
    </div>
  );
};

export default HotProducts;
