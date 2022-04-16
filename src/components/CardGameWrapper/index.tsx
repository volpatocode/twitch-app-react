import React from "react";
import Card from "../Card";
import LiveTitles from "../LiveTitles";
import TripleDotIcon from "../TripleDotIcon";
import Badge from "../Badge";
import LiveInfo from "../LiveInfo";
import * as S from "./styles";

export type propsType = {
  imgWidth: "cardGame" | "cardLive" | "announcementLive";
  imgHeight: "cardGame" | "cardLive" | "announcementLive";
  imgSource: string;
  imgAlt: string;
  linkHover: string;
  titleText: string;
  infoText: string;
  badgeText: string;
  badgeBgColor: "grey" | "red";
  badgeVariant: "square" | "rounded";
};

const index = ({
  imgWidth,
  imgHeight,
  imgSource,
  imgAlt,
  linkHover,
  titleText,
  infoText,
  badgeText,
  badgeBgColor,
  badgeVariant,
}: propsType) => {
  return (
    <S.CardGameWrapper>
      <Card
        imgAlt={imgAlt}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        imgSource={imgSource}
        linkHover={linkHover}
      />

      <div className="grid">
        <div className="titleAndInfo">
          <LiveTitles titleText={titleText} />
          <LiveInfo infoText={infoText} />
        </div>
        <div className="tripledot">
          <TripleDotIcon />
        </div>
        <div className="badges">
          <Badge
            badgeText={badgeText}
            badgeBgColor={badgeBgColor}
            badgeVariant={badgeVariant}
          />
        </div>
      </div>
    </S.CardGameWrapper>
  );
};

export default index;
