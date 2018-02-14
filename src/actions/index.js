import axios from 'axios'

export const FETCH_PROFILE = 'FETCH_PROFILE'
export const FETCH_REPORTS = 'FETCH_REPORTS'
export const FETCH_URL = 'FETCH_URL'

export function renderGitHubData() {
  const url = `https://api.github.com/repos/wizardamigos/profiles/forks`
  const request = axios.get(url)

  return {
    type: FETCH_PROFILE,
    payload:request
  }
}

export function renderMatchedBarValueFromGithub(event) {
  const repoURL = `https://api.github.com/users/${event}/events/public`
  const requestReports = axios.get(repoURL)

  return {
    type: FETCH_REPORTS,
    payload: requestReports
  }
}

export function renderMatededReportURL(repolist) {
  const repoURL = `https://github.com/${repolist}`

  return {
    type: FETCH_URL,
    payload: repoURL
  }
}
