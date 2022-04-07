import { LABEL_LINK_SOURCE_CODE } from '../../../../utils/labels';
import {
  Container,
  WrapperBottom,
  WrapperLinks,
  TextArea,
  Label,
  Status,
  ImageArea,
  Image
} from './styles';

import {
  LinkWithIcon
} from '../../../../components'


type Props = {
  key: number,
  name: string,
  description: string | null,
  repositoryUrl?: string
  onClick?: () => void;
}

const CardProject = ({
  name,
  description,
  repositoryUrl,
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
      onClick={onClick}
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
      <WrapperBottom
        className='card-project__wrapper-bottom-area'
      >
        <Label>
          {name}
        </Label>
        <TextArea
          className='card-project__text-area'
        >
          {description ? adjustDescriptionToRender(description) : 'Nenhuma descrição.'}
        </TextArea>
        {repositoryUrl &&
          <WrapperLinks
            className='card-project__links-area'
          >
            <LinkWithIcon
              className='card-project__link'
              label={LABEL_LINK_SOURCE_CODE.label}
              url={repositoryUrl}
              targetUrl='__blank'
              useExternalLink
            />
            <Status>
              {isDoneStatus(description ? description : '') ? "Concluído" : "Em Desenvolvimento"}
            </Status>
          </WrapperLinks>
        }
      </WrapperBottom>
    </Container>
  );
}

export default CardProject;