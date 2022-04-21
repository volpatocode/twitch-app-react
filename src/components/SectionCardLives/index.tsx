import React from "react";
import CardLiveWrapper from "../CardLiveWrapper";
import ShowMore from "../ShowMore";
import UpCardTitle from "../UpCardTitle";
import * as S from "./styles";

export type propsType = {
  upCardTitle: string;
};

const index = ({ upCardTitle, sectionCardLives, sectionCategories, sectionWhenOff }: propsType) => {
  return (
    <>
      <S.SectionCardLives>
        <div className="sectionTitle">
          <UpCardTitle upCardTitle={upCardTitle} />
        </div>
        <div className="cardLives">
          <CardLiveWrapper
            avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-50x50.png"
            avatarHeight="40px"
            avatarWidth="40px"
            titleText="O BRASILEIRÃO CHEGOU! AMANHA TEM SAFADEZA"
            infoText="casimito"
            infoText2="Só na conversa"
            badgeText="Entretenimento"
            badgeVariant="rounded"
            badgeBgColor="grey"
            imgSource="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            imgAlt="Live do rei do entretenimento"
            imgHeight="cardLive"
            imgWidth="cardLive"
            linkHover="https://www.twitch.tv/casimito"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-50x50.png"
            avatarHeight="40px"
            avatarWidth="40px"
            titleText="O BRASILEIRÃO CHEGOU! AMANHA TEM SAFADEZA"
            infoText="casimito"
            infoText2="Só na conversa"
            badgeText="Entretenimento"
            badgeVariant="rounded"
            badgeBgColor="grey"
            imgSource="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            imgAlt="Live do rei do entretenimento"
            imgHeight="cardLive"
            imgWidth="cardLive"
            linkHover="https://www.twitch.tv/casimito"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-50x50.png"
            avatarHeight="40px"
            avatarWidth="40px"
            titleText="O BRASILEIRÃO CHEGOU! AMANHA TEM SAFADEZA"
            infoText="casimito"
            infoText2="Só na conversa"
            badgeText="Entretenimento"
            badgeVariant="rounded"
            badgeBgColor="grey"
            imgSource="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            imgAlt="Live do rei do entretenimento"
            imgHeight="cardLive"
            imgWidth="cardLive"
            linkHover="https://www.twitch.tv/casimito"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-50x50.png"
            avatarHeight="40px"
            avatarWidth="40px"
            titleText="O BRASILEIRÃO CHEGOU! AMANHA TEM SAFADEZA"
            infoText="casimito"
            infoText2="Só na conversa"
            badgeText="Entretenimento"
            badgeVariant="rounded"
            badgeBgColor="grey"
            imgSource="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            imgAlt="Live do rei do entretenimento"
            imgHeight="cardLive"
            imgWidth="cardLive"
            linkHover="https://www.twitch.tv/casimito"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-50x50.png"
            avatarHeight="40px"
            avatarWidth="40px"
            titleText="O BRASILEIRÃO CHEGOU! AMANHA TEM SAFADEZA"
            infoText="casimito"
            infoText2="Só na conversa"
            badgeText="Entretenimento"
            badgeVariant="rounded"
            badgeBgColor="grey"
            imgSource="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            imgAlt="Live do rei do entretenimento"
            imgHeight="cardLive"
            imgWidth="cardLive"
            linkHover="https://www.twitch.tv/casimito"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
        </div>
        <div className="showMore">
          <div className="border1"></div>
          <ShowMore />
          <div className="border2"></div>
        </div>
      </S.SectionCardLives>
    </>
  );
};

export default index;
