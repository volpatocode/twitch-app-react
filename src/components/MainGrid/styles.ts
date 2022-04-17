import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
  grid-template-areas: "navbar" "navbar"
                        "sidebar" "content";

.navBar{
    grid-area: "navbar";

}

.sideBar{
    grid-area: "sidebar";

}

.mainContent{
    grid-area: "content";
}

  `
