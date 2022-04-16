import React from "react";
import AvatarImage from "../AvatarImage";
import Badge from "../Badge";
import Card from "../Card";
import LiveInfo from "../LiveInfo";
import LiveTitles from "../LiveTitles";
import TripleDotIcon from "../TripleDotIcon";
import * as S from "./styles";

export type propsType = {
  avatarUrl: string;
  avatarWidth: string;
  avatarHeight: string;
  titleText: string;
  infoText: string;
  infoText2: string;
  badgeText: string;
  badgeVariant: "square" | "rounded";
  badgeBgColor: "grey" | "red";
  imgSource: string;
  imgAlt: string;
  imgHeight: "cardGame" | "cardLive" | "announcementLive";
  imgWidth: "cardGame" | "cardLive" | "announcementLive";
  linkHover: string;
};

const index = ({
  avatarUrl,
  avatarHeight,
  avatarWidth,
  titleText,
  infoText2,
  infoText,
  badgeText,
  badgeVariant,
  badgeBgColor,
  imgSource,
  imgAlt,
  imgHeight,
  imgWidth,
  linkHover
}: propsType) => {
  return (
    <S.CardLiveWrapper>
      <div className="liveImage">
        <Card
          imgSource={imgSource}
          imgAlt={imgAlt}
          imgHeight={imgHeight}
          imgWidth={imgWidth}
          linkHover={linkHover}
        />
      </div>
      <div className="grid">
        <div className="img">
          <AvatarImage
            avatarUrl={avatarUrl}
            avatarHeight={avatarHeight}
            avatarWidth={avatarWidth}
          />
        </div>
        <div className="content">
          <LiveTitles titleText={titleText} />
          <LiveInfo infoText={infoText} />
          <LiveInfo infoText={infoText2} />
          <div className="content__badges">
            <Badge badgeText={badgeText}
            badgeVariant={badgeVariant}
            badgeBgColor={badgeBgColor} /> 
          </div>
        </div>
        <div className="icon">
          <TripleDotIcon />
        </div>
      </div>
    </S.CardLiveWrapper>
  );
};

export default index;
