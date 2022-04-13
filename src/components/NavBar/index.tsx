import React from "react";
import IconTwitch from "../IconTwitch";
import Button from "../Button";
import * as S from "./styles";
import TripleDotIcon  from "../TripleDotIcon";
import SearchBar from "../SearchBar";
import IconPrime from "../IconPrime";
import IconChest  from "../IconChest";
import IconWhisper from "../IconWhisper";
import IconBuyBits  from "../IconBuyBits";
import AvatarImage from "../AvatarImage"

export type propsType = {

  
};

const index = (props: propsType) => {
  const {} = props;

  return (
    <>
      <S.NavBar>
        <div>
          <IconTwitch></IconTwitch>
          <Button text="Seguindo" linkUrl="#"></Button>
          <Button text="Procurar" linkUrl="#"></Button>
          <TripleDotIcon></TripleDotIcon>
          <SearchBar placeholder="Buscar"></SearchBar>
          <IconPrime></IconPrime>
          <IconChest></IconChest>
          <IconWhisper></IconWhisper>
          <IconBuyBits></IconBuyBits>
          <AvatarImage avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/b572fe0a-3fab-4a0c-bc7e-c10ff637fdb5-profile_image-50x50.png"
          avatarHeight="35px"
          avatarWidth="35px"
          ShowAvatarStatus="show"
          />
        </div>
      </S.NavBar>
    </>
  );
};

export default index;
