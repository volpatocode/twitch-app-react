import styled from "styled-components";
import { propsType } from "./index";

export const UserStatus = styled.div<propsType>`
  background-color: ${(props) => {
    switch (props.bgColor) {
      case "online":
        return "green";
      case "offline":
        return "grey";
      case "away":
        return "orange";
      case "busy":
        return "red";
      default:
        "grey";
    }
  }};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  transform: translateY(-40%);
  border: 1px solid #18181b;
`;
