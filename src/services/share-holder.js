import 'babel-polyfill'
import Paths from '../dicts/paths'
import {api} from '../configs';

export default class ShareHolder {
  constructor(openKey = '') {
    this.api = api(openKey);
  }

  async addShareHolder(address, data) {
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