import styled from "styled-components";

type ContainerProps = {
  rotation?: string,
  margin?: string
}

type IconProps = {
  img: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  box-sizing: border-box;
  transform: rotate(${({ rotation }) => rotation ? rotation+'deg' : 0});
  margin: ${({ margin }) => margin && margin};

  a {
    text-decoration:none;
    white-space: nowrap;
  }
`;

export const Icon = styled.span<IconProps>`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-image: url(${({img}) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;