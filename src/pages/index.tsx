import React from "react"
import CardLive from "../components/CardLive"

type propsType = {
  
}

export default function Home({}: propsType){
  return (
        
    <CardLive imgAlt="Card da Live"
    imgHeight="horizontal"
    imgWidth="horizontal"
    imgSource="https://tm.ibxk.com.br/2021/09/30/30150241767294.jpg?ims=1200x675"
    linkHover="https://www.twitch.tv">
    </CardLive>
    
  )
}