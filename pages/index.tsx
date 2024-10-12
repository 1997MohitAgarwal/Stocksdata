import type { NextPage } from 'next';
import { useState, useRef } from "react";
import { Avatar } from '@nextui-org/react';
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Fourm from "../components/Fourm";
import Stories from "../components/Stories";
import data1 from "../json/data.json";

const Home: NextPage = () => {
  const [display, setDisplay] = useState("grid-cols-2");
  const [isOpen, setIsOpen] = useState(false); // New state variable to track sidebar visibility
  const sidenavRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const openNav = () => {
    if (sidenavRef.current && mainRef.current) {
      sidenavRef.current.style.width = "270px";
      mainRef.current.style.marginLeft = "270px";
      setDisplay("grid-cols-1");
      setIsOpen(true); // Set isOpen to true when sidebar is opened
    }
  };

  const closeNav = () => {
    if (sidenavRef.current && mainRef.current) {
      sidenavRef.current.style.width = "0";
      mainRef.current.style.marginLeft = "0";
      setDisplay("grid-cols-2");
      setIsOpen(false); // Set isOpen to false when sidebar is closed
    }
  };

  const img = [
    "boro.png", "dmart.png", "hfl.png", "saksoft.png", 
    "infosys.png", "vbl.png", "paint.png", "mtar.png", "polycab.png"
  ];

  return (
    <div>
      <Navbar />
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center gap-x-20 flex-wrap w-full bg-gray-900 py-2">
        {data1.map((ele, i) => (
          <div key={i} className="flex gap-x-4">
            <p className="text-white">{ele.name}</p>
            <p className="text-white">{ele.price}</p>
            <p className={i % 2 === 0 ? "text-red-600" : "text-green-600"}>
              {ele.today}
            </p>
          </div>
        ))}
      </div>

      <p className="block ml-8 font-semibold text-lg text-red-600">
        FEATURED COMPANIES
      </p>
      <div className="flex flex-wrap justify-center bg-sky-100 py-2 w-full"> {/* Make this container full width */}
        {img.map((ele, i) => (
          <img 
            key={i} 
            className="imgsetting m-2" // Add margin to space out images
            width="100" 
            src={ele} 
            alt={`Company logo ${i + 1}`} // Added alt text for accessibility
          />
        ))}
      </div>

      <div ref={sidenavRef} className="sidenav">
        <a className="closebtn cursor-pointer" onClick={closeNav}>&times;</a>
        <div className="flex items-center ml-5 mb-6">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <p className="text-white ml-3">Hello, Mohit</p>
          <p className="ml-6">🔔</p>
        </div>
        <hr />
        <a className="mb-2 mt-4 hover:bg-cyan-700 focus:bg-cyan-700" href="#">📄 Discussion Forum</a>
        <a className="mb-2 hover:bg-cyan-700 focus:bg-cyan-700" href="#">💰 Market Stories</a>
        <a className="mx-8 mb-2 hover:bg-cyan-700 focus:bg-cyan-700" href="#">Sentiment</a>
        <a className="mx-8 mb-2 hover:bg-cyan-700 focus:bg-cyan-700" href="#">Market</a>
        <a className="mx-8 mb-2 hover:bg-cyan-700 focus:bg-cyan-700" href="#">Sector</a>
        <a className="mx-8 mb-2 hover:bg-cyan-700 focus:bg-cyan-700" href="#">Watchlist</a>
        <a className="mx-8 mb-2 hover:bg-cyan-700 focus:bg-cyan-700" href="#">Events</a>
        <a className="mx-8 hover:bg-cyan-700 focus:bg-cyan-700" href="#">News/Interview</a>
      </div>

      <div ref={mainRef} id="main" className="gap-x-6 bg-stone-100 pb-6">
        {!isOpen && ( // Conditionally render the hamburger icon based on isOpen
          <span 
            className="open" 
            style={{ fontSize: "30px", cursor: "pointer" }} 
            onClick={openNav}
          >
            &#9776;
          </span>
        )}
        <Fourm />
        <Stories display={display} />
      </div>
    </div>
  );
};

export default Home;
