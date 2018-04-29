import { put, takeLatest } from "redux-saga/effects";
import { loadRepos } from "../actionCreators";

function* getRepos(action) {
  let apiUrl = `https://api.github.com/users/${action.username}`;
  let userData = yield fetch(apiUrl).then(r => r.json());
  let repos = yield fetch(userData.repos_url).then(r => r.json());
  yield put(loadRepos(repos));
}

export function* githubWatcher() {
  yield takeLatest("GET_REPOS", getRepos);
}
