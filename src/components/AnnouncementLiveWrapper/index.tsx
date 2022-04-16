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
  announcementLiveParagraphText: string;
  liveBadgeText: string;
  liveBadgeVariant: "square" | "rounded";
  liveBadgeBgColor: "grey" | "red";
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
  liveBadgeText,
  liveBadgeVariant,
  liveBadgeBgColor,
  badgeText,
  announcementLiveParagraphText,
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
            <div className="liveBadge">
              <Badge
                badgeText={liveBadgeText}
                badgeVariant={liveBadgeVariant}
                badgeBgColor={liveBadgeBgColor}
              />
            </div>
          </div>

          <div className="gridRight">
            <div className="rightFirstPart">
              <div className="image">
                <AvatarImage
                  avatarUrl={avatarUrl}
                  avatarHeight={avatarHeight}
                  avatarWidth={avatarWidth}
                />
              </div>
              <div className="info">
                <AnnouncementLiveName liveNameText={liveNameText} />
                <AnnouncementLiveGame liveGameText={liveGameText} />
                <BadgeSpec
                  badgeSpecText={badgeSpecText}
                  badgeSpecBg={badgeSpecBg}
                />
              </div>
            </div>

            <div className="rightSecondPart">
              <div className="badges">
                <Badge
                  badgeVariant={badgeVariant}
                  badgeBgColor={badgeBgColor}
                  badgeText={badgeText}
                />
              </div>
              <S.AnnouncementLiveParagraph>
                {announcementLiveParagraphText}
              </S.AnnouncementLiveParagraph>
            </div>
          </div>
        </div>
      </S.AnnouncementLiveWrapper>
    </>
  );
};

export default index;
