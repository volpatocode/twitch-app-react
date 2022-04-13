import styled from "styled-components"
import { propsType } from "./index"


export const UserStatus = styled.div<propsType>`
    background-color: ${(props) => {switch(props.bgColor)
    {
        case "online":
            return "green"
        case "offline":
            return "grey"
        case "away":
            return "orange"
        case "busy":
            return "red"
            default: "grey"
    }
}};

    width: 8px;
    height: 8px;
    border-radius: 50%;


`