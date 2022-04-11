import styled from "styled-components"

export const CardLive = styled.div`


img{
    max-width: fit-content;
    width:${(props) => props.imgWidth === "horizontal" ? "200px" : "100px"};
    height:${(props) => props.imgHeight === "horizontal"? "200px" : "100px"};
}

a{
    cursor: pointer;
}

img:hover{
    top: -5px;
    right: -5px;
    position: relative;
}

div{
    background-color:#772ce8;
    width: 100%;
    height: 100%;
    max-width: fit-content;
    max-height: fit-content;
} 
`;
