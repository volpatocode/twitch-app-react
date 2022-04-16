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
  icon1: "arrow" | "bits" | "buybits" | "chest" | "prime" | "whisper";
  direction2?: "left" | "right";
  icon2: "arrow" | "bits" | "buybits" | "chest" | "prime" | "whisper";
};

const index = ({
  direction1,
  icon1,
  icon2,
  direction2,
  ...props
}: propsType) => {
  return (
    <>
      <S.AnnouncementLiveFull>
        <div className="grid">
          <div className="left">
            <Icon icon={icon1} direction={direction1} />
          </div>
          <div className="middle">
            <AnnouncementLiveWrapper {...props}></AnnouncementLiveWrapper>
          </div>
          <div className="right">
            <Icon icon={icon2} direction={direction2} />
          </div>
        </div>
      </S.AnnouncementLiveFull>
    </>
  );
};

export default index;
