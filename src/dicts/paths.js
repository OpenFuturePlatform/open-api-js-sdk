import {configuration} from '../configs'

const base = (rest) => `${configuration.apiPrefix}${rest}`

const Paths = {
  Scaffold: {
    GetAll: base('/scaffolds'),
    GetItem: (address) => base(`/scaffolds/${address}`),
    GetSummary: (address) => base(`/scaffolds/${address}/summary`),
    GetTransactions: (address) => base(`/scaffolds/${address}/transactions`),
    Deploy: base('/scaffolds/doDeploy'),
    SetWebhook: (address) => base(`/scaffolds/${address}`),
    GetQuota: base('/scaffolds/quota')
  },
  ShareHolder: {
    Add: (address) => base(`/scaffolds/${address}/holders`),
    Update: (address) => base(`/scaffolds/${address}/holders`),
    Remove: (address) => base(`/scaffolds/${address}/holders`),
  }
}

export default Paths;