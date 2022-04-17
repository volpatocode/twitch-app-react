import React from "react";
import SectionWhenOff from "../components/SectionWhenOff";

type propsType = {};

export default function Home({}: propsType) {
  return (
    <>
      <SectionWhenOff upCardTitle1="Enquanto"
      upCardTitle2="está offline"></SectionWhenOff>
    </>
  );
}
