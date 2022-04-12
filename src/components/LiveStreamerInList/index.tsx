import React from 'react'
import * as S from "./styles"

export type propsType = {

}

 const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.LiveStreamerInList {...props}>
        <div></div>
      </S.LiveStreamerInList>
    </>
  )
}

export default index;


