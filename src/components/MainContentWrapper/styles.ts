import styled from "styled-components";

export const MainContentWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  padding: 30px;
  background: #0e0e10;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    opacity: 0.5;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 30%, 075);
    border-radius: 5px;
  }
`;
