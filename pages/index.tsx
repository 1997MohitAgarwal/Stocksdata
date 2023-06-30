import type { NextPage } from 'next'
import {useState} from "react"
import { Avatar } from '@nextui-org/react';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Fourm from "../components/Fourm"
import Stories from "../components/Stories"
import data1 from "../json/data.json"
import data2 from "../json/fourmdata.json"
const Home: NextPage = () => {
  const [display,setDisplay]=useState("grid-cols-2")
  const [status,setStatus]=useState(false)
  function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
  document.getElementById("main").style.marginLeft = "270px";
  setDisplay("grid-cols-1")
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  setDisplay("grid-cols-2")
}
  let img=["boro.png","dmart.png","hfl.png","saksoft.png","infosys.png","vbl.png","paint.png","mtar.png","polycab.png"]
  return (
    <div>
      <Navbar/>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center gap-x-20 flex-wrap w-full bg-gray-900 py-2">
      {data1.map((ele,i)=>{
       return(
         <div key={i} className="flex gap-x-4">
          <p className=" text-white">{ele.name}</p>
          <p className=" text-white">{ele.price}</p>
          <p className={i%2===0?" text-red-600":" text-green-600"}>{ele.today}</p>
          </div>
       )
      })}
        </div>
      <p className="block ml-8 font-semibold text-lg md-block sm-none text-red-600">FEATURED COMPANIES</p>
      <div className="flex flex-wrap justify-center bg-sky-100 py-2 gaps">
        {img.map((ele,i)=>{
          return(
            <img key={i} className="imgsetting" width="100"  src={ele} alt="companies"></img>
          )
        })}
      </div>
    <div id="mySidenav" className="sidenav">
     <a className="closebtn cursor-pointer" onClick={closeNav}>&times;</a>
      <div className="flex items-center ml-5 mb-6">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <p className="text-white ml-3">Hello, Mohit</p>
        <p className="ml-6">🔔</p>
      </div>
      <hr/>
     <a className="mb-2 mt-4 hover:bg-cyan-700 focus:bg-cyan-700" href="#">📄 Discussion Forum</a>
     <a className="mb-2 hover:bg-cyan-700 focus:bg-cyan-700" href="#">💰 Market Stories</a>
     <a className="mx-8 mb-2 hover:bg-cyan-700 hover:rounded-md focus:bg-cyan-700 focus:rounded-md" href="#"> Sentiment</a>
     <a className="mx-8 mb-2 hover:bg-cyan-700 hover:rounded-md focus:bg-cyan-700 focus:rounded-md" href="#"> Market</a>
     <a className="mx-8 mb-2 hover:bg-cyan-700 hover:rounded-md focus:bg-cyan-700 focus:rounded-md" href="#"> Sector</a>
     <a className="mx-8 mb-2 hover:bg-cyan-700 hover:rounded-md focus:bg-cyan-700 focus:rounded-md" href="#"> Watchlist</a>
     <a className="mx-8 mb-2 hover:bg-cyan-700 hover:rounded-md focus:bg-cyan-700 focus:rounded-md" href="#"> Events</a>
     <a className="mx-8 hover:bg-cyan-700 hover:rounded-md focus:bg-cyan-700 focus:rounded-md" href="#"> News/Interview</a>
    </div>
      <div id="main" className="gap-x-6 bg-stone-100 pb-6">
      <span className="open" style={{fontSize:"30px",cursor:"pointer"}} onClick={openNav}>&#9776;</span>
      <Fourm/>
      <Stories display={display}/>
      </div>
    </div>
  )
}

export default Home