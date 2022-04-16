import styled from "styled-components"

export const BadgeSpec = styled.div`
    color:#f6f6f6;
    background: ${props => (props.badgeSpecBg === "transparent" ? 'rgba(0,0,0,0.6)' : 'none')};
    padding:2px;
    text-align: center;
    width: fit-content;
    font-size: 1.15rem;
`