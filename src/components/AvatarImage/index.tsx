import React from 'react'
import UserStatus from "../UserStatus"
import * as S from "./styles"

type propsType = {
  avatarUrl: string;
  ShowAvatarStatus?: string;
  avatarWidth: string;
  avatarHeight: string;
}

 const index = ({avatarUrl, ShowAvatarStatus, ...rest}: propsType) => {
  return (
    <>
      <S.AvatarImage {...rest}>
        <img src={avatarUrl}/>
        <div><UserStatus bgColor='busy'/></div>
        </S.AvatarImage>
    </>
  )
}

export default index;