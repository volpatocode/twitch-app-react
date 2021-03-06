import styled from "styled-components";
import { propsType } from "./index";

export const NavBar = styled.div<propsType>`
  background-color: #18181b;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const FlexLeft = styled.div<propsType>`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Flex = styled.div<propsType>`
  display: flex;
  align-items: center;
`;

export const FlexRight = styled.div<propsType>`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
