const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8540'));
console.log(web3.eth.accounts)
var org_abi = 
[
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "org",
    "outputs": [
      {
        "name": "num",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "property",
        "type": "uint8"
      },
      {
        "name": "principle",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "get_org",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint8"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "num",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "property",
        "type": "uint8"
      },
      {
        "name": "principle",
        "type": "string"
      }
    ],
    "name": "upload_org",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "Upload_org",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "Get_org",
    "type": "event"
  }
];
org_addr = "0x5F3DBa5e45909D1bf126aA0aF0601B1a369dbFD7";
//console.log(web3.eth.contract)
//console.log(web3)
//var org = web3.eth.contract(org_abi, org_addr, {gasPrise: '200000000'});
var org = web3.eth.contract(org_abi);
var org_ins = org.at(org_addr);
// console.log(org.options);
var result = org_ins.get_org(1);
console.log(result)
