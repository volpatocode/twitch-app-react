import React from 'react'
import * as S from "./styles"

export type propsType = {
  viwers: string;
    
}

 const index = (props: propsType) => {
  const {viwers} = props;


  return (
    <>
      <S.ViwersAtmList>
          <p>
            {viwers}
          </p>
      </S.ViwersAtmList>
    </>
  )

}


export default index;


