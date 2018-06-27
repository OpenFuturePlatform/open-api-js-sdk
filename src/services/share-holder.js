import 'babel-polyfill';
import Paths from '../dicts/paths';
import {api} from '../configs';
import {addressValidation} from '../helpers/validators';

export default class ShareHolder {
  constructor(openKey = '') {
    this.api = api(openKey);
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