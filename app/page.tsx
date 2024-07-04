
import Image from "next/image";
import HeaderBanner from '../component/HeaderBanner/HeaderBanner'
import NewCollection from '../component/NewCollection/NewCollection'
import HotProducts from '../component/HotProducts/HotProducts'
import OffCollection from '../component/OffCollection/OffCollection'
import SlickCollection from '../component/SlickCollection/SlickCollection'
import NewFashon from '../component/NewFashon/NewFashon'
import LatestBlog from '../component/LatestBlog/LatestBlog'
import FollowUs from '../component/FollowUs/FollowUs'

export default function Home() {
  return (
    <main>
           <HeaderBanner/>
           <NewCollection/>
           <HotProducts/>
           <OffCollection/>
           <SlickCollection/>
           <NewFashon/>
           <LatestBlog/>
           <FollowUs/>
    </main>
  );
}
