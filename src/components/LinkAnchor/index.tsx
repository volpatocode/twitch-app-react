import React from "react";
import * as S from "./styles";

export type propsType = {
  linkAnchorText:string;
  anchorLink: string;

  
};

const index = (props: propsType) => {
  const {linkAnchorText, anchorLink} = props;

  return (
    <>
      <S.LinkAnchor {...props}>
        <a href={anchorLink}>{linkAnchorText}</a>
      </S.LinkAnchor>
    </>
  );
};

export default index;
