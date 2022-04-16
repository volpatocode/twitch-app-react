import React from "react";
import AnnouncementLiveWrapper from "../components/AnnouncementLiveWrapper";

type propsType = {};

export default function Home({}: propsType) {
  return (
    <>
      <AnnouncementLiveWrapper
        announcementLiveAlt="Live Amouranth"
        announcementLiveHeight="announcementLive"
        announcementLiveWidth="announcementLive"
        announcementLiveLink="https://www.twitch.tv/amouranth"
        announcementLiveSource="https://static-cdn.jtvnw.net/previews-ttv/live_user_amouranth-440x248.jpg"
        liveBadgeBgColor="red"
        liveBadgeText="AO VIVO"
        liveBadgeVariant="square"
        avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/f4ffc169-f5ed-42a0-b9b8-a0e18dc43263-profile_image-70x70.png"
        avatarHeight="45px"
        avatarWidth="45px"
        liveGameText="Só na conversa"
        liveNameText="Amouranth"
        badgeSpecText="6,5 mil espectadores"
        badgeSpecBg="none"
        badgeBgColor="grey"
        badgeText="Inglês"
        badgeVariant="rounded"
        announcementLiveParagraphText="Yo. I'm the weird girl that sits in a hot tub sometimes and flails around in pigeon/horse masks. My job is pretty awesome."
      />
    </>
  );
}
