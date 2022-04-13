import styled from "styled-components"
import { propsType } from "./index"


export const IconArrow = styled.div<propsType>`
    button{
        cursor: pointer;
        background: none;
        padding: 3px;
        background-color: black;
        border-radius: 3px;
        transform: ${(props) => (props.direction === "left" ? "rotateY(180deg)" : " ")};
        


    button:hover{
        background:hsla(0,0%,20%,075);
    }

}`

