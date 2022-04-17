import React from "react";
import CardLiveWrapper from "../CardLiveWrapper";
import CategoryButton from "../CategoryButton";
import LinkAnchor from "../LinkAnchor";
import UpCardTitle from "../UpCardTitle";
import ShowMore from "../ShowMore";
import * as S from "./styles";

export type propsType = {
  upCardTitle1: string;
  upCardTitle2: string;
};

const index = ({ upCardTitle1, upCardTitle2 }: propsType) => {
  return (
    <>
      <S.SectionWhenOff>
        <div className="categoriesIcons">
          <CategoryButton
            buttonImgLink="https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg"
            buttonText="Jogos"
            buttonImgDescription=""
          />
          <CategoryButton
            buttonImgLink="https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg"
            buttonText="Vida Real"
            buttonImgDescription=""
          />
          <CategoryButton
            buttonImgLink="https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg"
            buttonText="Música"
            buttonImgDescription=""
          />
          <CategoryButton
            buttonImgLink="https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg"
            buttonText="Esports"
            buttonImgDescription=""
          />
          <CategoryButton
            buttonImgLink="https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg"
            buttonText="Creative"
            buttonImgDescription=""
          />
        </div>
        <div className="sectionTitle">
          <UpCardTitle upCardTitle={upCardTitle1} />
          <LinkAnchor
            linkAnchorText="Casimito"
            anchorLink="https://www.twitch.tv/casimito"
          />
          <UpCardTitle upCardTitle={upCardTitle2} />
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
            imgSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_casimito-440x248.jpg"
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
            imgSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_casimito-440x248.jpg"
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
            imgSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_casimito-440x248.jpg"
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
            imgSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_casimito-440x248.jpg"
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
            imgSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_casimito-440x248.jpg"
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
      </S.SectionWhenOff>
    </>
  );
};

export default index;
