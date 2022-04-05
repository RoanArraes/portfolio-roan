import { LABEL_BUTTON_BACK, LABEL_HEADER_ABOUT_PAGE } from '../../utils/labels';
import {
  Container,
  ButtonBack,
  TitlePage,
  WrapperTitle,
  WrapperButton
} from './styles';

const HeaderWithBack = () => {
  return(
    <Container>
      <WrapperButton>
        <ButtonBack>
          {LABEL_BUTTON_BACK.label}
        </ButtonBack>
      </WrapperButton>
      <WrapperTitle>
        <TitlePage>
          {LABEL_HEADER_ABOUT_PAGE.title}
        </TitlePage>
      </WrapperTitle>
    </Container>
  );
}

export default HeaderWithBack;