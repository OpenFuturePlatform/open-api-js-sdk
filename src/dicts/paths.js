import {configuration} from '../configs'

const base = (rest) => `${configuration.apiPrefix}${rest}`

const Paths = {
  EthereumScaffold: {
    GetAll: base('/ethereum-scaffolds'),
    GetItem: (address) => base(`/ethereum-scaffolds/${address}`),
    GetSummary: (address) => base(`/ethereum-scaffolds/${address}/summary`),
    GetTransactions: (address) => base(`/ethereum-scaffolds/${address}/transactions`),
    Deploy: base('/ethereum-scaffolds/doDeploy'),
    Deactivate: (address) => base(`/ethereum-scaffolds/${address}`),
    SetWebhook: (address) => base(`/ethereum-scaffolds/${address}`),
    GetQuota: base('/ethereum-scaffolds/quota')
  },
  EthereumShareHolder: {
    Add: (address) => base(`/ethereum-scaffolds/${address}/holders`),
    Update: (address, holderAddress) => base(`/ethereum-scaffolds/${address}/holders/${holderAddress}`),
    Remove: (address, holderAddress) => base(`/ethereum-scaffolds/${address}/holders/${holderAddress}`),
  }
}

export default Paths;