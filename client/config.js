var Web3 = require('web3');
var provider = 'https://mainnet.infura.io/v3/f7469bf82e4240e784ede55d14fecbb1';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ",result);
});