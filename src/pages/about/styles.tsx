import styled from "styled-components";
import ItemWrapper from "../../helpers/ItemWrapper";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled(ItemWrapper)`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
`;

export const TextArea = styled.span`
  max-width: 600px;
  font-size: ${({ theme }) => theme.fontSizes.medium2};
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${({ theme }) => theme.colors.white};
  text-indent: 20px;
  text-align: justify;
  padding-bottom: 30px;
`;