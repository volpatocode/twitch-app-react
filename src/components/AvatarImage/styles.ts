import styled from "styled-components"

export const AvatarImage = styled.div`
    img{
    border-radius: 100%;
    width: ${(props) => props.avatarWidth || "60px"};
    height: ${(props) => props.avatarHeight || "60px"}; 
    cursor: pointer;
    }

    img:nth-child(2){
    display: ${(props) => (props.ShowAvatarStatus === "show" ? " " : "none")};
    }
    
`