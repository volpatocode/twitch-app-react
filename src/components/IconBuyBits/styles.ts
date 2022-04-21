import styled from "styled-components";
import { propsType } from "./index";

export const IconBuyBits = styled.div<propsType>`
  background-color: #3a3a3d;
  border-radius: 5px;
  padding: 4px 8px;
  display: flex;
  column-gap: 5px;
  align-items: center;
  color: white;
  font-size: 1.9rem;
  font-weight: 600;
  cursor: pointer;

  :hover{
    background: hsla(0, 0%, 30%, 075);
  }
`;
