const expect = require('chai').expect;
const nock = require('nock');

const OpenJs = require('../src/index');
const api = new OpenJs();
const baseUrl = 'https://api.openfuture.io/api';
const scaffoldAddress = '0x1c297f40beb075936d6dbe4b245b92736667ecb1';

const SCAFFOLD_MOCK = require('./mock/scaffold');
const SUMMARY_MOCK = require('./mock/summary');
const TRANSACTION_MOCK = require('./mock/transaction');
const QUOTA_MOCK = require('./mock/quota');

describe('Ethereum scaffolds tests', () => {
  it('Get all ethereum scaffolds', () => {
    nock(baseUrl)
      .get('/ethereum-scaffolds')
      .reply(200, {
        totalCount: 1,
        list: [SCAFFOLD_MOCK]
      });

    return api.getEthereumScaffolds()
      .then(response => {
        expect(response).to.be.a('object');
        expect(response).to.have.property('totalCount');
        expect(response.totalCount).to.be.a('number');
        expect(response).to.have.property('list');
        expect(response.list).to.be.a('array');

        if (response.list.length) {
          expect(response.list).to.deep.include(SCAFFOLD_MOCK);
        }
      });
  });

  it('Get ethereum scaffold', () => {
    nock(baseUrl)
      .get(`/ethereum-scaffolds/${scaffoldAddress}`)
      .reply(200, SCAFFOLD_MOCK);

    return api.getEthereumScaffold(scaffoldAddress)
              .then(response => {
                expect(response).to.be.a('object');
                expect(response).to.deep.equal(SCAFFOLD_MOCK);
              });
  });

  it('Get ethereum summary', () => {
    nock(baseUrl)
      .get(`/ethereum-scaffolds/${scaffoldAddress}/summary`)
      .reply(200, SUMMARY_MOCK);

    return api.getEthereumSummary(scaffoldAddress)
              .then(response => {
                expect(response).to.be.a('object');
                expect(response).to.deep.equal(SUMMARY_MOCK);
              });
  });

  it('Get ethereum transactions', () => {
    nock(baseUrl)
      .get(`/ethereum-scaffolds/${scaffoldAddress}/transactions`)
      .reply(200, {
        totalCount: 1,
        list: [TRANSACTION_MOCK]
      });

    return api.getEthereumTransactions(scaffoldAddress)
              .then(response => {
                expect(response).to.be.a('object');
                expect(response).to.have.property('totalCount');
                expect(response.totalCount).to.be.a('number');
                expect(response).to.have.property('list');
                expect(response.list).to.be.a('array');

                if (response.list.length) {
                  expect(response.list).to.deep.include(TRANSACTION_MOCK);
                }
              });
  });

  it('Deploy ethereum scaffold', () => {
    const data = {
      openKey: "op_pk_7395a0fa-d39f-4f52-ab08-dsfdsf343254",
      developerAddress: "0xDc29484cc9C02Ee01015f33BcA8bBb5C7293Fb54",
      description: "any_description",
      fiatAmount: "123",
      currency: "USD",
      conversionAmount: "0.2139521163",
      properties: [
        {
          name: "property_name",
          type: "STRING",
          defaultValue: "property_value"
        }
      ]
    };

    nock(baseUrl)
      .post('/ethereum-scaffolds/doDeploy', data)
      .reply(200, SCAFFOLD_MOCK);

    return api.deployEthereumScaffold(data)
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(SCAFFOLD_MOCK);
                }
              });
  });

  it('Deactivate ethereum scaffold', () => {
    nock(baseUrl)
      .delete(`/ethereum-scaffolds/${scaffoldAddress}`)
      .reply(200, SUMMARY_MOCK);

    return api.deactivateEthereumScaffold(scaffoldAddress)
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(SUMMARY_MOCK);
                }
              });
  });

  it('Set ethereum scaffold webhook', () => {
    const data = {
      webHook: 'https://zensoft.io'
    };
    nock(baseUrl)
      .patch(`/ethereum-scaffolds/${scaffoldAddress}`, data)
      .reply(200, SCAFFOLD_MOCK);

    return api.setEthereumScaffoldWebhook(scaffoldAddress, data)
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(SCAFFOLD_MOCK);
                }
              });
  });

  it('Get ethereum scaffold quota', () => {
    nock(baseUrl)
      .get('/ethereum-scaffolds/quota')
      .reply(200, QUOTA_MOCK);

    return api.getEthereumScaffoldQuota()
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(QUOTA_MOCK);
                }
              });
  });
});
