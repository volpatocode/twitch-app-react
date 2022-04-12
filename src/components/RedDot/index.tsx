import React from 'react'
import * as S from "./styles"

export type propsType = {
    dotWidth?: string;
    dotHeight?: string;
}

 const index = (props: propsType) => {
  const {dotHeight, dotWidth} = props;

  return (
    <>
      <S.RedDot width={dotWidth} height={dotHeight} {...props}/>
    </>
  )
}

export default index;


