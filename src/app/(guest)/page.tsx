
import Image from "next/image";
import HeaderBanner from '../../component/HeaderBanner/HeaderBanner'
import NewCollection from '../../component/NewCollection/NewCollection'
import HotProducts from '../../component/HotProducts/HotProducts'
import OffCollection from '../../component/OffCollection/OffCollection'
import SlickCollection from '../../component/SlickCollection/SlickCollection'
import NewFashon from '../../component/NewFashon/NewFashon'
import LatestBlog from '../../component/LatestBlog/LatestBlog'
import FollowUs from '../../component/FollowUs/FollowUs'


async function productsApi() {
  const res = await fetch(`http://127.0.0.1:8000/api/get-all-product`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Home = async () => {
  const products = await productsApi();


  return (
    <main>
      <HeaderBanner />
      <NewCollection />
      <HotProducts products={products}/>
      <OffCollection />
      <SlickCollection />
      <NewFashon />
      <LatestBlog />
      <FollowUs />
    </main>
  );
}

export default Home;