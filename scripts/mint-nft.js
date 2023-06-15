require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")



const contractAddress = "0xed1C07C9203eB124884079fd64Ee98e99E602CbB"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)


console.log(JSON.stringify(contract.abi))