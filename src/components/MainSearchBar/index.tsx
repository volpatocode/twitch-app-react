import React from "react";
import * as S from "./styles";

export type propsType = {
  placeholder: string;


};

const index = (props: propsType) => {
  const {placeholder} = props;

  return (
    <>
      <S.MainSearchBar {...props}>
        <div>
          <input type="text" placeholder={placeholder}/>
        </div>
      </S.MainSearchBar>
    </>
  );
};

export default index;
