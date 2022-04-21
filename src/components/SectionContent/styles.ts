import styled from "styled-components";
import { propsType } from "./index";

export const SectionContent = styled.div<propsType>`
  width: 100%;
  background: #0e0e10;
  padding-top: 15px;

  .cardLives {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 8px;
    justify-content: space-around;
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
    width: 100%;
  }

  .border2 {
    border-top: 1px solid hsla(0, 0%, 20%, 075);
    width: 100%;
  }
`;

export const SectionCategories = styled.div<propsType>`
  width: 100%;
  padding-bottom: 5px;
  background: #0e0e10;
  border-bottom: 1px solid hsla(0, 0%, 20%, 075);

  .cardLives {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
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

export const SectionWhenOff = styled.div<propsType>`
  width: 100%;
  background: #0e0e10;
  padding-top: 30px;

  .cardLives {
    display: flex;
    align-items: center;
    column-gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .sectionTitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin: 0 auto;
    padding-bottom: 10px;
    column-gap: 4px;
  }

  .categoriesIcons {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 10px;
    column-gap: 8px;
    padding-bottom: 25px;
    flex-wrap: wrap;
    row-gap: 10px;
    justify-content: space-around;
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
    width: 100%;
  }

  .border2 {
    border-top: 1px solid hsla(0, 0%, 20%, 075);
    width: 100%;
  }
`;
