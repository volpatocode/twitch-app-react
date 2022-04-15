import styled from "styled-components";
import { propsType } from "./index";

export const CardLive = styled.div<propsType>`
  img {
    border-left: 0px solid #772ce8;
    border-bottom: 0px solid #772ce8;
    transition: all 3s ease;

    max-width: fit-content;
    width: ${(props) => {
      switch (props.imgWidth) {
        case "announcementLive":
          return "530px";
        case "cardGame":
          return "150px";
        case "cardLive":
          return "300px";
        default:
          "auto";
      }
    }};
    height: ${(props) => {
      switch (props.imgHeight) {
        case "announcementLive":
          return "300px";
        case "cardGame":
          return "200px";
        case "cardLive":
          return "170px";
        default:
          "auto";
      }
    }};
  }

  img:hover {
    cursor: pointer;
    
  }
`;
