import React from "react";
import CardLive from "../Card";
import * as S from "./styles";

export type propsType = {
  announcementLiveWidth: "cardGame" | "cardLive" | "announcementLive";
  announcementLiveHeight: "cardGame" | "cardLive" | "announcementLive";
  announcementLiveSource: string;
  announcementLiveAlt: string;
  announcementLiveLink: string;
};

const index = ({
  announcementLiveWidth,
  announcementLiveHeight,
  announcementLiveSource,
  announcementLiveAlt,
  announcementLiveLink,
}: propsType) => {
  return (
    <>
      <S.AnnouncementLive>
        <CardLive
          imgWidth={announcementLiveWidth}
          imgHeight={announcementLiveHeight}
          imgSource={announcementLiveSource}
          imgAlt={announcementLiveAlt}
          linkHover={announcementLiveLink}
        />
        <div className="info"></div>
      </S.AnnouncementLive>
    </>
  );
};

export default index;
