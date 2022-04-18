import styled from "styled-components";
import { propsType } from "./index";

export const NavBar = styled.div<propsType>`
  background-color: #18181b;
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;

  .left{
    display: flex;
    justify-content: left;
  }

  .right{
    display: flex;
    justify-content: right;
  }

  .middle{
    display: flex;
    justify-content: center;
  }
`;
