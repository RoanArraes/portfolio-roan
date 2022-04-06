import axios from "axios";

type repositoryUser = {
  id: number,
  name: string,
  description: string,
  html_url: string
};

const getRepositories = (): any => {
  return axios.get('https://api.github.com/users/RoanArraes/repos')
  .then((resp) => {
    const repository: repositoryUser[] = resp.data;
    return repository;
  })
  .catch((error) => {
    return null;
  })
}

export {
  getRepositories
};