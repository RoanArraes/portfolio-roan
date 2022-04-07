import { LABEL_BUTTON_BACK } from '../../utils/labels';
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
        <ButtonBack to={'/portfolio-roan'}>
          {LABEL_BUTTON_BACK.label}
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