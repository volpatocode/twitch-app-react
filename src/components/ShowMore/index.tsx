import React from "react";
import * as S from "./styles";

export type propsType = {
  text: string;
};

const index = (props: propsType) => {
  const { text } = props;

  return (
    <>
      <S.ShowMore>
        <div>
          <button>
            {text}
            <svg
              fill="#a970ff"
              width="10px"
              height="10px"
              viewBox="0 0 20 20"
            >
              <g>
                <path d="M14.5 6.5L10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
              </g>
            </svg>{" "}
          </button>
        </div>
      </S.ShowMore>
    </>
  );
};

export default index;
