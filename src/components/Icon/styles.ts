import styled from "styled-components";
import { propsType } from "./index";

export const Icon = styled.div<propsType>`
    cursor: pointer;
    padding: 3px;
    border-radius: 3px;
    transform: ${(props) =>
      props.direction === "left" ? "rotateY(180deg)" : "initial"};

   :hover {
      background: hsla(0, 0%, 20%, 075);
    }


  `;
