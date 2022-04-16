import React from "react";
import Icon from "../Icon";
import LiveStreamerInList from "../LiveStreamerInList";
import ShowMoreInList from "../ShowMoreInList";
import StreamerListTitle from "../StreamerListTitle";
import * as S from "./styles";

export type propsType = {
  listTitle1: string;
  listTitle2: string;
};

const index = ({ listTitle1, listTitle2 }: propsType) => {
  return (
    <>
      <S.StreamerList>
        <div className="firstHeaderStreamerList">
          <StreamerListTitle listTitle={listTitle1} />
          <Icon icon="showless" iconBg="none" />
        </div>
        <div className="streamerList">
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
        </div>
        <div className="secondHeaderStreamerList">
          <ShowMoreInList/>
          <StreamerListTitle listTitle={listTitle2} />
        </div>
        <div className="streamerList">
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
          <LiveStreamerInList />
        </div>
      </S.StreamerList>
    </>
  );
};

export default index;
