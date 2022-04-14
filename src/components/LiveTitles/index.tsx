import React from 'react'
import * as S from "./styles"
type propsType = {
  
  titleText: string;
}

 const index = ({titleText}: propsType) => {
  return (
    <>
    
      <S.LiveTitles>
        <h1>{titleText}</h1>
      </S.LiveTitles>
    </>
  )
}

export default index;