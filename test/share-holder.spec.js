import {expect} from 'chai';
import {ShareHolder} from '../src/';

const OPEN_KEY = 'op_pk_c681dfb2-7add-4e67-80e3-4fe53969e1c7';
const SCAFFOLD_ADDRESS = '0xc013d4c3a6ec409722684c296a36a90e187c6959';

const request = new ShareHolder(OPEN_KEY)

it("Add share holder", async function() {
  const data = {
    "address": '0x33c2fb41aed258bf77c52674db552cf5625017d6',
    "percent": 30
  };
  const result = await request.addShareHolder(SCAFFOLD_ADDRESS, data);
  console.log('share holder', result);

  expect(result).to.be.a('object');

  expect(result).not.to.have.property('error');
});

