import React from 'react'
import * as S from "./styles"

export type propsType = {

}

 const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.IconChest>
        <button>
          <svg fill="white" width="15px" height="15px" viewBox='0 0 20 20'>
            <g>
            <path fill-rule="evenodd" d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z" clip-rule="evenodd"></path>
            </g>
          </svg>
        </button>
      </S.IconChest>
    </>
  )
}

export default index;


