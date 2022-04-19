import React from "react";
import IconTwitch from "../IconTwitch";
import Button from "../Button";
import * as S from "./styles";
import TripleDotIcon from "../TripleDotIcon";
import SearchBar from "../MainSearchBar";
import Icon from "../Icon";

import AvatarImage from "../AvatarImage";

export type propsType = {};

const index = (props: propsType) => {
  const {} = props;

  return (
    <S.NavBar>
      <S.Flex>
        <IconTwitch></IconTwitch>
        <Button text="Seguindo" linkUrl="#"></Button>
        <Button text="Procurar" linkUrl="#"></Button>
        <TripleDotIcon></TripleDotIcon>
      </S.Flex>
      <S.Flex>
        <SearchBar placeholder="Buscar"></SearchBar>
      </S.Flex>
      <S.Flex>
        <Icon iconBg="none" icon="prime"></Icon>
        <Icon iconBg="none" icon="chest"></Icon>
        <Icon iconBg="none" icon="whisper"></Icon>
        <Icon iconBg="none" icon="buybits"></Icon>
        <AvatarImage
          avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/b572fe0a-3fab-4a0c-bc7e-c10ff637fdb5-profile_image-50x50.png"
          avatarHeight="35px"
          avatarWidth="35px"
          avatarStatus="online"
        />
      </S.Flex>
    </S.NavBar>
  );
};

export default index;
