import React from "react";
import * as S from "./styles";
export type propsType = {};

const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.IconTwitch>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png"
          alt="Logo Twitch"
        />
      </S.IconTwitch>
    </>
  );
};

export default index;
