import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ItemWrapper from "../../helpers/ItemWrapper";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonBack = styled(NavLink)`
  width: 60px;
  height: 50px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.rgba.white010};
  border-radius: 10px;
  text-decoration:none;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;

  span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.fonts[0]};
    font-size: ${({ theme }) => theme.fontSizes.medium2};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.hover};
    span {
      color: ${({ theme }) => theme.colors.hover};
    }
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