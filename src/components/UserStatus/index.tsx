import React from 'react'
import * as S from "./styles"

export type propsType = {
  bgColor: string;
}

 const index = (props: propsType) => {
  const {bgColor} = props;

  return (
    <>
      <S.UserStatus {...props}>
        <div background-color={bgColor} ></div>
      </S.UserStatus>
    </>
  )
}

export default index;


