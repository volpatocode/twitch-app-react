import styled from "styled-components"
import { propsType } from "./index"
export const CardLive = styled.div<propsType>`

img{
    max-width: fit-content;
    width:${(props) => {switch(props.imgWidth)
    {
        case "announcementLive":
            return "530px"
        case "cardGame":
            return "150px"
        case "cardLive":
            return "300px"
        default: "auto"
    }
}};

    height:${(props) => {switch(props.imgHeight)
    {
        case "announcementLive":
            return "300px"
        case "cardGame":
            return "200px"
        case "cardLive":
            return "170px"
        default: "auto"
    }
}}};

img:hover{
    transition: 150ms linear;
    top: -3px;
    right: -3px;
    position: relative;
    cursor: pointer;
    
}

div{
    background-color:#772ce8;
    width: 100%;
    height: 100%;
    max-width: fit-content;
    max-height: fit-content;
} 
`

