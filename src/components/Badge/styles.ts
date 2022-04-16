import styled from "styled-components"

export const Badge = styled.div`
    color:#f6f6f6;
    background: ${(props) => props.badgeBgColor === "grey" ? "#323234" : "#EB0400"};
    border-radius: ${(props) => (props.badgeVariant === "square" ? "3px" : "100px")};
    padding: ${(props) => (props.badgeVariant === "square" ? "3px 7px" : "5px 10px")};
    text-align: center;
    width: fit-content;
    font-size: ${(props) => (props.badgeVariant === "square" ? "1.2rem" : "1.1rem")};
    cursor:pointer;
    font-weight: 700;

    :hover {
      background: ${(props) => (props.badgeVariant === "square" ? "" : "hsla(0, 0%, 40%, 075)")};
    }
`

