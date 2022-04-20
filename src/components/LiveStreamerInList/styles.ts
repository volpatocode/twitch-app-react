import styled from "styled-components";
import { propsType } from "./index";
export const LiveStreamerInList = styled.div<propsType>`
  height: 40px;
  width: 235px;
  :hover {
    background: hsla(0, 0%, 20%, 075);
    cursor: pointer;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 2.5fr 1.4fr;
    grid-template-rows: 25px 25px;
    grid-template-areas:
      "image" "info" "spectators"
      "image" "info" "info";
  }

  .image {
    grid-area: "image";
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: span 2;
  }

  .info {
    grid-area: "info";
    grid-row: span 2;
    padding: 6px 0px 0px 3px;
  }

  .spectators {
    grid-area: "spectators";
    padding: 3px 3px 0px 0px;
    display: flex;
    gap: 2px;
    align-items: center;
  }
`;
