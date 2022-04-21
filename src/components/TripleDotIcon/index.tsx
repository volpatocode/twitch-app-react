import React from "react";
import * as S from "./styles";

type propsType = {

};

const index = (props: propsType) => {

const {} = props;

  return (
    <S.TripleDotIcon {...props}>
      <button>
        <svg width="19px" height="25px" viewBox="0 0 20 20" fill="#f6f6f6">
          <g>
            <path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
          </g>
        </svg>
      </button>
    </S.TripleDotIcon>
  );
};

export default index;
