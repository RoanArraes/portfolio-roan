import styled from "styled-components";
import ItemWrapper from "../../../../helpers/ItemWrapper";

type Props = {
  src: string,
  //onError: boolean
}

export const Container = styled.div`
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.rgba.white005};
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 
    1px -1px 10px ${({ theme }) => theme.colors.rgba.white005},
    1px 1px 10px ${({ theme }) => theme.colors.rgba.white005},
    -1px 1px 10px ${({ theme }) => theme.colors.rgba.white005},
    -1px -1px 10px ${({ theme }) => theme.colors.rgba.white005}
  ;
  transition: border 700ms, height 500ms;
  cursor: default;

  :hover {
    transition: border 700ms, height 500ms;
    border: 1px solid ${({ theme }) => theme.colors.hover};
    height: 600px;

    .card-project__text-area {
      transition: max-height 600ms;
      max-height: 200px;
    }
    .card-project__image-area {
      height: 300px;
    }

  }
`;

export const ImageArea = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 500ms;
`;

export const Image = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 
    1px -1px 10px ${({ theme }) => theme.colors.rgba.black010},
    1px 1px 10px ${({ theme }) => theme.colors.rgba.black010},
    -1px 1px 10px ${({ theme }) => theme.colors.rgba.black010},
    -1px -1px 10px ${({ theme }) => theme.colors.rgba.black010}
  ;
`;

export const WrapperBottom = styled(ItemWrapper)`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding: 10px;
`;

export const Label = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.medium1};
  color: ${({ theme }) => theme.colors.white};
`;

export const TextArea = styled.div`
  width: 260px;
  max-height: 100px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  overflow: auto;
  box-sizing: border-box;
  transition: max-height 500ms;

  ::-webkit-scrollbar {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const WrapperLinks = styled(ItemWrapper)`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 5px;
  box-sizing: border-box;

  .card-project__link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 600ms;

    a {
      font-family: ${({ theme }) => theme.fonts[0]};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.medium};

      :hover {
        transition: color 200ms;
        color: ${({ theme }) => theme.colors.hover};
      }

    }
  }
`;

export const Status = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  word-break: keep-all;
  text-transform: uppercase;
  margin-top: 10px;
  //box-sizing: border-box;
`;