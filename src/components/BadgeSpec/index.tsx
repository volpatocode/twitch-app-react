import React from 'react'
import * as S from "./styles"

type propsType = {
  text: string;
}

 const index = ({text}: propsType) => {
  return (
    
      <>
        <S.BadgeSpec>{text}</S.BadgeSpec>
      </>

  );
}

export default index;
