import Web3 from 'web3';
export default class Web3Factory {
  static getInstance() {
    if (!Web3Factory._instance) {
      if(window.ethereum){
        Web3Factory._instance = new Web3(window.ethereum);
        window.web3= Web3Factory._instance;
      } else if(window.web3) {
        Web3Factory._instance = new Web3(window.web3.currentProvider);
      } else {
        Web3Factory._instance = undefined;
      }
    }

    return Web3Factory._instance;
  }
}