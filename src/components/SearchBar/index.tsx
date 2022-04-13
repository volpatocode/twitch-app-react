import React from "react";
import * as S from "./styles";

export type propsType = {
  placeholder: string;


};

const index = (props: propsType) => {
  const {placeholder} = props;

  return (
    <>
      <S.SearchBar {...props}>
        <div>
          <input type="text" placeholder={placeholder}/>
        </div>
      </S.SearchBar>
    </>
  );
};

export default index;
