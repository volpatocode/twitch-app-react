import React from 'react'
import * as S from "./styles"
type propsType = {
  titleText: string;
  subtitleText: string;
}

 const index = ({titleText, subtitleText}: propsType) => {
  return (
    <>
    
      <S.TitleSubtitle>
        <h1>{titleText}</h1>
        <h2>{subtitleText}</h2>
      </S.TitleSubtitle>
    </>
  )
}

export default index;