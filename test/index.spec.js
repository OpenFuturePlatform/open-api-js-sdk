import {expect} from 'chai';
import {Scaffold} from '../src/';

const OPEN_KEY = 'op_pk_c681dfb2-7add-4e67-80e3-4fe53969e1c7';
const SCAFFOLD_ADDRESS = 'random';

const request = new Scaffold(OPEN_KEY)

it("test", async function() {
  const result = await request.getScaffolds();
  console.log('test', result);
});


it("Get all scaffolds", async function() {
  const result = await request.getScaffolds();
  console.log('scaffolds', result);

  expect(result).to.be.a('object');
  expect(result).to.have.property('totalCount');
  expect(result).to.have.property('list');
  expect(result.totalCount).to.be.a('number');
  expect(result.list).to.be.a('array');
});

it("Get scaffold by id", async function() {
  const result = await request.getScaffold(SCAFFOLD_ADDRESS);
  console.log(`scaffold '${SCAFFOLD_ADDRESS}'`, result);

  expect(result).to.be.a('object');
  expect(result).not.to.have.property('error');
});
//
// it("Get scaffold summary", async function() {
//   const result = await request.getSummary(SCAFFOLD_ADDRESS);
//   console.log(`scaffold '${SCAFFOLD_ADDRESS}' summary`, result);
//
//   expect(result).to.be.a('object');
//   expect(result).not.to.have.property('error');
// });

it("Get scaffold transactions", async function() {
  const result = await request.getTransactions(SCAFFOLD_ADDRESS);
  console.log(`scaffold '${SCAFFOLD_ADDRESS}' summary`, result);

  expect(result).to.be.a('object');
  expect(result).to.have.property('totalCount');
  expect(result).to.have.property('list');
  expect(result.totalCount).to.be.a('number');
  expect(result.list).to.be.a('array');

  expect(result).not.to.have.property('error');
});
//
// it("Deploy scaffold", async function() {
//   const data = {
//     openKey: OPEN_KEY,
//     developerAddress: "random1",
//     description: "any_description",
//     fiatAmount: "123",
//     currency: "USD",
//     conversionAmount: 0.2139521163,
//     properties: [
//       {
//         name: "property_name",
//         type: "STRING",
//         defaultValue: "property_value"
//       }
//     ]
//   };
//   const result = await request.deployScaffold(data);
//   console.log(`deployed scaffold`, result);
//
//   expect(result).to.be.a('object');
//   expect(result).to.have.property('totalCount');
//   expect(result).to.have.property('list');
//   expect(result.totalCount).to.be.a('number');
//   expect(result.list).to.be.a('array');
//
//   expect(result).not.to.have.property('error');
// });

it("Set webhook", async function() {
  const data = {
    webHook: "https://zensoft.io"
  };
  const result = await request.setWebhook(SCAFFOLD_ADDRESS, data);
  console.log(`Set webhook`, result);

  expect(result).to.be.a('object');
  expect(result).not.to.have.property('error');
});

it("Get quota", async function() {
  const result = await request.getQuota();
  console.log(`Get quota`, result);

  expect(result).to.be.a('object');
  expect(result).to.have.property('currentCount');
  expect(result).to.have.property('limitCount');
  expect(result.currentCount).to.be.a('number');
  expect(result.limitCount).to.be.a('number');
});
