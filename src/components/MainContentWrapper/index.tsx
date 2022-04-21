import React from "react";
import AnnouncementLiveFull from "../AnnouncementLiveFull";
import SectionContent from "../SectionContent";
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
          announcementLiveLink="#"
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
          announcementLiveSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
        />
        <SectionContent
          section="lives"
          upCardTitle="Canais ao vivo que achamos que vai gostar"
        />
        <SectionContent
          section="categories"
          upCardTitle="que achamos que vai gostar"
        />
        <SectionContent
          section="whenOff"
          upCardTitle1="Enquanto"
          upCardTitle2="está offline"
        />
        <SectionContent
          section="lives"
          upCardTitle="Canais relacionados aos assistidos anteriormente"
        />
        <SectionContent
          section="lives"
          upCardTitle="Canais de entretenimento puro"
        />
      </S.MainContentWrapper>
    </>
  );
};

export default index;
