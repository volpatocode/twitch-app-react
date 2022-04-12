import React from "react";
import * as S from "./styles";

export type propsType = {
  text:string;
  imgLink:string;
  imgDescription?:string;
  
};

const index = (props: propsType) => {
  const {text, imgLink, imgDescription} = props;

  return (
    <>
      <S.CategoryButton {...props}>
        <div>
          <p>
            {text}
          </p>
          <img src={imgLink} alt={imgDescription} />
        </div>
      </S.CategoryButton>
    </>
  );
};

export default index;
