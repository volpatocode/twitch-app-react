import styled from "styled-components";
import { propsType } from "./index";

export const CardGameWrapper = styled.div<propsType>`
    display: flex;
    flex-direction: column;


    .grid{
        display: grid;
        grid-template-columns: 1fr 0.1fr;
        grid-template-rows: 1fr .3fr 1.3fr;
        grid-template-areas: "titleAndInfo" "tripledot"
                             "titleAndInfo" "titleAndinfo"
                             "badges" "badges";
        padding-top: 5px;
    }

    .titleAndInfo{
        grid-area: "title";
        grid-row: span 2;
    }

    .tripledot{
        grid-area: "tripledot";
    }


    .badges{
        grid-area: "badges";
        grid-column: span 2;
    }



`;

