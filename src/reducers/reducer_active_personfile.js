import { FETCH_PROFILE, FETCH_REPORTS, FETCH_URL } from '../actions/index';

export function activeProfileCard(state = [], action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return [action.payload.data.map((name) => name.owner.login)];
  }
  return state;
}

export function activeReportsName(state = [], action) {
  switch (action.type) {
    case FETCH_REPORTS:
      return [...action.payload.data.map((repoName) => repoName.repo.name)];
  }
  return state;
}

export function activeReportURL(state = [], action) {
  switch (action.type) {
    case FETCH_URL:
      return [...state.push(action.payload)];
  }
  return state;
}
