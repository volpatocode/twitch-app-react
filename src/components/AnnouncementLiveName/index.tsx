import React from 'react'
import * as S from "./styles"
type propsType = {
  liveNameText: string;
}

 const index = ({liveNameText}: propsType) => {
  return (
    <>
    
      <S.AnnouncementLiveName>
        <h1>{liveNameText}</h1>
      </S.AnnouncementLiveName>
    </>
  )
}

export default index;