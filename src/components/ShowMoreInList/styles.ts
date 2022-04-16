import styled from "styled-components";
import { propsType } from "./index";

export const ShowMoreInList = styled.button<propsType>`
  color: #bf94ff;
  background: none;
  font-size: 1.05rem;

  :hover{
    color:#a970ff;
    text-decoration: underline;
    cursor: pointer;
  }

`;
