import React from 'react'
import * as S from "./styles"

type propsType = {
  avatarUrl: string;
  avatarWidth: string;
  avatarHeight: string;
}

 const index = ({avatarUrl, ...rest}: propsType) => {
  return (
    <>
      <S.AvatarImage {...rest}><img src={avatarUrl}></img></S.AvatarImage>
    </>
  )
}

export default index;