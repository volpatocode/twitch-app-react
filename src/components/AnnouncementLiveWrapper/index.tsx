import React from "react";
import AnnouncementLive from "../AnnouncementLive";
import AnnouncementLiveGame from "../AnnouncementLiveGame";
import AnnouncementLiveName from "../AnnouncementLiveName";
import AvatarImage from "../AvatarImage";
import Badge from "../Badge";
import BadgeSpec from "../BadgeSpec";
import * as S from "./styles";

export type propsType = {
  announcementLiveWidth: "cardGame" | "cardLive" | "announcementLive";
  announcementLiveHeight: "cardGame" | "cardLive" | "announcementLive";
  announcementLiveSource: string;
  announcementLiveAlt: string;
  announcementLiveLink: string;
  avatarUrl: string;
  avatarWidth: string;
  avatarHeight: string;
  liveNameText: string;
  liveGameText: string;
  badgeSpecText: string;
  badgeSpecBg: "transparent" | "none";
  badgeVariant: "square" | "rounded";
  badgeBgColor: "grey" | "red";
  badgeText: string;
};

const index = ({
  announcementLiveWidth,
  announcementLiveHeight,
  announcementLiveSource,
  announcementLiveAlt,
  announcementLiveLink,
  avatarUrl,
  avatarWidth,
  avatarHeight,
  liveNameText,
  liveGameText,
  badgeSpecText,
  badgeSpecBg,
  badgeVariant,
  badgeBgColor,
  badgeText,
}: propsType) => {
  return (
    <>
      <S.AnnouncementLiveWrapper>
        <div className="gridAnnouncementLive">
          <div className="gridLeft">
            <AnnouncementLive
              announcementLiveWidth={announcementLiveWidth}
              announcementLiveHeight={announcementLiveHeight}
              announcementLiveAlt={announcementLiveAlt}
              announcementLiveLink={announcementLiveLink}
              announcementLiveSource={announcementLiveSource}
            />
          </div>

          <div className="gridRight">
            <AvatarImage
              avatarUrl={avatarUrl}
              avatarHeight={avatarHeight}
              avatarWidth={avatarWidth}
            />
            <AnnouncementLiveName liveNameText={liveNameText} />
            <AnnouncementLiveGame liveGameText={liveGameText} />
            <BadgeSpec
              badgeSpecText={badgeSpecText}
              badgeSpecBg={badgeSpecBg}
            />
            <Badge
              badgeVariant={badgeVariant}
              badgeBgColor={badgeBgColor}
              badgeText={badgeText}
            />
          </div>
        </div>
      </S.AnnouncementLiveWrapper>
    </>
  );
};

export default index;
