import React from "react";
import AvatarImage from "../AvatarImage";
import Badge from "../Badge";
import LiveInfo from "../LiveInfo";
import LiveTitles from "../LiveTitles";
import TripleDotIcon from "../TripleDotIcon";
import * as S from "./styles";

export type propsType = {};

const index = ({}: propsType) => {
  return (
    <S.LiveInfoWrapper>
      <div className="grid">
        <div className="img">
          <AvatarImage
            avatarUrl="https://static-cdn.jtvnw.net/jtv_user_pictures/b572fe0a-3fab-4a0c-bc7e-c10ff637fdb5-profile_image-50x50.png"
            avatarHeight="40px"
            avatarWidth="40px"
          />
        </div>
        <div className="content">
          <LiveTitles titleText="live estroaaaaaaaaamente legal sei la oq escrev" />
          <LiveInfo infoText="calangao" />
          <LiveInfo infoText="Só na conversa" />
          <div className="content__badges">
            <Badge text="Portugûes" />
          </div>
        </div>
        <div className="icon">
          <TripleDotIcon />
        </div>
      </div>
    </S.LiveInfoWrapper>
  );
};

export default index;
