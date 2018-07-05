import {expect} from 'chai';
import OpenJs from '../src/';

const OPEN_KEY = 'op_pk_c681dfb2-7add-4e67-80e3-4fe53969e1c7';
const SCAFFOLD_ADDRESS = '0xc013d4c3a6ec409722684c296a36a90e187c6959';

const request = new OpenJs(OPEN_KEY)

it("Get all scaffolds", async function() {
  const result = await request.getScaffolds();
console.log(result.totalCount)
  expect(result).to.be.a('object');
  expect(result).to.have.property('totalCount');
  expect(result).to.have.property('list');
  expect(result.totalCount).to.be.a('number');
  expect(result.list).to.be.a('array');

  expect(result).not.to.have.property('error');
});

it("Get scaffold by id", async function() {
  const result = await request.getScaffold(SCAFFOLD_ADDRESS);

  expect(result).to.be.a('object');
  expect(result).not.to.have.property('error');
});

it("Get scaffold summary", async function() {
  const result = await request.getSummary(SCAFFOLD_ADDRESS);

  expect(result).to.be.a('object');
  expect(result).not.to.have.property('error');
});

it("Get scaffold transactions", async function() {
  const result = await request.getTransactions(SCAFFOLD_ADDRESS);

  expect(result).to.be.a('object');
  expect(result).to.have.property('totalCount');
  expect(result).to.have.property('list');
  expect(result.totalCount).to.be.a('number');
  expect(result.list).to.be.a('array');

  expect(result).not.to.have.property('error');
});

it("Deploy scaffold", async function() {
  const data = {
    openKey: OPEN_KEY,
    developerAddress: '0x33c2fb41aed258bf77c52674db552cf5625017d9',
    description: "any_description",
    fiatAmount: "123",
    currency: "USD",
    conversionAmount: 0.2139521163,
    properties: [
      {
        name: "property_name",
        type: "STRING",
        defaultValue: "property_value"
      }
    ]
  };
  const result = await request.deployScaffold(data);
  console.log(`deployed scaffold`, result);

  expect(result).to.be.a('object');
  expect(result).to.have.property('totalCount');
  expect(result).to.have.property('list');
  expect(result.totalCount).to.be.a('number');
  expect(result.list).to.be.a('array');

  expect(result).not.to.have.property('error');
});

it("Deactivate scaffold", async function(done) {
  const result = await request.deactivateScaffold(SCAFFOLD_ADDRESS);
  done(result)
  console.log(`deactivate scaffold`, result);

  expect(result).to.be.a('object');
  expect(result).not.to.have.property('error');
});

it("Set webhook", async function() {
  const data = {
    webHook: "https://zensoft.io/random-string"
  };
  const result = await request.setWebhook(SCAFFOLD_ADDRESS, data);
  console.log(`Set webhook`, result);

  expect(result).to.be.a('object');
  expect(result).not.to.have.property('error');
});

it("Get quota", async function() {
  const result = await request.getQuota();

  expect(result).to.be.a('object');
  expect(result).to.have.property('currentCount');
  expect(result).to.have.property('limitCount');
  expect(result.currentCount).to.be.a('number');
  expect(result.limitCount).to.be.a('number');
});

it("Add share holder", async function() {
  const data = {
    "address": '0x33c2fb41aed258bf77c52674db552cf5625017d6',
    "percent": 30
  };
  const result = await request.addShareHolder(SCAFFOLD_ADDRESS, data);

  expect(result).to.be.a('object');

  expect(result).not.to.have.property('error');
});

it("Update share holder", async function() {
  const data = {
    "percent": 40
  };
  const holderAddress = '0x33c2fb41aed258bf77c52674db552cf5625017d6'
  const result = await request.updateShareHolder(SCAFFOLD_ADDRESS, holderAddress, data);

  expect(result).to.be.a('object');

  expect(result).not.to.have.property('error');
});

it("Remove share holder", async function() {
  const data = {
    "percent": 30
  };
  const holderAddress = '0x33c2fb41aed258bf77c52674db552cf5625017d6'
  const result = await request.removeShareHolder(SCAFFOLD_ADDRESS, holderAddress, data);
  console.log('removed share holder', result);

  expect(result).to.be.a('object');

  expect(result).not.to.have.property('error');
});