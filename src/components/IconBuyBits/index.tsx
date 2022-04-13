import React from 'react'
import * as S from "./styles"

export type propsType = {

}

 const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.IconBuyBits>
        <div>
          <button>
            <svg fill="white" height="25px" width="25px" viewBox='0 0 20 20'>
              <g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"></path>
              </g>
            </svg>
            <h2>Comprar Bits</h2>
          </button>
        </div>
      </S.IconBuyBits>
    </>
  )
}

export default index;


