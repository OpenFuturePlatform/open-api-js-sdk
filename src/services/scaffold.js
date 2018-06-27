import 'babel-polyfill'
import Paths from '../dicts/paths'
import {api} from '../configs';

export default class Scaffold {
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
    try {
      const result = await this.api.get(Paths.Scaffold.GetItem(address));
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getSummary(address) {
    try {
      const result = await this.api.get(Paths.Scaffold.GetSummary(address));
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getTransactions(address) {
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
}