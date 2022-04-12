import styled from "styled-components";
import { propsType } from "./index";

export const ShowMore = styled.div<propsType>`
  font-size: 2rem;
  font-weight: 600;
  display: flex;

  button {
    color: #a970ff;
    cursor: pointer;
    padding: 10px;
    border-radius: 3px;
    background-color: black;
  }

  button:hover{
    background-color: rgba(0,0,0,0.3);
  }

  div {
    display: flex;
    align-items: center;
  }
`;
