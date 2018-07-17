import 'babel-polyfill';
import {api} from './configs';
import {addressValidation} from './helpers/validators';
import Paths from './dicts/paths';

export default class OpenJs {
  constructor(openKey = '') {
    this.api = api(openKey);
  }

  async getScaffolds() {
    try {
      const result = await this.api.get(Paths.Scaffold.GetAll);
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async getScaffold(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.get(Paths.Scaffold.GetItem(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async getSummary(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.get(Paths.Scaffold.GetSummary(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async getTransactions(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.get(Paths.Scaffold.GetTransactions(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async deployScaffold(data) {
    try {
      const result = await this.api.post(Paths.Scaffold.Deploy, data, {
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

  async deactivateScaffold(address) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.delete(Paths.Scaffold.Deactivate(address));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async setWebhook(address, data) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.patch(Paths.Scaffold.SetWebhook(address), data, {
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

  async getQuota() {
    try {
      const result = await this.api.get(Paths.Scaffold.GetQuota);
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

  async addShareHolder(address, data) {
    const error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.post(Paths.ShareHolder.Add(address), data, {
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

  async updateShareHolder(address, holderAddress, data) {
    let error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    error = addressValidation(holderAddress);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.put(Paths.ShareHolder.Update(address, holderAddress), data, {
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

  async removeShareHolder(address, holderAddress) {
    let error = addressValidation(address);
    if (error) {
      return new Error(error);
    };
    error = addressValidation(holderAddress);
    if (error) {
      return new Error(error);
    };
    try {
      const result = await this.api.delete(Paths.ShareHolder.Remove(address, holderAddress));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data
      }
      return error;
    }
  }

}