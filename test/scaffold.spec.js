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

describe('Scaffolds tests', () => {
  it('Get all scaffolds', () => {
    nock(baseUrl)
      .get('/scaffolds')
      .reply(200, {
        totalCount: 1,
        list: [SCAFFOLD_MOCK]
      });

    return api.getScaffolds()
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

  it('Get scaffold', () => {
    nock(baseUrl)
      .get(`/scaffolds/${scaffoldAddress}`)
      .reply(200, SCAFFOLD_MOCK);

    return api.getScaffold(scaffoldAddress)
              .then(response => {
                expect(response).to.be.a('object');
                expect(response).to.deep.equal(SCAFFOLD_MOCK);
              });
  });

  it('Get summary', () => {
    nock(baseUrl)
      .get(`/scaffolds/${scaffoldAddress}/summary`)
      .reply(200, SUMMARY_MOCK);

    return api.getSummary(scaffoldAddress)
              .then(response => {
                expect(response).to.be.a('object');
                expect(response).to.deep.equal(SUMMARY_MOCK);
              });
  });

  it('Get transactions', () => {
    nock(baseUrl)
      .get(`/scaffolds/${scaffoldAddress}/transactions`)
      .reply(200, {
        totalCount: 1,
        list: [TRANSACTION_MOCK]
      });

    return api.getTransactions(scaffoldAddress)
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

  it('Deploy Scaffold', () => {
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
      .post('/scaffolds/doDeploy', data)
      .reply(200, SCAFFOLD_MOCK);

    return api.deployScaffold(data)
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(SCAFFOLD_MOCK);
                }
              });
  });

  it('Deactivate Scaffold', () => {
    nock(baseUrl)
      .delete(`/scaffolds/${scaffoldAddress}`)
      .reply(200, SUMMARY_MOCK);

    return api.deactivateScaffold(scaffoldAddress)
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(SUMMARY_MOCK);
                }
              });
  });

  it('Set Webhook', () => {
    const data = {
      webHook: 'https://zensoft.io'
    };
    nock(baseUrl)
      .patch(`/scaffolds/${scaffoldAddress}`, data)
      .reply(200, SCAFFOLD_MOCK);

    return api.setWebhook(scaffoldAddress, data)
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(SCAFFOLD_MOCK);
                }
              });
  });

  it('Get Quota', () => {
    nock(baseUrl)
      .get('/scaffolds/quota')
      .reply(200, QUOTA_MOCK);

    return api.getQuota()
              .then(response => {
                expect(response).to.be.a('object');

                if (response) {
                  expect(response).to.deep.equal(QUOTA_MOCK);
                }
              });
  });
});
