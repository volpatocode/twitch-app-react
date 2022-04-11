import React from 'react'
import * as S from "./styles"

type propsType = {
  width: string;
  height: string;
}

 const index = ({width, height}: propsType) => {
  return (
  
      <S.TripleDotIcon>
        <svg ><g><path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path></g></svg>
      </S.TripleDotIcon>

)}

export default index;


