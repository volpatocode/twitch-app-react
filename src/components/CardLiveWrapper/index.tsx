import React from "react";
import AvatarImage from "../AvatarImage";
import Badge from "../Badge";
import BadgeSpec from "../BadgeSpec";
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
  liveBadgeText: string;
  liveBadgeVariant: "square" | "rounded";
  liveBadgeBgColor: "grey" | "red";
  imgSource: string;
  imgAlt: string;
  imgHeight: "cardGame" | "cardLive" | "announcementLive";
  imgWidth: "cardGame" | "cardLive" | "announcementLive";
  linkHover: string;
  badgeSpecText: string;
  badgeSpecBg: "transparent" | "none";
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
  linkHover,
  badgeSpecBg,
  badgeSpecText,
  liveBadgeText,
  liveBadgeVariant,
  liveBadgeBgColor,
}: propsType) => {
  return (
    <S.CardLiveWrapper>
      <div className="liveImage">
        <div className="badgeSpec">
          <BadgeSpec badgeSpecBg={badgeSpecBg} badgeSpecText={badgeSpecText} />
        </div>
        <div className="liveBadge">
          <Badge
            badgeBgColor={liveBadgeBgColor}
            badgeText={liveBadgeText}
            badgeVariant={liveBadgeVariant}
          />
        </div>
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
            <Badge
              badgeText={badgeText}
              badgeVariant={badgeVariant}
              badgeBgColor={badgeBgColor}
            />
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
