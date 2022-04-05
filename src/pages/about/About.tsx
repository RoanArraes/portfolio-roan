import {
  Container,
  Wrapper,
  TextArea
} from './styles';

import {
  HeaderWithBack
} from '../../components';
import { DATA_ABOUT } from '../../utils/mock';

const About = () => {

  function breakTextString(text: string): React.ReactNode {
    const textSplited = text.split('/n');

    return textSplited.length && textSplited.map((text, index) => {
      return(
        <TextArea key={index}>
          {text}
        </TextArea>
      )
    });
  }

  return(
    <Container>
      <HeaderWithBack />
      <Wrapper>
        {breakTextString(DATA_ABOUT)}
      </Wrapper>
    </Container>
  );
}

export default About;