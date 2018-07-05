# OpenJs

OpenJs is a library for interactions with Open Platform.

##Installing
Using npm:
```sh
$ npm install openjs
```
##Example

###Get started

`open_key` - your open key

```javascript
import OpenJs from 'openjs';

// Make a request for a scaffold with a given address
const openApi = new OpenJs(open_key);
```

###API methods

####getScaffolds()

```javascript
openApi.getScaffolds()
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

const getScaffoldsFunction = async () => {
  try {
    const response = await openApi.getScaffolds();
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

####getScaffold(scaffold_address `:String`)

```javascript
const getScaffoldFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.getScaffold(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

####getSummary(scaffold_address `:String`)

```javascript
const getSummaryFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.getSummary(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

####getTransactions(scaffold_address `:String`)

```javascript
const getTransactionsFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.getTransactions(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

####setWebhook(scaffold_address `:String`, data `:Object`)

```javascript
const setWebhookFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const data = {
    webHook: 'https://example.com'
  };
  try {
    const response = await openApi.setWebhook(scaffold_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

####deployScaffold(data `:Object`)

```javascript
const deployScaffoldFunction = async () => {
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
    const response = await openApi.deployScaffold(data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

#### deactivateScaffold(scaffold_address: `:String`)

```javascript
const deactivateScaffoldFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.deactivateScaffold(scaffold_address);
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

####getQuota()

```javascript
const getQuotaFunction = async () => {
  try {
    const response = await openApi.getQuota();
    console.log(response);
  } catch (error) {
    console.error(error);
  }  
};
```

####addShareHolder(scaffold_address `:String`, data `:Object`)

```javascript
const addShareHolderFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const data = {
    address: '0x0000000000000000000000000000000000000000',
    percent: 30
  };
  try {
    const response = await openApi.addShareHolder(scaffold_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

####updateShareHolder(scaffold_address `:String`, holder_address `:String`, data `:Object`)

```javascript
const updateShareHolderFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const holder_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const data = {
    percent: 30
  };
  try {
    const response = await openApi.updateShareHolder(scaffold_address, holder_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

####removeShareHolder(scaffold_address `:String`, holder_address `:String`)

```javascript
const removeShareHolderFunction = async () => {
  const scaffold_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  const holder_address = '0x0000000000000000000000000000000000000000'; // an address of the scaffold (example)
  try {
    const response = await openApi.removeShareHolder(scaffold_address, holder_address, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```