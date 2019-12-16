import ContractFactory from '../lib/ContractFactory';

export default class EtherBetService {
  constructor(storage, web3) {
    this.storage = storage;
    this.web3 = web3;
    this.contract = ContractFactory.getInstance(web3, BET_ABI);
    this.contract.options.address = "0x0d434cf5e0B31c9871Cb4743Ca9690EeCdfCf19f";
	}
	
	getContract() {
		return this.contract;
	}

  async createBet({ params, from }) {

    return this.contract.methods.createBet(
      ...params
    ).send({ from })
  }

  async takeBet({ params, from }) {

    return this.contract.methods.takeBet(
      ...params
    ).send({ from })
  }

  async getBets() {
    let bets = [];
    let betLength = 0;
    let promises = [];

    betLength = await this.contract.methods.getBetLength().call();
    for (let i = 0; i < betLength; i++) {
      promises.push(this.getBet(i));
    }

    bets = await Promise.all(promises);
    bets = bets.map(bet => ({
      id: bet["id"],
      par1: bet[0],
      par2: bet[1],
      expiryDate: bet[2],
      winner: bet[3],
      isAvailable: bet[4],
      isPublic: bet[5],
      category: bet[6],
      description: bet[7],
      canDraw: bet[8],
    }));
    return bets;
  }

  async getBet(id) {
		const bet = await this.contract.methods.bets(id).call();
    return { id, ...bet }
	}
	
	async getUserBetOf({bet_id, address}) {
		return await this.contract.methods.getUserBetOf(bet_id, address).call();
	}

	async betUserAmountOf({bet_id, address}) {
		return await this.contract.methods.betUserAmountOf(bet_id, address).call();
	}

	async getUserBetsLength({bet_id}) {
		return await this.contract.methods.getUserBetsLength(bet_id).call();
	}

	async getTotalAmountOf({bet_id}) {
		return await this.contract.methods.getTotalAmountOf(bet_id).call();
	}
  /*__ADD_SERVICE_METHOD__*/
}



const BET_ABI = [
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
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "par1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "par2",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "closeTIMESTAMP",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "canDraw",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "betCategory",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isPublic",
				"type": "bool"
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
			}
		],
		"name": "setDisableBet",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bets",
		"outputs": [
			{
				"internalType": "string",
				"name": "par1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "par2",
				"type": "string"
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
				"internalType": "bool",
				"name": "isPublic",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "betCategory",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "canDraw",
				"type": "bool"
			},
			{
				"internalType": "address payable",
				"name": "owner_address",
				"type": "address"
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
			}
		],
		"name": "disableBets",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bet_id",
				"type": "uint256"
			}
		],
		"name": "getBetInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
		"name": "getBetInfoDetail",
		"outputs": [
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
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
				"name": "bet_id",
				"type": "uint256"
			}
		],
		"name": "getBetName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
			}
		],
		"name": "getDisableBet",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
	}
]
