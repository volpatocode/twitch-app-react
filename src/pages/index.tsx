import React from "react";
import StreamerList from "../components/StreamerList"

type propsType = {};

export default function Home({}: propsType) {
  return (
    <>

      <StreamerList
      listTitle1="Canais seguidos"
      listTitle2="Canais recomendados"/>
    </>
  );
}
