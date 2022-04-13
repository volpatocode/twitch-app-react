import styled from "styled-components"
import { propsType } from "./index"


export const IconBuyBits = styled.div<propsType>`
    button{
        cursor: pointer;
        background: none;
        padding: 8px;
        display: flex;
        align-items: center;
        background:hsla(0,0%,20%,075);
        border-radius: 3px;
        height: 31px;
        width: 132px;
    }

    h2{
        color:#EFEFF1;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 600;
        padding-left: 5px;
    }

    button:hover{
        background:hsla(0,0%,30%,075);
    }
`

