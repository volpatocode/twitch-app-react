import React from "react";
import FriendsSearchBar from "../FriendsSearchBar";
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
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="Só na conversa"
            titleText="Jinnytty"
            viwers="5,4 mil"
          />
        </div>
        <div className="secondHeaderStreamerList">
          <ShowMoreInList />
          <StreamerListTitle listTitle={listTitle2} />
        </div>
        <div className="streamerList">
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="League of Legends"
            titleText="Jukes"
            viwers="11,1 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="League of Legends"
            titleText="Jukes"
            viwers="11,1 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="League of Legends"
            titleText="Jukes"
            viwers="11,1 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="League of Legends"
            titleText="Jukes"
            viwers="11,1 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="League of Legends"
            titleText="Jukes"
            viwers="11,1 mil"
          />
          <LiveStreamerInList
            avatarUrl="https://p4.wallpaperbetter.com/wallpaper/463/484/1000/technology-twitch-wallpaper-thumb.jpg"
            avatarWidth="30px"
            avatarHeight="30px"
            dotHeight="live"
            dotWidth="live"
            infoText="League of Legends"
            titleText="Jukes"
            viwers="11,1 mil"
          />
        </div>
        <div className="friendsSearchBar">
          <FriendsSearchBar placeholder="Adicionar amigos" />
        </div>
      </S.StreamerList>
    </>
  );
};

export default index;
