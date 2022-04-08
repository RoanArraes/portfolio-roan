import { LABEL_LINK_SOURCE_CODE } from '../../../../utils/labels';
import {
  Container,
  Wrapper,
  WrapperBottom,
  TextArea,
  Label,
  Status,
  ImageArea,
  Image,
  ButtonUrl
} from './styles';

type Props = {
  key: number,
  name: string,
  description?: string,
  repositoryUrl?: string,
  homePage?: string
  onClick?: () => void;
}

const CardProject = ({
  name,
  description,
  repositoryUrl,
  homePage,
  onClick
}: Props) => {

  const isDoneStatus = (status: string): Boolean => {
    const isDone = status.indexOf('*CONCLUIDO*');

    if (isDone >= 0) {
      return true;
    }
    
    return false;
  }

  const  adjustDescriptionToRender = (description: string): string => {
    const splitString = description.split('* -');

    if (!splitString[1] || splitString[1] === "") {
      return "Nenhuma descrição.";
    }

    return splitString[1];
  }

  const removeImageWithError = (name: string) => {
    const elementImage = document.getElementById(`${name}-image`);
    elementImage && elementImage.remove();
    const elementContainer = document.getElementById(`${name}-container`);
    elementContainer && elementContainer.setAttribute("style","height: 300px");
  }

  return(
    <Container
      id={`${name}-container`}
      onClick={() => window.open(`${homePage && homePage !== "" ? homePage : repositoryUrl}`, "_blank")}
    >
      <ImageArea
        id={`${name}-image`}
        className='card-project__image-area'
      >
        <Image 
          src={`https://github.com/RoanArraes/${name}/blob/main/src/assets/images/project-image.jpg?raw=true`}
          onError={() => removeImageWithError(name)}
          
        />
      </ImageArea>
      <WrapperBottom>
        <Label>
          {name}
        </Label>
        <TextArea
          className='card-project__text-area'
        >
          {description ? adjustDescriptionToRender(description) : 'Nenhuma descrição.'}
        </TextArea>
        <Wrapper>
          {((homePage && homePage !== "") && repositoryUrl) &&
            <ButtonUrl
              className='card-project__link'
              onClick={() => window.open(`${repositoryUrl}`, "_blank")}
            >
              <span>{LABEL_LINK_SOURCE_CODE}</span>
            </ButtonUrl>
          }
          <Status>
            {isDoneStatus(description ? description : '') ? "Concluído" : "Em Desenvolvimento"}
          </Status>
        </Wrapper>
      </WrapperBottom>
    </Container>
  );
}

export default CardProject;