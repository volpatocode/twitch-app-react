import styled from "styled-components";
import { propsType } from "./index";

export const SectionCategories = styled.div<propsType>`
  width: 100%;

  background: #0e0e10;
  border-bottom: 1px solid hsla(0, 0%, 20%, 075);

  .cardLives {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .sectionTitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin: 0 auto;
    padding-bottom: 10px;
    column-gap: 3px;
  }
`;
