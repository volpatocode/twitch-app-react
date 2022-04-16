import React from 'react'
import * as S from "./styles"

type propsType = {
  badgeSpecText: string;
  badgeSpecBg: "transparent" | "none";
}

 const index = (props: propsType) => {
  const {badgeSpecText, badgeSpecBg} = props;
  return (
    
      <>
        <S.BadgeSpec {...props}>{badgeSpecText}</S.BadgeSpec>
      </>

  );
}

export default index;
