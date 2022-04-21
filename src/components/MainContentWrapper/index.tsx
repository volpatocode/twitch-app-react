import React from "react";
import AnnouncementLiveFull from "../AnnouncementLiveFull";
import SectionCardLives from "../SectionCardLives";
import SectionCategories from "../SectionCategories";
import SectionWhenOff from "../SectionWhenOff";
import * as S from "./styles";
type propsType = {};

const index = ({}: propsType) => {
  return (
    <>
      <S.MainContentWrapper>
          <AnnouncementLiveFull
            icon1="arrow"
            direction1="left"
            icon2="arrow"
            direction2="right"
            announcementLiveWidth="announcementLive"
            announcementLiveAlt="Live de Anúncio"
            announcementLiveHeight="announcementLive"
            announcementLiveLink="https://www.twitch.tv/brat"
            announcementLiveParagraphText="Juntando a habilidade dos speedrunners com a boa vontade de todos, a Brazilians Against Time faz uma grande maratona anual para ajudar causas humanitárias. \r\nClique aqui para assistir e conversar."
            avatarHeight="40px"
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="40px"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
            liveGameText="League of Legends"
            liveNameText="Yoda"
            badgeBgColor="grey"
            badgeSpecBg="transparent"
            badgeSpecText=""
            badgeText="RPG"
            badgeVariant="rounded"
            iconBg1="black"
            iconBg2="black"
            announcementLiveSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_yoda-440x248.jpg"
          />
        <SectionCardLives upCardTitle="Canais ao vivo que achamos que vai gostar" />
        <SectionCategories upCardTitle="que achamos que vai gostar" />
        <SectionWhenOff upCardTitle1="Enquanto" upCardTitle2="está offline" />
        <SectionCardLives upCardTitle="Canais relacionados aos assistidos anteriormente" />
        <SectionCardLives upCardTitle="Canais de entretenimento puro" />
      </S.MainContentWrapper>
    </>
  );
};

export default index;
