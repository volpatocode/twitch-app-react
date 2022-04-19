import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 95fr;
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-areas:
    "navbar" "navbar"
    "sidebar" "content";

  .navBar {
    grid-area: "navbar";
    grid-column: span 2;
  }

  .sideBar {
    grid-area: "sidebar";
  }

  .mainContent {
    grid-area: "content";
  }
`;
