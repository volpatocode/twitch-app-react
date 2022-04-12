import styled from "styled-components";
import { propsType } from "./index";

export const SearchBar = styled.div<propsType>`
    input{
    width: 360px;
    padding: 0px 10px;
    font-size: 1.1rem;
    background: #464649;
    border-radius: 5px 0px 0px 5px;
    outline: 0;
    height: 35px;
    color: #909092;
    }

    input:hover{
        border: 1px solid hsla(0,0%,50%,075);
    }

    button{
        background-color:#3A3A3D;
        width: 30px;
        padding: 0px 10px;
        border-radius: 0px 5px 5px 0px;
        height: 35px;
    }

    button:hover{
        cursor: pointer;
        background-color:hsla(0,0%,20%,075)

    }

    div{
        display: flex;
        align-items: center;
    }



   
`;
