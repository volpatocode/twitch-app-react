import styled from "styled-components";
import { propsType } from "./index";

export const AnnouncementLiveWrapper = styled.div<propsType>`
    .gridAnnouncementLive{
        display: grid;
        grid-template-columns: 530px 220px;
        grid-template-rows: 300px;
        grid-template-areas: "live" "description";
    }

    .gridLeft{
        grid-area: "live";
    }

    .gridRight{
        grid-area: "description";
    }
`;
