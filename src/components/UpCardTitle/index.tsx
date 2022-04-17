import React from "react";
import * as S from "./styles";

export type propsType = {
  upCardTitle: string;
};

const index = ({ upCardTitle }: propsType) => {
  return (
    <>
      <S.UpCardTitle>
        <h2>{upCardTitle}</h2>
      </S.UpCardTitle>
    </>
  );
};

export default index;
