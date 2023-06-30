import React from "react"
import {Input,Avatar} from "@nextui-org/react"
import data from "../json/fourmdata.json"
export default function Fourm(){
  return(
    <div className="pt-5">
      <h3 className="font-semibold text-2xl pl-8 text-red-600">DISCUSSION FOURM</h3>
      <p className="font-semibold text-xl pl-8 mt-2 mb-1">Filter</p>
      <div className="flex pl-2 pl-10 pr-4 py-2 gap-x-2 bg-white rounded-md">
        <button className="text-xs px-7 rounded-full text-white bg-red-500">Sector1</button>
        <button className="text-xs px-7 rounded-full text-white bg-blue-500">Sector2</button>
        <button className="text-xs px-7 mr-10 rounded-full text-white bg-yellow-400">Sector3</button>
        <div className="wow">
           <Input width="20vw" bordered type="search" labelRight="🔍"></Input>
        </div>
      </div>
      <div  style={{height:"72.5vh"}} className="flex overflow-y-scroll flex-col mt-2 p-2 bg-white pl-10">
        <img className="mx-auto" src="payment.png" width="300" alt="image"></img>
        <div className="flex">
          <Avatar
          css={{ml:"$12"}}
          size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          color="primary"
          bordered
        />
          <p className="mt-3 text-gray-800 font-semibold ml-4">Mohit Agarwal</p>
          <p className="my-auto py-1 rounded-full px-6 text-xs text-white bg-red-500 ml-4">Sector 1</p>
        </div>
        <p className="para mt-2 mb-3">He is from Assam interested in fullstack development using React, Next, Tailwind CSS, Bootstrap, JavaScript, Html, CSS and Git. He is really enthusiastic and dedicated towards his work</p>
        <div className="flex justify-evenly">
          <p>❤️ 2k</p>
          <p>👁️ 2k</p>
          <p>💬 2k Comments</p>
        </div>
        <div className="mt-4">
         {data.map((ele,i)=>{
        return(
        <div style={{boxShadow:"0px 11px 8px -10px #CCC, 0px -11px 8px -10px #CCC"}} key={i} className="flex flex-col mt-2 mb-6 bg-white py-5">
        <div className="flex">
          <Avatar
          css={{ml:"$12"}}
          size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          color="primary"
          bordered
        />
          <p className="mt-3 text-gray-800 font-semibold ml-4">{ele.name}</p>
          <p className={ele.sector==="sector 2"?"my-auto py-1 rounded-full px-6 text-xs text-white bg-blue-500 ml-4":"my-auto py-1 text-xs rounded-full px-6 text-white bg-yellow-400 ml-4"}>{ele.sector}</p>
        </div>
        <p className="para mt-2 mb-3">{ele.desc}</p>
        <div className="flex justify-evenly">
          <p>❤️ 2k</p>
          <p>👁️ 2k</p>
          <p>💬 2k Comments</p>
        </div>
      </div>
        )
      })}
        </div>
      </div>
    </div>
  )
}
