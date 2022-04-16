import React from "react";
import * as S from "../CardLive/styles";

export type propsType = {
  imgWidth: "cardGame" | "cardLive" | "announcementLive";
  imgHeight: "cardGame" | "cardLive" | "announcementLive";
  imgSource: string;
  imgAlt: string;
  linkHover: string;
};

const index = (props: propsType) => {
  const { imgSource, imgAlt, imgHeight, imgWidth, linkHover } = props;

  return (
    <>
      <S.CardLive {...props}>
        <a href={linkHover}>
          <img
            src={imgSource}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          ></img>
        </a>
      </S.CardLive>
    </>
  );
};

export default index;
