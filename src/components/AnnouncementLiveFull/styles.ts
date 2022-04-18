import styled from "styled-components";
import { propsType } from "./index";

export const AnnouncementLiveFull = styled.div<propsType>`
  background-color: #772CE8;
  /*width: 1640px;
  height: 350px;*/
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  .grid {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "left middle right";
  }

  .left {
    grid-area: "left";
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .middle{
    grid-area: "middle";
  }

  .right {
    grid-area: "right";
    display: flex;
    align-items: center;
    justify-content: right;
  }
`;
