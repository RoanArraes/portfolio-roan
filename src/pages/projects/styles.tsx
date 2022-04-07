import styled from "styled-components";
import ItemWrapper from "../../helpers/ItemWrapper";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Wrapper = styled(ItemWrapper)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium1};
  font-family: ${({ theme }) => theme.fonts[1]};
`;