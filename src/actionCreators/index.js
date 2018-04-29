import { CHANGE_USERNAME, GET_REPOS, LOAD_REPOS } from "../actionTypes";

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username
  };
}

export function getRepos(username) {
  return {
    type: GET_REPOS,
    username
  };
}

export function loadRepos(repos) {
  console.log(repos);
  return {
    type: LOAD_REPOS,
    repos
  };
}
