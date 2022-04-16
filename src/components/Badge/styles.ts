import styled from "styled-components"

export const Badge = styled.div`
    color:#f6f6f6;
    background: ${(props) => props.badgeBgColor === "grey" ? "#323234" : "#dc3545"};
    border-radius: ${(props) => (props.badgeVariant === "square" ? "3px" : "100px")};
    padding: 5px 10px;
    text-align: center;
    width: fit-content;
    font-size: 1.1rem;
    cursor:pointer;

    :hover {
      background: hsla(0, 0%, 40%, 075);
    }
`