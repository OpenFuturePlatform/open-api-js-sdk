import axios from 'axios/index';

export const configuration = Object.freeze (
  {
    apiPrefix: '/api',
    remoteApi: ''
  }
)

export const api = (openKey) => axios.create({
  baseURL: 'https://api.openfuture.io',
  headers: {'Authorization': openKey}
});