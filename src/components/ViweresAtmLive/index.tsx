import React from 'react'
import * as S from "./styles"

export type propsType = {
  viwers: string;
    
}

 const index = (props: propsType) => {
  const {viwers} = props;


  return (
    <>
      <S.ViwersAtmLive>
          <p>
            {viwers} espectadores
          </p>
      </S.ViwersAtmLive>
    </>
  )

}


export default index;


