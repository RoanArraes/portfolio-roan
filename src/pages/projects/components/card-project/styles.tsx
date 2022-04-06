import styled from "styled-components";
import ItemWrapper from "../../../../helpers/ItemWrapper";

type Props = {
  src: string
}

export const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 20px 10px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.rgba.white005};
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 
    1px -1px 10px ${({ theme }) => theme.colors.rgba.white005},
    1px 1px 10px ${({ theme }) => theme.colors.rgba.white005},
    -1px 1px 10px ${({ theme }) => theme.colors.rgba.white005},
    -1px -1px 10px ${({ theme }) => theme.colors.rgba.white005}
  ;
  transition: border 600ms, height 500ms;
  cursor: default;

  :hover {
    transition: border 600ms, height 500ms;
    border: 1px solid ${({ theme }) => theme.colors.hover};
    height: 600px;

    .card-project__wrapper-bottom-area {
      height: 500px;
    }

    .card-project__text-area {
      transition: max-height 600ms;
      max-height: 250px;
    }
    .card-project__image-area {
      transition: height 600ms;
      height: 250px;
    }
    .card-project__links-area {
      display: flex;
    }
  }
`;

export const ImageArea = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: height 500ms;
`;

export const Image = styled.img<Props>`
  width: 100%;
  height: 100%;
  //object-fit: contain;
  border-radius: 10px;
  opacity: 0.9;
`;

export const WrapperBottom = styled(ItemWrapper)`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 20px;
  box-sizing: border-box;
`;

export const Label = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.medium1};
  color: ${({ theme }) => theme.colors.white};
`;

export const TextArea = styled.div`
  max-height: 100px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  overflow: auto;
  box-sizing: border-box;
  margin-bottom: auto;
  margin-top: auto;
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
  display: none;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px;
  box-sizing: border-box;

  .card-project__link {
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
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  word-break: keep-all;
  text-transform: uppercase;
`;