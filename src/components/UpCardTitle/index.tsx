import React from "react";
import * as S from "./styles";

export type propsType = {
  text:string;

};

const index = (props: propsType) => {
  const {text} = props;

  return (
    <>
      <S.UpCardTitle {...props}>
        <h2>{text}</h2>
      </S.UpCardTitle>
    </>
  );
};

export default index;
