import { HeaderWithBack } from "../../components";
import { LABEL_HEADER_PROJECTS_PAGE } from "../../utils/labels";
import { PROJECTS_MOCK } from "../../utils/mock";

import {
  Container,
  Wrapper
} from './styles';

import CardProject from './components/card-project/CardProject';

const Projects = () => {
  return(
    <Container>
      <HeaderWithBack title={LABEL_HEADER_PROJECTS_PAGE.title}/>
      <Wrapper>
        {PROJECTS_MOCK.map((project) => {
          return (
            <CardProject
              key={project.id}
              name={project.name}
              description={project.description}
              repositoryUrl={project.html_url}
            />
          )
        })

        }
      </Wrapper>
    </Container>
  )
}

export default Projects;