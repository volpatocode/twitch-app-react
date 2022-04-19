import styled from "styled-components";
import { propsType } from "./index";

export const SectionCardLives = styled.div<propsType>`
  width: 100%;
  background: #0e0e10;

  .cardLives {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
  }

  .sectionTitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin: 0 auto;
    padding-bottom: 10px;
  }

  .showMore {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 8px;
  }

  .border1 {
    border-top: 1px solid hsla(0, 0%, 20%, 075);
  }

  .border2 {
    border-top: 1px solid hsla(0, 0%, 20%, 075);
  }
`;
