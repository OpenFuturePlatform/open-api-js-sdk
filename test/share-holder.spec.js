import {ADDRESS_ERRORS} from '../src/const/errors';

const expect = require('chai').expect;
const nock = require('nock');

const OpenJs = require('../src/index');
const api = new OpenJs();
const baseUrl = 'https://api.openfuture.io/api';

const scaffoldAddress = '0x1c297f40beb075936d6dbe4b245b92736667ecb1';
const incorrectScaffoldAddress = '01c297f40beb075936d6dbe4b245b92736667ecb1';
const incorrectCharactersCountScaffoldAddress = '0x1c297f40beb075936d6dbe4b245b92736667ecb';

const holderAddress = '0x1c297f40beb075936d6dbe4b245b92736667ecb1';

const SUMMARY_MOCK = require('./mock/summary');

describe('Ethereum share holders tests', () => {
  describe('Add ethereum share holder', () => {
    const data = {
      "address": "0x1c297f40beb075936d6dbe4b245b92736667ecb1",
      "percent": 1
    };

    it('Add ethereum share holder success', () => {
      nock(baseUrl)
        .post(`/ethereum-scaffolds/${scaffoldAddress}/holders`, data)
        .reply(200, SUMMARY_MOCK);

      return api.addEthereumShareHolder(scaffoldAddress, data)
                .then(response => {
                  expect(response).to.be.a('object');
                  expect(response).to.deep.equal(SUMMARY_MOCK);
                });
    });

    it('Add ethereum share holder failure', () => {
      nock(baseUrl)
        .post(`/ethereum-scaffolds/${scaffoldAddress}/holders`, data)
        .reply(404);

      return api.addEthereumShareHolder(scaffoldAddress, data)
                .then(response => {
                  expect(response).to.be.a('error');
                });
    });

    it('Add ethereum share holder with incorrect address in request url', () => {
      nock(baseUrl)
        .post(`/ethereum-scaffolds/${scaffoldAddress}/holders`, data)
        .reply(200, SUMMARY_MOCK);

      return api.addEthereumShareHolder(incorrectScaffoldAddress, data)
                .then(response => {
                  expect(response).to.be.a('error');
                  expect(response.message).to.equal(ADDRESS_ERRORS.STARTS_WITH_ERROR);
                });
    });

    it('Add ethereum share holder with incorrect characters count address in request url', () => {
      nock(baseUrl)
        .post(`/ethereum-scaffolds/${scaffoldAddress}/holders`, data)
        .reply(200, SUMMARY_MOCK);

      return api.addEthereumShareHolder(incorrectCharactersCountScaffoldAddress, data)
                .then(response => {
                  expect(response).to.be.a('error');
                  expect(response.message).to.equal(ADDRESS_ERRORS.CHARACTERS_COUNT_ERROR);
                });
    });

    it('Add ethereum share holder with different type address in request url', () => {
      nock(baseUrl)
        .post(`/ethereum-scaffolds/${scaffoldAddress}/holders`, data)
        .reply(200, SUMMARY_MOCK);

      return api.addEthereumShareHolder(data)
                .then(response => {
                  expect(response).to.be.a('error');
                  expect(response.message).to.equal(ADDRESS_ERRORS.TYPE_IS_NOT_STRING_ERROR);
                });
    });

    it('Add ethereum share holder without type address in request url', () => {
      nock(baseUrl)
        .post(`/ethereum-scaffolds/${scaffoldAddress}/holders`, data)
        .reply(200, SUMMARY_MOCK);

      return api.addEthereumShareHolder()
                .then(response => {
                  expect(response).to.be.a('error');
                  expect(response.message).to.equal(ADDRESS_ERRORS.REQUIRED_PARAMETER_ERROR);
                });
    });
  })

  it('Update ethereum share holder success', () => {
    const data = {
      "percent": 1
    };
    nock(baseUrl)
      .put(`/ethereum-scaffolds/${scaffoldAddress}/holders/${holderAddress}`, data)
      .reply(200, SUMMARY_MOCK);

    return api.updateEthereumShareHolder(scaffoldAddress, holderAddress, data)
              .then(response => {
                expect(response).to.be.a('object');
                expect(response).to.deep.equal(SUMMARY_MOCK);
              });
  });

  it('Remove ethereum share holder success', () => {
    nock(baseUrl)
      .delete(`/ethereum-scaffolds/${scaffoldAddress}/holders/${holderAddress}`)
      .reply(200, SUMMARY_MOCK);

    return api.removeEthereumShareHolder(scaffoldAddress, holderAddress)
              .then(response => {
                expect(response).to.be.a('object');
                expect(response).to.deep.equal(SUMMARY_MOCK);
              });
  });
});
