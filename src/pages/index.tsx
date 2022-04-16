import React from "react";
import CardLiveWrapper from "../components/CardLiveWrapper";

type propsType = {};

export default function Home({}: propsType) {
  return (
    <>
      <CardLiveWrapper
      avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/ebdeb279-1998-4720-942a-c05ebe54672a-profile_image-50x50.png"
      avatarHeight="40px"
      avatarWidth="40px"
      titleText="CEBOLAO DA MASSA"
      infoText="CBLOL"
      infoText2="League of Legends"
      badgeText="Esports"
      badgeBgColor="grey"
      badgeVariant="rounded"
      imgAlt="Live CBLOL"
      imgHeight="cardLive"
      imgWidth="cardLive"
      imgSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_cblol-440x248.jpg"
      linkHover="https://www.twitch.tv/cblol"
      liveBadgeText="AO VIVO"
      liveBadgeVariant="square"
      liveBadgeBgColor="red"
      badgeSpecBg="transparent"
      badgeSpecText="114,7 mil espectadores" />
    </>
  );
}
