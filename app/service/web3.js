const { Service } = require('egg');
const Web3 = require("web3")
const { ethers } = require("ethers");
const cryptoJs = require("crypto-js")
const base64 = require('crypto-js/enc-base64')
const Tx = require('ethereumjs-tx').Transaction



class Web3Service extends Service {
  async getBlockNum() {
    const web3 = new Web3(this.config.web3Url)
    const latestBlockNumber = await web3.eth.getBlockNumber()
    return latestBlockNumber
  }


  async getBalance(address){
    const web3 = new Web3(this.config.web3Url)
    const wei = await web3.eth.getBalance(address)
    const balance = web3.utils.fromWei(wei, 'ether')
    return balance
  } 

  async transferToMe(){
    const customHttpProvider = new ethers.providers.JsonRpcProvider(this.config.web3Url);
    const signer = new ethers.Wallet(this.config.primaryKey, customHttpProvider)
    const tx = await signer.sendTransaction(
      {
        to: this.config.adminAddress,
        value: ethers.utils.parseEther("0"),
      }
    )
    console.log(tx)
    
  }


}

module.exports = Web3Service;