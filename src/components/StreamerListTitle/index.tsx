import React from "react";
import * as S from "./styles";

export type propsType = {
  listTitle: string;
};

const index = ({listTitle}: propsType) => {


  return (
    <>
      <S.StreamerListTitle>{listTitle}</S.StreamerListTitle>
    </>
  );
};

export default index;
