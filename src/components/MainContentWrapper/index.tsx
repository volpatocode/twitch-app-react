import React from "react";
import SectionCardLives from "../SectionCardLives";
import SectionCategories from "../SectionCategories";
import SectionWhenOff from "../SectionWhenOff";
import * as S from "./styles";
type propsType = {};

const index = ({}: propsType) => {
  return (
    <>
      <S.MainContentWrapper>
        <SectionCardLives upCardTitle="Canais ao vivo que achamos que vai gostar" />
        <SectionCategories upCardTitle="que achamos que vai gostar" />
        <SectionWhenOff upCardTitle1="Enquanto" upCardTitle2="está offline" />
        <SectionCardLives upCardTitle="Canais relacionados aos assistidos anteriormente" />
        <SectionCardLives upCardTitle="Canais de entretenimento puro" />
      </S.MainContentWrapper>
    </>
  );
};

export default index;
