import React from 'react'
import * as S from "../CardLive/styles"

type propsType = {
    imgWidth:"horizontal" | "vertical";
    imgHeight:"horizontal" | "vertical";
    imgSource:string;
    imgAlt: string;
    linkHover: string;
}

 const index = ({imgSource, imgAlt, imgHeight, imgWidth, linkHover, ...rest}: propsType) => {
  return (
    <>
      <S.CardLive>
        <div>
          <a href={linkHover}>
            <img src={imgSource}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}>
            </img>
          </a>
        </div>
      </S.CardLive>
    </>
  )
}

export default index;


