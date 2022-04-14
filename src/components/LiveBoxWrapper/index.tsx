import React from "react";
import CardLive from "../CardLive"
import LiveInfoWrapper from "../LiveInfoWrapper"
import * as S from "./styles";


export type propsType = {};

const index = ({}: propsType) => {

  return (
    
    
      <S.LiveBoxWrapper>  
        <CardLive/>
        <LiveInfoWrapper/>
      </S.LiveBoxWrapper>
    
  );
};

export default index;
