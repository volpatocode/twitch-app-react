import React from "react";
import IconTwitch from "../IconTwitch";
import Button from "../Button";
import * as S from "./styles";
import TripleDotIcon from "../TripleDotIcon";
import SearchBar from "../MainSearchBar";
import Icon from "../Icon";
import AvatarImage from "../AvatarImage";
import IconBuyBits from "../IconBuyBits";

export type propsType = {};

const index = (props: propsType) => {
  const {} = props;

  return (
    <S.NavBar>
      <S.FlexLeft>
        <IconTwitch></IconTwitch>
        <Button text="Seguindo" linkUrl="#"></Button>
        <Button text="Procurar" linkUrl="#"></Button>
        <TripleDotIcon></TripleDotIcon>
      </S.FlexLeft>
      <S.Flex>
        <SearchBar placeholder="Buscar"></SearchBar>
      </S.Flex>
      <S.FlexRight>
        <Icon iconBg="none" icon="prime"></Icon>
        <Icon iconBg="none" icon="chest"></Icon>
        <Icon iconBg="none" icon="whisper"></Icon>
        <IconBuyBits />
        <AvatarImage
          avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/b572fe0a-3fab-4a0c-bc7e-c10ff637fdb5-profile_image-50x50.png"
          avatarHeight="30px"
          avatarWidth="30px"
          avatarStatus="busy"
        />
      </S.FlexRight>
    </S.NavBar>
  );
};

export default index;
