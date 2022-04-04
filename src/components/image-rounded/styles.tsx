import styled from 'styled-components';
import UserImage from '../../assets/images/roan.jpg'

export const Image = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: url(${UserImage});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;