import React from "react";
import CardLiveWrapper from "../CardLiveWrapper";
import ShowMore from "../ShowMore";
import UpCardTitle from "../UpCardTitle";
import { SectionContent } from "./styles";
import { SectionCategories } from "./styles";
import { SectionWhenOff } from "./styles";
import CardGameWrapper from "../CardGameWrapper";
import LinkAnchor from "../LinkAnchor";

import CategoryButton from "../CategoryButton";

export type propsType = {
  upCardTitle?: string;
  section: "lives" | "categories" | "whenOff";
  upCardTitle1?: string;
  upCardTitle2?: string;
};

const index = ({
  upCardTitle,
  upCardTitle1,
  upCardTitle2,
  section,
}: propsType) => {
  if (section === "lives") {
    return (
      <>
        <SectionContent>
          <div className="sectionTitle">
            <UpCardTitle upCardTitle={upCardTitle} />
          </div>
          <div className="cardLives">
            <CardLiveWrapper
              avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
              linkHover="#"
              badgeSpecBg="transparent"
              badgeSpecText="33,5 mil espectadores"
              liveBadgeBgColor="red"
              liveBadgeText="AO VIVO"
              liveBadgeVariant="square"
            />
            <CardLiveWrapper
              avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
              linkHover="#"
              badgeSpecBg="transparent"
              badgeSpecText="33,5 mil espectadores"
              liveBadgeBgColor="red"
              liveBadgeText="AO VIVO"
              liveBadgeVariant="square"
            />
            <CardLiveWrapper
              avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
              linkHover="#"
              badgeSpecBg="transparent"
              badgeSpecText="33,5 mil espectadores"
              liveBadgeBgColor="red"
              liveBadgeText="AO VIVO"
              liveBadgeVariant="square"
            />
            <CardLiveWrapper
              avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
              linkHover="#"
              badgeSpecBg="transparent"
              badgeSpecText="33,5 mil espectadores"
              liveBadgeBgColor="red"
              liveBadgeText="AO VIVO"
              liveBadgeVariant="square"
            />
            <CardLiveWrapper
              avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
              linkHover="#"
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
        </SectionContent>
      </>
    );
  }

  if (section === "categories") {
    return (
      <SectionCategories>
        <div className="sectionTitle">
          <LinkAnchor
            anchorLink="https://www.twitch.tv/directory"
            linkAnchorText=" Categorias"
          />
          <UpCardTitle upCardTitle={upCardTitle} />
        </div>
        <div className="cardLives">
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />

          <CardGameWrapper
            imgAlt="Só na conversa"
            imgHeight="cardGame"
            imgSource="https://images.squarespace-cdn.com/content/v1/5b98455d5417fcd50c23a96d/1539550976006-WFMXLXMA84G6YS2G3ULP/capa+ROXOS.jpg?format=2500w"
            imgWidth="cardGame"
            linkHover="#"
            titleText="Só na conversa"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
        </div>
      </SectionCategories>
    );
  }
  if (section === "whenOff") {
    return (
      <SectionWhenOff>
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
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
            linkHover="#"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
            linkHover="#"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
            linkHover="#"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
            linkHover="#"
            badgeSpecBg="transparent"
            badgeSpecText="33,5 mil espectadores"
            liveBadgeBgColor="red"
            liveBadgeText="AO VIVO"
            liveBadgeVariant="square"
          />
          <CardLiveWrapper
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
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
            linkHover="#"
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
      </SectionWhenOff>
    );
  }
};

export default index;
