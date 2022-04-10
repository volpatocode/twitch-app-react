import styled from "styled-components"

export const AvatarImage = styled.div`
    border-radius: 100%;
    img{
        width: 100%;
    }
    width: ${(props) => props.avatarWidth || "60px"};
    height: ${(props) => props.avatarHeight || "60px"};
`