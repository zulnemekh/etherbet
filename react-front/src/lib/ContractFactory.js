export default class ContractFactory {
  static getInstance(web3,abi) {
    if (!ContractFactory._instance) {
      ContractFactory._instance = new web3.eth.Contract(abi);
    }

    return ContractFactory._instance;
  }
}