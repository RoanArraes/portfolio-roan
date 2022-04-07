import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.extreme};
  background-color: ${({ theme }) => theme.colors.background}
`;