import { useEffect, useState } from "react";
import { HeaderWithBack } from "../../components";
import { LABEL_HEADER_PROJECTS_PAGE } from "../../utils/labels";
import { getRepositories } from '../../services/projects';
import CardProject from './components/card-project/CardProject';

import {
  Container,
  Wrapper,
  Message
} from './styles';

import { 
  MESSAGE_AWAITING_SERVER_RESPONSE, 
  MESSAGE_NO_PROJECTS 
} from "../../utils/messages";

type repository = {
  id: number,
  name: string,
  description: string,
  html_url: string
}

const Projects = () => {

  useEffect(() => {
    loadRepositories();
  }, [])

  const [repositories, setRepositories] = useState<repository[]>([]);

  const loadRepositories = async () => {
    const repositories =  await getRepositories();

    if (repositories) {
      setRepositories(repositories);
    }
  }

  return(
    <Container>
      <HeaderWithBack title={LABEL_HEADER_PROJECTS_PAGE.title}/>
      <Wrapper>
        {repositories && repositories.length === 0 ?
          <Message>{MESSAGE_AWAITING_SERVER_RESPONSE}</Message>
          : repositories.length > 0 ?
           repositories.map((project: repository) => {
            return (
              <CardProject
                key={project.id}
                name={project.name}
                description={project.description}
                repositoryUrl={project.html_url}
              />
            )
          })
          :
          <Message>{MESSAGE_NO_PROJECTS}</Message>
        }
      </Wrapper>
    </Container>
  )
}

export default Projects;