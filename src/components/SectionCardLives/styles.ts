import styled from "styled-components";
import { propsType } from "./index";

export const SectionCardLives = styled.div<propsType>`
  width: 100%;
  height: 100%;
  background: #0e0e10;

  .cardLives {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
  }

  .sectionTitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 1545px;
    margin: 0 auto;
    padding-bottom: 10px;
  }

  .showMore {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1545px;
    margin: 0 auto;
    padding-top: 8px;
  }

  .border1 {
    border-top: 1px solid hsla(0, 0%, 20%, 075);
    width: 730px;
  }

  .border2 {
    border-top: 1px solid hsla(0, 0%, 20%, 075);
    width: 730px;
  }
`;
