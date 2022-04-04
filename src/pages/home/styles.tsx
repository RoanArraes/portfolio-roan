import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.extreme}
`;