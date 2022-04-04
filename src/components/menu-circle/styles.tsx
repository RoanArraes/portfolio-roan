import styled from "styled-components";
import ItemWrapper from "../../helpers/ItemWrapper";

export const MenuArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 540px){
    .menu-circle__wrapper-label-left {
      display: none;
    }
    
    .menu-circle__wrapper-label-rigth {
      display: none;
    }

    .wrapper-top-bottom__label-top-rotated {
      display: none;
    }

    .wrapper-top-bottom__label-bottom-rotated {
      display: none;
    }

    .wrapper-top-bottom__wrapper-menu-vertical {
      display: flex;
    }
  }

  @media screen and (max-width: 220px){
    .wrapper-top-bottom__external-circle {
      width: 100px;
      height: 100px;
    }
  }

  .wrapper__label-link {
    a {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      cursor: pointer;
      text-shadow: 1px 1px ${({ theme }) => theme.colors.black};
      transition: color 100ms linear;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fonts[0]};

      :hover {
        transition: color 100ms linear;
        color: ${({ theme }) => theme.colors.hover};
      }
    }
  }
`;

export const ExternalCircle = styled(ItemWrapper)`
  width: 200px;
  height: 200px;
  background-color: transparent;
  border: 10px solid ${({ theme }) => theme.colors.menuCircle};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 
    10px -10px 30px ${({ theme }) => theme.colors.rgba.white010},
    10px 10px 30px ${({ theme }) => theme.colors.rgba.white010},
    -10px 10px 30px ${({ theme }) => theme.colors.rgba.white010},
    -10px -10px 30px ${({ theme }) => theme.colors.rgba.white010}
  ;

  span:nth-child(1) {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.85;
    box-shadow: 
      10px -10px 30px ${({ theme }) => theme.colors.rgba.black010},
      10px 10px 30px ${({ theme }) => theme.colors.rgba.black010},
      -10px 10px 30px ${({ theme }) => theme.colors.rgba.black010},
      -10px -10px 30px ${({ theme }) => theme.colors.rgba.black010}
    ;
  }
`;

export const Wrapper = styled(ItemWrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const WrapperCenter = styled(ItemWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const WrapperMenuVertical = styled(ItemWrapper)`
  margin-top: 20px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;