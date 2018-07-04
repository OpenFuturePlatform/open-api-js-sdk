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
      return error.response.data;
    }
  }

  async getScaffold(address) {
    const errors = addressValidation(address);
    if (errors.length !==0) {
      return errors;
    };
    try {
      const result = await this.api.get(Paths.Scaffold.GetItem(address));
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getSummary(address) {
    const errors = addressValidation(address);
    if (errors.length !==0) {
      return errors;
    };
    try {
      const result = await this.api.get(Paths.Scaffold.GetSummary(address));
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getTransactions(address) {
    const errors = addressValidation(address);
    if (errors.length !==0) {
      return errors;
    };
    try {
      const result = await this.api.get(Paths.Scaffold.GetTransactions(address));
      return result.data;
    } catch (error) {
      return error.response.data;
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
      return error.response.data;
    }
  }

  async setWebhook(address, data) {
    const errors = addressValidation(address);
    if (errors.length !==0) {
      return errors;
    };
    try {
      const result = await this.api.patch(Paths.Scaffold.SetWebhook(address), data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getQuota() {
    try {
      const result = await this.api.get(Paths.Scaffold.GetQuota);
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async addShareHolder(address, data) {
    const errors = addressValidation(address);
    if (errors.length !==0) {
      return errors;
    };
    try {
      const result = await this.api.post(Paths.ShareHolder.Add(address), data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async updateShareHolder(address, data) {
    const errors = addressValidation(address);
    if (errors.length !==0) {
      return errors;
    };
    try {
      const result = await this.api.put(Paths.ShareHolder.Update(address), data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async removeShareHolder(address, data) {
    const errors = addressValidation(address);
    if (errors.length !==0) {
      return errors;
    };
    try {
      const result = await this.api.delete(Paths.ShareHolder.Remove(address), data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }
}