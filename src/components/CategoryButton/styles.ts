import styled from "styled-components";
import { propsType } from "./index";

export const CategoryButton = styled.div<propsType>`
  div{
      width: 302px;
      height: 45px;
      background-color:#772ce8;
      border-radius: 8px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 15px 3px 15px;
      cursor: pointer;
  }

  div:hover{
    background-color:#9147ff;
  }

  img{
      z-index: 2;
      max-width: 70px ;
      max-height: 70px;
  }

  p{
      font-size: 2.5rem;
      color: #f6f6f6;
      font-weight: 700;
      text-align: center;
  }

`;
