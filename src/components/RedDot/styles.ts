import styled from "styled-components"
import { propsType } from "./index"


export const RedDot = styled.div<propsType>`
    background-color: red;
    width: ${(props) => props.dotWidth === "live" ? "8px" : "15px"};
    height: ${(props) => props.dotHeight === "live" ? "8px" : "15px"};
    border-radius: 50%;
`

