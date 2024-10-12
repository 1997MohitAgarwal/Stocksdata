import React from "react"
import { Card, Col, Text } from "@nextui-org/react";
import stories from "../json/stories.json"
export default function Stories(props){
  return(
    <div className="pt-5 w-full mr-4 storiesmain">
    <h3 className="font-semibold text-2xl pl-8 text-red-600">MARKET STORIES</h3>
    <div className={`story grid ${props.display} mt-10 gap-x-2 gap-y-6`}>
      {stories.map((ele,i)=>{
       return(
         <div key={i}>
         <Card css={{width:"fit-content"}}>
    <Card.Footer css={{ position: "absolute", zIndex: 1, bottom:5}}>
      <Col>
        <Text size={12} color="white">
          {ele.desc}
        </Text>
      </Col>
    </Card.Footer>
    <Card.Image
      src={ele.img}
      objectFit="cover"
      width="100%"
      height={200}
      alt="Stock market"
    />
  </Card>
      </div>
       )
      })}
    </div>
   </div>
  )
}