import 'babel-polyfill';
import {api} from './configs';
import {addressValidation} from './helpers/validators';
import Paths from './dicts/paths';

export default class OpenJs {
  constructor(openKey = '') {
    this.api = api(openKey);
  }

  async getEthereumScaffolds() {
    try {
      const result = await this.api.get(Paths.EthereumScaffold.GetAll);
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async getEthereumScaffold(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.get(Paths.EthereumScaffold.GetItem(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async getEthereumSummary(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.get(Paths.EthereumScaffold.GetSummary(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async getEthereumTransactions(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.get(Paths.EthereumScaffold.GetTransactions(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async deployEthereumScaffold(data) {
    try {
      const result = await this.api.post(Paths.EthereumScaffold.Deploy, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async deactivateEthereumScaffold(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.delete(Paths.EthereumScaffold.Deactivate(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async setEthereumScaffoldWebhook(address, data) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.patch(Paths.EthereumScaffold.SetWebhook(address), data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async getEthereumScaffoldQuota() {
    try {
      const result = await this.api.get(Paths.EthereumScaffold.GetQuota);
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async addEthereumShareHolder(address, data) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.post(Paths.EthereumShareHolder.Add(address), data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async updateEthereumShareHolder(address, holderAddress, data) {
    let error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    error = addressValidation(holderAddress);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.put(Paths.EthereumShareHolder.Update(address, holderAddress), data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async removeEthereumShareHolder(address, holderAddress) {
    let error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    error = addressValidation(holderAddress);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.delete(Paths.EthereumShareHolder.Remove(address, holderAddress));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

}