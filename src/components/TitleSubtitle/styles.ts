import styled from "styled-components"

export const TitleSubtitle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h1{
        font-size: 1.1rem;
        color: #f6f6f6;
        font-weight:bold;
        margin-bottom: 3px;
        &:hover{
            cursor: pointer;
            color: purple;
            transition: 50ms ease;
        }
    }

    h2{
        font-size: 1.05rem;
        color: #ccc;
        &:hover{
            cursor: pointer;
            color: purple;
            transition: 50ms ease;
        }
    }
    `

