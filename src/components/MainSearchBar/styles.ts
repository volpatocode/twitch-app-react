import styled from "styled-components";
import { propsType } from "./index";

export const MainSearchBar = styled.div<propsType>`
    display: flex;
    align-items: center;
    input{
    width: 360px;
    padding: 0px 10px;
    font-size: 1.4rem;
    background: #464649;
    border-radius: 5px 0px 0px 5px;
    outline: 0;
    height: 35px;
    color: #909092;
    }

    input:focus{
        border: 1px solid #772ce8;
        background-color:#18181B;
    }

    input::placeholder{
        color: hsla(0, 0%, 65%, 075);
        font-weight: bolder;
    }

    .searchIcon{
        height: 35px;
        padding: 5px;
        background: #3A3A3D;
        border-radius: 0px 5px 5px 0px;
        :hover{
            background: hsla(0, 0%, 35%, 075);
        }
        display: flex;
        align-items: center;
        padding: 0px 7px;

    }
`;
