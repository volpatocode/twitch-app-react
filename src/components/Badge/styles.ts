import styled from "styled-components"

export const Badge = styled.div`
    color:#f6f6f6;
    background: ${(props) => props.backgroundColor || "gray"};
    border-radius: ${(props) => (props.variant === "square" ? "3px" : "100px")};
    padding: 5px;
    text-align: center;
    width: fit-content;
    font-size: 0.8rem;
`