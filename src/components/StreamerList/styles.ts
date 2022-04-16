import styled from "styled-components";
import { propsType } from "./index";

export const StreamerList = styled.h1<propsType>`
    background:#1F1F23;
    height: fit-content;
    width: 260px;
    padding: 5px 10px 5px 10px;

    .firstHeaderStreamerList{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding-bottom: 10px;
    }

    .secondHeaderStreamerList{
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
        height: 80px;
        align-items: flex-start;
        justify-content: space-around;
    }

    .streamerList{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 2px;
    }
`;
