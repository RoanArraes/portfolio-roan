import { LABEL_BUTTON_BACK } from '../../utils/labels';
import { ROUTES } from '../../utils/routes';
import {
  Container,
  ButtonBack,
  TitlePage,
  WrapperTitle,
  WrapperButton
} from './styles';

type Props = {
  title?: string
}

const HeaderWithBack = ({ title }: Props) => {
  return(
    <Container>
      <WrapperButton>
        <ButtonBack to={ROUTES.HOME}>
          <span>{LABEL_BUTTON_BACK.label}</span>
        </ButtonBack>
      </WrapperButton>
      <WrapperTitle>
        <TitlePage>
          {title}
        </TitlePage>
      </WrapperTitle>
    </Container>
  );
}

export default HeaderWithBack;