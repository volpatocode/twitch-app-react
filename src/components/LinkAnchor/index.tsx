import React from "react";
import * as S from "./styles";

export type propsType = {
  text:string;
  anchorLink: string;

  
};

const index = (props: propsType) => {
  const {text, anchorLink} = props;

  return (
    <>
      <S.LinkAnchor {...props}>
        <a href={anchorLink}>{text}</a>
      </S.LinkAnchor>
    </>
  );
};

export default index;
