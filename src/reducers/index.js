import { CHANGE_USERNAME, GET_REPOS, LOAD_REPOS } from "../actionTypes";

function reducer(prevState = { username: "" }, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...prevState, username: action.username };
    case GET_REPOS:
      return { ...prevState, username: action.username, isLoading: true };
    case LOAD_REPOS:
      console.log(action);
      return { ...prevState, isLoading: false, repos: action.repos };
    default:
      return prevState;
  }
}

export default reducer;
