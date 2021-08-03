const abi = require("./abi");
const Web3 = require("web3");
const stakeAbi = require("./stakeabi");
const strategyAbi = require("./strategyabi");
const rewardsAbi = require("./rewardsAbi");


const web3 = new Web3("http://localhost:8545");
const curve3crvAddress = "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490";
const ourWallet = "0xaFFE4271096c9eCBbde1bb309c60136506989aCb";
const stakeVaultAddress = "0xB17640796e4c27a39AF51887aff3F8DC0daF9567";
const strategyContractAddress = "0x4e205567aBEAc593901a443c1d6C777b7a82e789";
const rewardsContractAddress = "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f";

const curve3crv = new web3.eth.Contract(abi.abi, curve3crvAddress);
const stakeVault = new web3.eth.Contract(stakeAbi.abi, stakeVaultAddress);
const strategyContract = new web3.eth.Contract(strategyAbi.abi, strategyContractAddress);
const rewardsContract = new web3.eth.Contract(rewardsAbi.abi, rewardsContractAddress);

const init = async () => {
    let result = await curve3crv.methods.balanceOf(ourWallet).call();
    console.log(result);

    let stakeDaoBalance = await stakeVault.methods.balanceOf(ourWallet).call();
    console.log(stakeDaoBalance);
    
    // let rewards = await rewardsContract.methods.balanceOf(ourWallet).call();
    // console.log(rewards);

    // let resultAllowance = await curve3crv.methods.approve(stakeVaultAddress, result).send({ from: ourWallet });
    // console.log(resultAllowance);
    
    // let resultApprove = await stakeVault.methods.approve(ourWallet, web3.utils.toWei("10", "ether")).send({ from: ourWallet });
    // console.log(resultApprove);

    // let resultGetAllowance = await curve3crv.methods.allowance(ourWallet, stakeVaultAddress).call();
    // console.log(resultGetAllowance);
    
    let resultDeposit = await stakeVault.methods.deposit("16684877937186340179314").send({ from: ourWallet });
    console.log(resultDeposit);

    // let resultWithdraw = await stakeVault.methods.withdrawAll().send({ from: ourWallet });
    // console.log(resultWithdraw);

    // let startegyEarn = await strategyContract.methods.deposit("16684877937186340179314").send({ from: ourWallet });
    // console.log(startegyEarn);

    // let strategyEarned = await strategyContract.methods.balanceOf().call();
    // console.log(strategyEarned);

    // let resultEarn = await stakeVault.methods.earn().send({ from: ourWallet });
    // console.log(resultEarn);
}

init();
