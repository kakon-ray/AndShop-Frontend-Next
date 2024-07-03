
import Image from "next/image";
import HeaderBanner from '../component/HeaderBanner/HeaderBanner'
import NewCollection from '../component/NewCollection/NewCollection'

export default function Home() {
  return (
    <main>
           <HeaderBanner/>
           <NewCollection/>
    </main>
  );
}
