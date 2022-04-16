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
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
  }

  button:hover{
    background-color: rgba(0,0,0,0.3);
  }

  div {
    display: flex;
    align-items: center;
  }
`;
