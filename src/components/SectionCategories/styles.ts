import styled from "styled-components";
import { propsType } from "./index";

export const SectionCategories = styled.div<propsType>`
  width: fit-content;
  height: fit-content;
  background: #0e0e10;
  border-bottom: 1px solid hsla(0, 0%, 20%, 075);
  

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
    width: 1593px;
    margin: 0 auto;
    padding-bottom: 10px;
    column-gap: 3px;
  }
`;
