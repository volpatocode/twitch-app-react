import React from "react";
import * as S from "./styles";

export type propsType = {
  buttonText: string;
  buttonImgLink: string;
  buttonImgDescription?: string;
};

const index = ({
  buttonText,
  buttonImgLink,
  buttonImgDescription,
}: propsType) => {
  return (
    <>
      <S.CategoryButton>
        <div>
          <p>{buttonText}</p>
          <img src={buttonImgLink} alt={buttonImgDescription} />
        </div>
      </S.CategoryButton>
    </>
  );
};

export default index;
