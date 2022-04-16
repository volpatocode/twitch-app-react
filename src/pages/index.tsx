import React from "react";
import CardGameWrapper from "../components/CardGameWrapper";

type propsType = {};

export default function Home({}: propsType) {
  return (
    <>
      <CardGameWrapper
      imgAlt="Grand Theft Auto V"
      imgWidth="cardGame"
      imgHeight="cardGame"
      imgSource="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg"
      linkHover="https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V" />
    </>
  );
}
