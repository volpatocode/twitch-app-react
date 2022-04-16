import React from 'react'
import * as S from "./styles"

export type propsType = {
    dotWidth: "live" | "notification";
    dotHeight: string;
}

 const index = (props: propsType) => {
  const {dotHeight, dotWidth} = props;

  return (
    <>
      <S.RedDot width={dotWidth}
      height={dotHeight}
      {...props}
      >
        
      </S.RedDot>
    </>
  )
}



export default index;


