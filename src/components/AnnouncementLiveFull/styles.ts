import styled from "styled-components";
import { propsType } from "./index";

export const AnnouncementLiveFull = styled.div<propsType>`
  background: url('https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg');
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  margin-bottom: 15px;

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
