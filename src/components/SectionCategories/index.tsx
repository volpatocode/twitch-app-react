import React from "react";
import CardGameWrapper from "../CardGameWrapper";
import LinkAnchor from "../LinkAnchor";
import UpCardTitle from "../UpCardTitle";
import * as S from "./styles";

export type propsType = {
  upCardTitle: string;
};

const index = ({ upCardTitle }: propsType) => {
  return (
    <>
      <S.SectionCategories>
        <div className="sectionTitle">
          <LinkAnchor
            anchorLink="https://www.twitch.tv/directory"
            linkAnchorText=" Categorias"
          />
          <UpCardTitle upCardTitle={upCardTitle} />
        </div>
        <div className="cardLives">
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
          <CardGameWrapper
            imgAlt="Rust"
            imgHeight="cardGame"
            imgSource="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg"
            imgWidth="cardGame"
            linkHover="https://www.twitch.tv/directory/game/Rust"
            titleText="Rust"
            infoText="6,5 mil espectadores"
            badgeBgColor="grey"
            badgeText="Aventura"
            badgeVariant="rounded"
          />
        </div>
      </S.SectionCategories>
    </>
  );
};

export default index;
