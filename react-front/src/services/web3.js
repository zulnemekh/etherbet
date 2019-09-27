export default class Web3Service {
  constructor(storage, web3) {
    this.storage = storage;
    this.web3 = web3;
  }

  async getAccount() {
    const res = {
      isMetamaskInstalled: false,
      accountAddress: null,
    }
    
    if(this.web3){
      res["isMetamaskInstalled"] = true;
      let accountAddresses = await this.web3.eth.getAccounts();
      if(accountAddresses.length > 0) {
        res["isMetamaskUnlocked"] = true;
        res["accountAddress"] = accountAddresses[0];
      }
    }
    return res;
  }

  async unlockMetamask() {
    return await window.ethereum.enable();
  }
/*__ADD_SERVICE_METHOD__*/
}