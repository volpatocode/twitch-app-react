import React from 'react'
import * as S from "./styles"

export type propsType = {

}

 const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.IconWhisper>
        <button>
          <svg fill="white" height="18px" width="18px" viewBox='0 0 20 20'>
            <g>
            <path fill-rule="evenodd" d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z" clip-rule="evenodd"></path>
            </g>
          </svg>
        </button>
      </S.IconWhisper>
    </>
  )
}

export default index;


