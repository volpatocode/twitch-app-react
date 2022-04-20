import styled from "styled-components";
import { propsType } from "./index";

export const Icon = styled.div<propsType>`
  cursor: pointer;
  padding: 3px;
  border-radius: 3px;
  transform: ${(props) =>
    props.direction === "left" ? "rotateY(180deg)" : "initial"};
  background: ${(props) => props.iconBg === "black" ? "#0E0E10" : "none"};
  display: flex;
  align-items: center;

  :hover {
    background: hsla(0, 0%, 20%, 075);
  }

  .buyBits{
    background-color: #3A3A3D;
    border-radius: 5px;
    padding: 4px 8px;
    display: flex;
    column-gap: 5px;
    align-items: center;
    color: white;
    font-size: 1.9rem;
    font-weight: 600;
  }
`;
