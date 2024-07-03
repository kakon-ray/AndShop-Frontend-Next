"use client"
import Image from "next/image";
import HeaderBanner from '../component/HeaderBanner/HeaderBanner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
           <HeaderBanner/>
    </main>
  );
}
