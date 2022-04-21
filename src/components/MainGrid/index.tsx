import React from "react";
import MainContentWrapper from "../MainContentWrapper";
import NavBar from "../NavBar";
import StreamerList from "../StreamerList";
import * as S from "./styles";
type propsType = {};

const index = ({}: propsType) => {
  return (
    <>
      <S.MainGrid>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="sideBar">
          <StreamerList
            listTitle1="Canais seguidos"
            listTitle2="Canais recomendados"
          />
        </div>
        <div className="mainContent">
          <MainContentWrapper />
        </div>
      </S.MainGrid>
    </>
  );
};

export default index;
