import React from "react";
import * as S from "./styles";

type propsType = {
  text: string;
  linkUrl: string;
};

const index = ({ text, linkUrl }: propsType) => {
  return <S.Button href={linkUrl}>{text}</S.Button>;
};

export default index;
