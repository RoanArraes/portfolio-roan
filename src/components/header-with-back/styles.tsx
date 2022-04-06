import styled from "styled-components";
import ItemWrapper from "../../helpers/ItemWrapper";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ButtonBack = styled.button`
  height: 20px;
  align-self: flex-start;
  outline: none;
  background: transparent;
  border: 1px solid transparent;
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

`;
export const TitlePage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium4};
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 1px 5px ${({ theme }) => theme.colors.hover};
  cursor: default;

  @media screen and (max-width: 380px){
    font-size: ${({ theme }) => theme.fontSizes.medium3};
  }
`;

export const WrapperTitle = styled(ItemWrapper)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`;

export const WrapperButton = styled(ItemWrapper)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;