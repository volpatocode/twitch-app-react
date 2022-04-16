import React from 'react'
import * as S from "./styles"

type propsType = {
  badgeVariant: "square" | "rounded";
  badgeBgColor: "grey" | "red";
  badgeText: string;
}

 const index = ({badgeText, ...rest }: propsType) => {
  return (
    <S.Badge {...rest}>{badgeText}</S.Badge>
  );
}

export default index;