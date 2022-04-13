import React from 'react'
import * as S from "./styles"

export type propsType = {

}

 const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.IconPrime>
        <button>
          <svg fill="white" height="18px" width="18px" viewBox='0 0 20 20'>
            <g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path>
            </g>
          </svg>
        </button>
      </S.IconPrime>
    </>
  )
}

export default index;


