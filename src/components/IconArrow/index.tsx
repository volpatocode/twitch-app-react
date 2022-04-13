import React from 'react'
import * as S from "./styles"

export type propsType = {
  direction: string;
}

 const index = (props: propsType) => {
  const {...rest} = props;

  return (
    <>
      <S.IconArrow {...rest}>
        <div>
          <button>
            <svg fill="white" height="15px" width="15px" viewBox='0 0 20 20'>
              <g>
              <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
              </g>
            </svg>
          </button>
        </div>
      </S.IconArrow>
    </>
  )
}

export default index;


