import React from "react";
import TripleDotIcon from "../TripleDotIcon"
import * as S from "./styles";

export type propsType = {

  
};

const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.NavBar>
        <div>
          <TripleDotIcon/>
        </div>
      </S.NavBar>
    </>
  );
};

export default index;
