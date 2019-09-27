import ContractFactory from '../lib/ContractFactory';

export default class EtherBetService {
  constructor(storage, web3) {
    this.storage = storage;
    this.web3 = web3;
    this.contract = ContractFactory.getInstance(web3, BET_ABI);
    this.contract.options.address="0x9Ffc9b26A126E4796B5b9F9a8B90Fc55E642aE17";
  }
  async createBet({
    par1, 
    par2, 
    closeTimestamp, 
    isAvailable, 
    desc,
    bType,
    from,
  }) {
    return await this.contract.methods.createBet(
      par1, 
      par2, 
      closeTimestamp, 
      isAvailable, 
      desc,
      bType
    ).send({from})
  }
/*__ADD_SERVICE_METHOD__*/
}



const BET_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "bet_id",
				"type": "uint256"
			},
			{
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
				"name": "par1",
				"type": "string"
			},
			{
				"name": "par2",
				"type": "string"
			},
			{
				"name": "closeTIMESTAMP",
				"type": "uint256"
			},
			{
				"name": "isAvailable",
				"type": "bool"
			},
			{
				"name": "desc",
				"type": "string"
			},
			{
				"name": "bType",
				"type": "string"
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
				"name": "bet_id",
				"type": "uint256"
			},
			{
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
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
				"name": "bet_id",
				"type": "uint256"
			},
			{
				"indexed": false,
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "betAmountOf",
		"outputs": [
			{
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bets",
		"outputs": [
			{
				"name": "par1",
				"type": "string"
			},
			{
				"name": "par2",
				"type": "string"
			},
			{
				"name": "closeTIMESTAMP",
				"type": "uint256"
			},
			{
				"name": "winner",
				"type": "uint8"
			},
			{
				"name": "isAvailable",
				"type": "bool"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "betType",
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "betUserAmountOf",
		"outputs": [
			{
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "betUserOf",
		"outputs": [
			{
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "betUserWonAmountOf",
		"outputs": [
			{
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "campaigns",
		"outputs": [
			{
				"name": "user_address",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "bet_id",
				"type": "uint256"
			},
			{
				"name": "winner",
				"type": "uint8"
			},
			{
				"name": "betTIMESTAMP",
				"type": "uint256"
			},
			{
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "disableBets",
		"outputs": [
			{
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
				"name": "bet_id",
				"type": "uint256"
			}
		],
		"name": "getBet",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
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
				"name": "bet_id",
				"type": "uint256"
			},
			{
				"name": "winner",
				"type": "uint256"
			}
		],
		"name": "getBetAmountOf",
		"outputs": [
			{
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
		"name": "getBetLength",
		"outputs": [
			{
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
				"name": "bet_id",
				"type": "uint256"
			}
		],
		"name": "getBetName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
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
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCampaignLength",
		"outputs": [
			{
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
				"name": "bet_id",
				"type": "uint256"
			}
		],
		"name": "getDisableBet",
		"outputs": [
			{
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
				"name": "bet_id",
				"type": "uint256"
			}
		],
		"name": "getTotalAmountOf",
		"outputs": [
			{
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
				"name": "bet_id",
				"type": "uint256"
			},
			{
				"name": "user_bet",
				"type": "uint256"
			}
		],
		"name": "getUserBet",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
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
				"name": "bet_id",
				"type": "uint256"
			},
			{
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "getUserBetOf",
		"outputs": [
			{
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
				"name": "bet_id",
				"type": "uint256"
			}
		],
		"name": "getUserBetsLength",
		"outputs": [
			{
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
		"inputs": [],
		"name": "showSmallProfit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];