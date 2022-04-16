import React from 'react'
import * as S from "./styles"
type propsType = {
  
  liveGameText: string;
}

 const index = ({liveGameText}: propsType) => {
  return (
    <>
    
      <S.AnnouncementLiveGame>
        <h1>{liveGameText}</h1>
      </S.AnnouncementLiveGame>
    </>
  )
}

export default index;