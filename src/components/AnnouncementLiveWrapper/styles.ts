import styled from "styled-components";
import { propsType } from "./index";

export const AnnouncementLiveWrapper = styled.div<propsType>`
  .gridAnnouncementLive {
    display: grid;
    grid-template-columns: 530px 220px;
    grid-template-rows: 300px;
    grid-template-areas: "live" "description";
  }

  .gridLeft {
    grid-area: "live";
    position: relative;
  }

  .gridRight {
    grid-area: "description";
    background-color: #18181b;
    padding: 10px;
  }

  .rightFirstPart {
    display: grid;
    grid-template-columns: 1fr 2.8fr;
    grid-template-rows: 100%;
    grid-template-areas: "image" "info";
  }

  .image {
    grid-area: "image";
  }

  .info {
    grid-area: "info";
    text-align: left;
    padding-bottom: 5px;
  }

  .badges {
    padding-bottom: 10px;
  }

  .liveBadge {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 2;
  }
`;

export const AnnouncementLiveParagraph = styled.p<propsType>`
  font-size: 1.3rem;
  color: #f6f6f6;
  text-align: left;
`;

