import React from "react";
import * as S from "./styles";

type propsType = {
  badgeSpecText: string;
  badgeSpecBg: "transparent" | "none";
};

const index = (props: propsType) => {
  const { badgeSpecText, ...rest } = props;
  return (
    <>
      <S.BadgeSpec {...rest}>{badgeSpecText}</S.BadgeSpec>
    </>
  );
};

export default index;
