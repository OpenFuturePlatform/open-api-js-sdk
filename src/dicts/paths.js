import {configuration} from '../configs'

const base = (rest) => `${configuration.apiPrefix}${rest}`

const Paths = {
  Scaffold: {
    GetAll: base('/scaffolds'),
    GetItem: (address) => base(`/scaffolds/${address}`),
    GetSummary: (address) => base(`/scaffolds/${address}/summary`),
    GetTransactions: (address) => base(`/scaffolds/${address}/transactions`),
    Deploy: base('/scaffolds/doDeploy'),
    Deactivate: (address) => base(`/scaffolds/${address}`),
    SetWebhook: (address) => base(`/scaffolds/${address}`),
    GetQuota: base('/scaffolds/quota')
  },
  ShareHolder: {
    Add: (address) => base(`/scaffolds/${address}/holders`),
    Update: (address, holderAddress) => base(`/scaffolds/${address}/holders/${holderAddress}`),
    Remove: (address, holderAddress) => base(`/scaffolds/${address}/holders/${holderAddress}`),
  }
}

export default Paths;