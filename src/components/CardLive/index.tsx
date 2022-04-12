import React from 'react'
import * as S from "../CardLive/styles"

export type propsType = {
    imgWidth: string;
    imgHeight: string;
    imgSource:string;
    imgAlt: string;
    linkHover: string;
}

 const index = (props: propsType) => {
  const {imgSource, imgAlt, imgHeight, imgWidth, linkHover} = props;

  return (
    <>
      <S.CardLive {...props}>
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


