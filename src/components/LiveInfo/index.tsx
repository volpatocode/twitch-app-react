import React from 'react'
import * as S from "./styles"
type propsType = {
  infoText: string;
}

 const index = ({infoText}: propsType) => {
  return (
    <>
    
      <S.LiveInfo>
        <h2>{infoText}</h2>
      </S.LiveInfo>
    </>
  )
}

export default index;