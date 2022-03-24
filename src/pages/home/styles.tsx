import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.extreme}
`;