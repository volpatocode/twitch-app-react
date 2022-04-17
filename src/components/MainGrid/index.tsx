import React from "react";
import AnnouncementLiveFull from "../AnnouncementLiveFull";
import NavBar from "../NavBar";
import SectionCardLives from "../SectionCardLives";
import SectionCategories from "../SectionCategories";
import SectionWhenOff from "../SectionWhenOff";
import StreamerList from "../StreamerList";
import * as S from "./styles";
type propsType = {};

const index = ({}: propsType) => {
  return (
    <>
      <S.MainGrid>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="sideBar">
          <StreamerList
            listTitle1="Canais seguidos"
            listTitle2="Canais recomendados"
          />
        </div>
        <div className="mainContent">
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
            avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/1cce6c41-aaf8-44c2-ad1b-ef76fb0eede3-profile_image-50x50.png"
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
            announcementLiveSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_yoda-440x248.jpg"
          />
          <SectionCardLives upCardTitle="Canais ao vivo que achamos que vai gostar" />
          <SectionCategories upCardTitle="que achamos que vai gostar" />
          <SectionWhenOff upCardTitle1="Enquanto" upCardTitle2="está offline" />
          <SectionCardLives upCardTitle="Canais relacionados aos assistidos anteriormente" />
          <SectionCardLives upCardTitle="Canais de entretenimento puro" />
        </div>
      </S.MainGrid>
    </>
  );
};

export default index;
