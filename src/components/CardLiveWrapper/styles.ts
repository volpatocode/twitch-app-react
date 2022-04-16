import styled from "styled-components";
import { propsType } from "./index";

export const CardLiveWrapper = styled.div<propsType>`
  .grid {
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.3fr;
    grid-template-rows: 1fr;
    grid-template-areas: "img" "content" "icon";
    background-color: red;
    padding: 3px 0px 3px 0px;
    width: 300px;
    max-height: 150px;
    max-width: 300px;
  }

  .img {
    grid-area: "img";
    padding: 3px;
  }

  .content {
    grid-area: "content";
    padding: 3px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icon {
    grid-area: "icon";
    padding: 1px;
    justify-self: flex-end;
  }

  .content__badges {
    display: flex;
    gap: 3px;
    flex-wrap: wrap;
  }

  .liveImage{
    width: 300px;
    height: 170px;
    position: relative;
  }

  .badgeSpec{
    position: absolute;
    bottom: 8px;
    left: 8px;
  }

  .liveBadge{
    position: absolute;
    top: 8px;
    left: 8px;
  }


`;
