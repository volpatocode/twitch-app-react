import styled from "styled-components";
import { propsType } from "./index";

export const LiveInfoWrapper = styled.div<propsType>`
    background-color: red;
    padding: 3px 0px 3px 0px;
    width: 300px;
    height: 100px;

    .grid{
        display: grid;
        grid-template-columns: 0.2fr 1fr 0.3fr;
        grid-template-rows: 1fr;
        grid-template-areas: "img" "content" "icon";
    }

    .img{
        grid-area: "img";
        padding: 3px;
        
        
    }

    .content{
        grid-area: "content";
        padding: 3px;
        gap: 5px;
        display: flex;
        flex-direction: column;
        
    }

    .icon{
        grid-area: "icon";
        padding: 1px;
        justify-self: flex-end;
       
}

`
