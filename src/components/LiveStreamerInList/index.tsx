import React from "react";
import AvatarImage from "../AvatarImage";
import LiveInfo from "../LiveInfo";
import LiveTitles from "../LiveTitles";
import RedDot from "../RedDot";
import ViwersAtmList from "../ViweresAtmList";
import * as S from "./styles";

export type propsType = {
  avatarHeight: string;
  avatarUrl: string;
  avatarWidth: string;
  titleText: string;
  dotHeight: "live" | "notification";
  dotWidth: "live" | "notification";
  infoText: string;
  viwers: string;
};

const index = ({
  avatarHeight,
  avatarUrl,
  avatarWidth,
  titleText,
  dotHeight,
  dotWidth,
  infoText,
  viwers,
}: propsType) => {
  return (
    <>
      <S.LiveStreamerInList>
        <div className="grid">
          <div className="image">
            <AvatarImage
              avatarHeight={avatarHeight}
              avatarUrl={avatarUrl}
              avatarWidth={avatarWidth}
            />
          </div>
          <div className="info">
            <LiveTitles titleText={titleText} />
            <LiveInfo infoText={infoText} />
          </div>
          <div className="spectators">
            <RedDot dotHeight={dotHeight} dotWidth={dotWidth} />
            <ViwersAtmList viwers={viwers} />
          </div>
        </div>
      </S.LiveStreamerInList>
    </>
  );
};

export default index;
