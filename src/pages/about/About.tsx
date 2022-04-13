import {
  Container,
  Wrapper,
  WrapperStacks,
  TextArea,
  StacksArea,
  TitleStack,
  ListStacks,
} from './styles';

import {
  HeaderWithBack
} from '../../components';

import { 
  DATA_ABOUT, 
  IN_STUDY, 
  PRINCIPAL_STACKS, 
  SENCONDARY_STACKS 
} from '../../utils/mock';

import { LABEL_HEADER_ABOUT_PAGE } from '../../utils/labels';

const About = () => {

  const breakTextString = (text: string): React.ReactNode => {
    const textSplited = text.split('/n');

    return textSplited.length && textSplited.map((text, index) => {
      return(
        <TextArea key={index}>
          {text}
        </TextArea>
      )
    });
  };

  const breakTextStacks = (text: string): React.ReactNode => {
    const textSplited = text.split(', ');
    return(
      <ListStacks>
        {textSplited.length && textSplited.map((text, index) => {
            return(
              <li key={index}>
                {text}
              </li>
            );
          })
        }
      </ListStacks>
    );
  };

  return(
    <Container>
      <HeaderWithBack
        title={LABEL_HEADER_ABOUT_PAGE.title}
      />
      <Wrapper>
        {breakTextString(DATA_ABOUT)}
        <WrapperStacks>
          <StacksArea>
            <TitleStack>
              Stacks Principais
            </TitleStack>
            {breakTextStacks(PRINCIPAL_STACKS)}
          </StacksArea>
          <StacksArea>
            <TitleStack>
              Stacks Secundárias
            </TitleStack>
            {breakTextStacks(SENCONDARY_STACKS)}
          </StacksArea>
          <StacksArea>
            <TitleStack>
              Em estudo
            </TitleStack>
            {breakTextStacks(IN_STUDY)}
          </StacksArea>
        </WrapperStacks>
      </Wrapper>
    </Container>
  );
}

export default About;