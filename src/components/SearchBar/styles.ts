import styled from "styled-components";
import { propsType } from "./index";

export const SearchBar = styled.div<propsType>`
    input{
    width: 360px;
    padding: 0px 10px;
    font-size: 1.1rem;
    background: #464649;
    border-radius: 5px;
    outline: 0;
    height: 35px;
    color: #909092;
    }

    input:hover{
        border: 1px solid hsla(0,0%,50%,075);
    }

    input:focus{
        border: 1px solid #772ce8;
    }
`;
