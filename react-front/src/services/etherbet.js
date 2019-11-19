import ContractFactory from '../lib/ContractFactory';

export default class EtherBetService {
  constructor(storage, web3) {
    this.storage = storage;
    this.web3 = web3;
    this.contract = ContractFactory.getInstance(web3, BET_ABI);
    this.contract.options.address = "0x442ec738fdd358e97add15ad034f1f1da0346664";
    window.contract = this.contract;
    window.web3= this.web3;
  }

  async createBet({ params, from }) {
    return await this.contract.methods.createBet(
      ...params
    ).send({ from })
  }

  async getBets() {
    let bets = [];
    let betLength = 0;
    let promises = [];

    betLength = await this.contract.methods.getBetLength().call()
    console.log(betLength);
    for (let i = 0; i < betLength; i++) {
      promises.push(this.getBet(i));
    }

    bets = await Promise.all(promises);
    bets = bets.map(bet => ({
      id: bet["id"],
      par1: bet[0],
      par2: bet[1],
      expiryDate: bet[2],
      category: bet[3],
      isPrivate: bet[4],
      description: bet[5],
    }));
    console.log(bets);
    return bets;
  }

  async getBet(id) {
    const bet = await this.contract.methods.getBet(id).call();
    return { id, ...bet }
  }
  /*__ADD_SERVICE_METHOD__*/
}



const BET_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      }
    ],
    "name": "getBet",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBetLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "disableBets",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "campaigns",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "user_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "winner",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "betTIMESTAMP",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isWon",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "betUserWonAmountOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bets",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "par1",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "par2",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "closeTIMESTAMP",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "winner",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "isAvailable",
        "type": "bool"
      },
      {
        "internalType": "bytes32",
        "name": "description",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "betType",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "betUserOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "betUserAmountOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getCampaignLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "user_bet",
        "type": "uint256"
      }
    ],
    "name": "getUserBet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "par1",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "par2",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "closeTIMESTAMP",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isAvailable",
        "type": "bool"
      },
      {
        "internalType": "bytes32",
        "name": "description",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "bType",
        "type": "bytes32"
      }
    ],
    "name": "createBet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "winner",
        "type": "uint8"
      }
    ],
    "name": "takeBet",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      }
    ],
    "name": "getUserBetsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      }
    ],
    "name": "getTotalAmountOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "user_address",
        "type": "address"
      }
    ],
    "name": "getUserBetOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "showSmallProfit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "winner",
        "type": "uint8"
      }
    ],
    "name": "agreeBetWinner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "winner",
        "type": "uint256"
      }
    ],
    "name": "getBetAmountOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      }
    ],
    "name": "setDisableBet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "betAmountOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      }
    ],
    "name": "getBetName",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      }
    ],
    "name": "getDisableBet",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "bet_id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "winner",
        "type": "uint8"
      }
    ],
    "name": "Won",
    "type": "event"
  }
];