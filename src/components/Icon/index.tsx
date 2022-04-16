import React from "react";
import * as S from "./styles";

export type propsType = {
  direction?: "left" | "right";
  icon: "arrow" | "bits" | "buybits" | "chest" | "prime" | "whisper";
};

const Icons = {
  arrow: (
    <svg fill="white" height="30px" width="30px" viewBox="0 0 20 20">
      <g>
        <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
      </g>
    </svg>
  ),
  bits: (
    <svg fill="white" height="18px" width="18px" viewBox="0 0 20 20">
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
        ></path>
      </g>
    </svg>
  ),
  buybits: (
    <svg fill="white" height="25px" width="25px" viewBox="0 0 20 20">
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
        ></path>
      </g>
    </svg>
  ),
  chest: (
    <svg fill="white" width="20px" height="20px" viewBox="0 0 20 20">
      <g>
        <path
          fill-rule="evenodd"
          d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z"
          clip-rule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  prime: (
    <svg fill="white" height="20px" width="20px" viewBox="0 0 20 20">
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
        ></path>
      </g>
    </svg>
  ),
  whisper: (
    <svg fill="white" height="20px" width="20px" viewBox="0 0 20 20">
      <g>
        <path
          fill-rule="evenodd"
          d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z"
          clip-rule="evenodd"
        ></path>
      </g>
    </svg>
  ),
};

const index = ({ icon, direction = "right" }: propsType) => {
  return (
    <>
      <S.Icon direction={direction}>
        {Icons[icon]}
      </S.Icon>
    </>
  );
};

export default index;
