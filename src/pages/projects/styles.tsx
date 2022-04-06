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
`;

export const Wrapper = styled(ItemWrapper)`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  box-sizing: border-box;
`;