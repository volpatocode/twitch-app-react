import styled from "styled-components";
import { propsType } from "./index";

export const StreamerList = styled.div<propsType>`
  background: #1f1f23;
  max-height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    opacity: 0.5;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 30%, 075);
    border-radius: 5px;
  }

  .firstHeaderStreamerList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 5px 5px 10px 10px;
  }

  .secondHeaderStreamerList {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    height: 80px;
    align-items: flex-start;
    justify-content: space-around;
    padding: 5px 5px 10px 10px;
  }

  .streamerList {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2px;
    padding-bottom: 10px;
    border-bottom: 2px solid hsla(0, 0%, 20%, 075);
  }

  .friendsSearchBar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 15px;
  }
`;
