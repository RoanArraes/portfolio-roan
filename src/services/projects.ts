import axios from "axios";
import { RepositoryGitHub } from "../utils/interfaces/repositoryGitHub.interface";

const getRepositories = (): any => {
  return axios.get('https://api.github.com/users/RoanArraes/repos')
  .then((resp) => {
    const repository: RepositoryGitHub[] = resp.data;
    return repository;
  })
  .catch((error) => {
    return null;
  })
}

export {
  getRepositories
};