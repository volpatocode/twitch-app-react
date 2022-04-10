import React from 'react'
import * as S from "./styles"

type propsType = {
  variant?: "square" | "rounded";
  backgroundColor?: string;
  text: string;
}

 const index = ({text, ...rest }: propsType) => {
  return (
    <S.Badge {...rest}>{text}</S.Badge>
  );
}

export default index;