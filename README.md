# open-api-js-sdk

A library for interactions with Open Platform.

## Installing
Using npm:
```sh
$ npm install @open-platform/open-api-js-sdk
```
## Example

### Get started

`open_key` - your open key

```javascript
import OpenJs from 'openjs';

// Make a request for a scaffold with a given address
const openApi = new OpenJs(open_key);
```

### API methods

#### getEthereumScaffolds()

```javascript
openApi.getEthereumScaffolds()
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });
  
// Add the 'async' keyword to your outer function/method to use async/await.

const getEthereumScaffoldsFunction = async () => {
  try {
    const response = await openApi.getEthereumScaffolds();
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

#### getEthereumScaffold(scaffold_address `:String`)

```javascript
const getEthereumScaffoldFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.getEthereumScaffold(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

#### getEthereumSummary(scaffold_address `:String`)

```javascript
const getEthereumSummaryFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.getEthereumSummary(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

#### getEthereumTransactions(scaffold_address `:String`)

```javascript
const getEthereumTransactionsFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.getEthereumTransactions(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

#### setEthereumScaffoldWebhook(scaffold_address `:String`, data `:Object`)

```javascript
const setEthereumScaffoldWebhookFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const data = {
    webHook: 'https://example.com'
  };
  try {
    const response = await openApi.setEthereumScaffoldWebhook(scaffold_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

#### deployEthereumScaffold(data `:Object`)

```javascript
const deployEthereumScaffoldFunction = async () => {
  const data = {
    openKey: open_key,
    developerAddress: '0x0000000000000000000000000000000000000000',
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
  try {
    const response = await openApi.deployEthereumScaffold(data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

#### deactivateEthereumScaffold(scaffold_address: `:String`)

```javascript
const deactivateEthereumScaffoldFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.deactivateEthereumScaffold(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

#### getEthereumScaffoldQuota()

```javascript
const getEthereumScaffoldQuotaFunction = async () => {
  try {
    const response = await openApi.getEthereumScaffoldQuota();
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

#### addEthereumShareHolder(scaffold_address `:String`, data `:Object`)

```javascript
const addEthereumShareHolderFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const data = {
    address: '0x0000000000000000000000000000000000000000',
    percent: 30
  };
  try {
    const response = await openApi.addEthereumShareHolder(scaffold_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

#### updateEthereumShareHolder(scaffold_address `:String`, holder_address `:String`, data `:Object`)

```javascript
const updateEthereumShareHolderFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const holder_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const data = {
    percent: 30
  };
  try {
    const response = await openApi.updateEthereumShareHolder(scaffold_address, holder_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

#### removeEthereumShareHolder(scaffold_address `:String`, holder_address `:String`)

```javascript
const removeEthereumShareHolderFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const holder_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.removeEthereumShareHolder(scaffold_address, holder_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```