import axios from 'axios/index';

export const configuration = Object.freeze (
  {
    apiPrefix: '/api',
    remoteApi: ''
  }
)

export const api = (openKey) => axios.create({
  baseURL: 'http://localhost:8080',
  headers: {'Authorization': openKey}
});