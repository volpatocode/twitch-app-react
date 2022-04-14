import React from "react";
import * as S from "./styles";

export type propsType = {
  bgColor: "online" | "offline" | "away" | "busy";
};

const index = (props: propsType) => {
  return <S.UserStatus {...props} />;
};

export default index;
