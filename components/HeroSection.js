import HeaderImg from "@/public/header.webp";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <header className="relative h-[500px] flex flex-col-reverse w-full">
      <Image
        src={HeaderImg}
        alt="Header Image"
        fill={true}
        className="object-cover"
      />
      <div className="z-10 relative mb-5 w-10/12 max-w-7xl text-white mx-auto">
        <h1 className="text-2xl lg:text-3xl font-serif">
          Introducing LWS Shop Center
        </h1>
        <p>Your whole week at a glance</p>
        <button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
          Get the Weekly Kit
        </button>
      </div>
    </header>
  );
}
