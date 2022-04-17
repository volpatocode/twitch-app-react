import React from "react";
import IconTwitch from "../IconTwitch"
import Button from "../Button";
import * as S from "./styles";
import TripleDotIcon from "../TripleDotIcon";
import SearchBar from "../MainSearchBar";
import Icon from "../Icon"

import AvatarImage from "../AvatarImage";

export type propsType = {};

const index = (props: propsType) => {
  const {} = props;

  return (
    <S.NavBar>
      <IconTwitch></IconTwitch>
      <Button text="Seguindo" linkUrl="#"></Button>
      <Button text="Procurar" linkUrl="#"></Button>
      <TripleDotIcon></TripleDotIcon>
      <SearchBar placeholder="Buscar"></SearchBar>
      <Icon icon= "prime"></Icon>
      <Icon icon= "chest"></Icon>
      <Icon icon= "whisper"></Icon>
      <Icon icon= "buybits"></Icon>
      <AvatarImage
        avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/b572fe0a-3fab-4a0c-bc7e-c10ff637fdb5-profile_image-50x50.png"
        avatarHeight="35px"
        avatarWidth="35px"
        avatarStatus="online"
      />
    </S.NavBar>
  );
};

export default index;
