import React from "react";
import UserStatus from "../UserStatus";
import * as S from "./styles";

type propsType = {
  avatarUrl: string;
  avatarStatus?: "online" | "offline" | "away" | "busy";
  avatarWidth: string;
  avatarHeight: string;
};

const index = ({ avatarUrl, avatarStatus, ...rest }: propsType) => {
  return (
    <>
      <S.AvatarImage {...rest}>
        <img src={avatarUrl} />
        {avatarStatus && <UserStatus bgColor={avatarStatus} />}
      </S.AvatarImage>
    </>
  );
};

export default index;
