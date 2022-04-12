import styled from "styled-components";
import { propsType } from "./index";

export const LinkAnchor = styled.div<propsType>`
    a{
        font-size: 1.6rem;
        color:#a970ff;
        font-weight: 700;
    }

    a:hover{
        cursor: pointer;
        color:#9147ff;
        text-decoration: underline;
    }
   
`;
