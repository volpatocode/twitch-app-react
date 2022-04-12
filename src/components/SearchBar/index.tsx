import React from "react";
import * as S from "./styles";

export type propsType = {


};

const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.SearchBar {...props}>
        <div>
          <input type="text" placeholder="Buscar"/>
          <button>
            <svg width="20px" height="20px" viewBox="3 0 20 20">
              <g>
              <path fill-rule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clip-rule="evenodd"></path>
              </g>
            </svg>
          </button>
        </div>
      </S.SearchBar>
    </>
  );
};

export default index;
