pragma solidity ^0.5.11;

contract EtherBet {

  address payable public owner;

  struct Bets {
    bytes32 par1;  //participate first ID
    bytes32 par2;  //participate second ID
    uint closeTIMESTAMP; // close date
    uint8 winner; // 1 => par1: 2 => par2: 3 => draw: 4 => not yet play
    bool isAvailable; // closed: false opened: true
    bytes32 description;
    bytes32 betType;
  }

  struct UserBets {
    address payable user_address;
    uint amount;
    uint bet_id;
    uint8 winner; // 1 => par1: 2 => par2: 3 => draw
    uint betTIMESTAMP;
    bool isWon;
  }

  Bets[] public bets;
  mapping (uint => bytes32) public disableBets;
  mapping (uint => UserBets[]) public campaigns;
  mapping(uint => mapping(uint => uint)) public betAmountOf; // bet_ID, winner_TYPE, total_amount
  mapping(uint => mapping(address => uint)) public betUserAmountOf; // bet_ID, user_address, amount
  mapping(uint => mapping(address => uint)) public betUserWonAmountOf; // bet_ID, user_address, amount
  mapping(uint => mapping(address => uint)) public betUserOf; // bet_ID, user_address, winner

  uint private small_profit = 0;

    constructor() public {
     owner = msg.sender;
    }

  function () external payable {

  }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    //winner: 1 => par1: 2 => par2: 3 => draw
    function takeBet(uint bet_id, uint8 winner) public payable {
        require(msg.value > 0);
        require(bets[bet_id].closeTIMESTAMP > now);
        require(bets[bet_id].isAvailable == true);

        //userbets.push(UserBets(msg.sender, msg.value, bet_id, winner, now, false));
        campaigns[bet_id].push(UserBets(msg.sender, msg.value, bet_id, winner, now, false));
        betAmountOf[bet_id][winner] += msg.value;
        betUserOf[bet_id][msg.sender] = winner;
        betUserAmountOf[bet_id][msg.sender] += msg.value;
    }

    function createBet(bytes32 par1, bytes32 par2, uint closeTIMESTAMP, bool isAvailable, bytes32 description, bytes32 bType) external onlyOwner {
        bets.push(Bets(par1, par2, closeTIMESTAMP, 4, isAvailable, description, bType));
    }

    function agreeBetWinner (uint bet_id, uint8 winner) external onlyOwner{

        require(bets[bet_id].isAvailable == true);
        require(winner >= 1);
        require(winner <= 3);
        //require(bets[bet_id].closeTIMESTAMP < now);
        bets[bet_id].winner = winner;
        sendWinnerPriceToAll(bet_id, winner);
    }

    function getCampaignLength(uint id) external view returns (uint) {
        return  campaigns[id].length;
    }

    function getTotalAmountOf(uint bet_id) external view returns (uint) {
        return (betAmountOf[bet_id][0] + betAmountOf[bet_id][1] + betAmountOf[bet_id][2]);
    }


    function sendWinnerPriceToAll(uint bet_id, uint8 winner) internal returns (bool) {
        uint total_amount = betAmountOf[bet_id][0] + betAmountOf[bet_id][1] + betAmountOf[bet_id][2];
        uint winner_precent = total_amount/betAmountOf[bet_id][winner] * 95/100;
        small_profit += total_amount * 5/100;
         for (uint i = 0; i < campaigns[bet_id].length; i++){
            if(campaigns[bet_id][i].winner == winner) {
                campaigns[bet_id][i].user_address.transfer(campaigns[bet_id][i].amount*winner_precent);
                betUserWonAmountOf[bet_id][campaigns[bet_id][i].user_address] = msg.value;
            }

         }
            emit Won(bet_id, winner);
        return true;
    }

    function getBet(uint bet_id) external view returns (bytes32, bytes32, uint, uint8, bool, bytes32){
        return (bets[bet_id].par1, bets[bet_id].par2, bets[bet_id].closeTIMESTAMP,
        bets[bet_id].winner, bets[bet_id].isAvailable, bets[bet_id].description);
    }
    function setDisableBet(uint bet_id) external onlyOwner{
      disableBets[bet_id]='disable';
    }
    function getDisableBet(uint bet_id) external view returns (bytes32) {
        return disableBets[bet_id];
    }
     function getBetName(uint bet_id) external view returns (bytes32, bytes32){
        return (bets[bet_id].par1 ,bets[bet_id].par2);
    }

    function getBetLength() external view returns(uint){
         return bets.length;
    }

    function getUserBet(uint bet_id, uint user_bet)external view returns (address, uint, uint, uint8, uint, bool){
        return (campaigns[bet_id][user_bet].user_address, campaigns[bet_id][user_bet].amount, campaigns[bet_id][user_bet].bet_id,
        campaigns[bet_id][user_bet].winner, campaigns[bet_id][user_bet].betTIMESTAMP, campaigns[bet_id][user_bet].isWon);
    }

    function getUserBetsLength(uint bet_id)external view returns(uint){
         return campaigns[bet_id].length;
    }

    function getUserBetOf(uint bet_id, address user_address)external view returns(uint){
         return betUserOf[bet_id][user_address];
    }

    function getBetAmountOf(uint bet_id, uint winner) external view returns(uint){
         return betAmountOf[bet_id][winner];
    }


    function showSmallProfit() external view onlyOwner returns(uint) {
        return small_profit;
    }
    function withdraw() external onlyOwner {
        owner.transfer(small_profit);
        small_profit = 0;
    }

    event Won(uint indexed bet_id, uint8 winner);

}
