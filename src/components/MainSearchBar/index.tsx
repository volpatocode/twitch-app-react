import React from "react";
import * as S from "./styles";
import IconSearch from "../IconSearch";

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
        <div className="searchIcon">
          <IconSearch/>
        </div>
      </S.MainSearchBar>
    </>
  );
};

export default index;
