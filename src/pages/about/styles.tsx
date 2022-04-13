import styled from "styled-components";
import ItemWrapper from "../../helpers/ItemWrapper";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled(ItemWrapper)`
  max-width: 600px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const TextArea = styled.span`
  max-width: 600px;
  font-size: ${({ theme }) => theme.fontSizes.medium1};
  font-family: ${({ theme }) => theme.fonts[1]};
  color: ${({ theme }) => theme.colors.white};
  text-indent: 20px;
  text-align: justify;
  padding-bottom: 30px;
`;

export const WrapperStacks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StacksArea = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const TitleStack = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium1};
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-align: center;
`;

export const ListStacks = styled.ul`
  li {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-family: ${({ theme }) => theme.fonts[1]};
    color: ${({ theme }) => theme.colors.white};
    max-width: 150px;
  }
`;