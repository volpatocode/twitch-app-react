import React from "react";
import AnnouncementLiveWrapper from "../AnnouncementLiveWrapper";
import Icon from "../Icon";
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
  direction1?: "left" | "right";
  icon1: "arrow" | "bits" | "chest" | "prime" | "whisper";
  direction2?: "left" | "right";
  icon2: "arrow" | "bits" | "chest" | "prime" | "whisper";
  iconBg1: "black" | "none";
  iconBg2: "black" | "none";
};

const index = ({
  direction1,
  icon1,
  icon2,
  direction2,
  iconBg1,
  iconBg2,
  ...props
}: propsType) => {
  return (
    <>
      <S.AnnouncementLiveFull>
        <div className="grid">
          <div className="left">
            <Icon iconBg={iconBg1} icon={icon1} direction={direction1} />
          </div>
          <div className="middle">
            <AnnouncementLiveWrapper {...props}></AnnouncementLiveWrapper>
          </div>
          <div className="right">
            <Icon iconBg={iconBg2} icon={icon2} direction={direction2} />
          </div>
        </div>
      </S.AnnouncementLiveFull>
    </>
  );
};

export default index;
