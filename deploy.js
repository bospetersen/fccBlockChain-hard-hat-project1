// import { providers } from "ethers"
const ethers = require("ethers")
const fs = require("fs");
const { connect } = require("http2");
require("dotenv").config()

async function main() {
    //ethers.JsonRpcProvider()
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    // ----------------------------------------------------------
    // For encrypted keys only - See encryptKey.js
    // const encryptedJSON = fs.readFileSync("./.encryptedKey.json", "utf8");

    // let wallet = ethers.Wallet.fromEncryptedJsonSync(encryptedJSON, 
    //     process.env.PRIVATE_KEY_PASSWORD)
    // wallet = await wallet.connect(provider);

    // ----------------------------------------------------------
    
    const abi = fs.readFileSync("contracts_SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync("contracts_SimpleStorage_sol_SimpleStorage.bin", "utf8")
    const signer = await provider.getSigner()
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    const contract = await contractFactory.deploy()
    const getBlockNb = await provider.getBlockNumber()
    const getNetwork = await provider.getNetwork()
    const deploymentTransaction = await contract.deploymentTransaction().wait(1)
    const getDeployedCode = await contract.getDeployedCode()
    // const getFunction = await provider.network()
    const curFavoriteNb = await contract.retrieve()
    const transactionResponse = await contract.store("70")
    const transactionReceipt = await transactionResponse.wait(1)
    const curFavoriteNb2 = await contract.retrieve()

    // console.log(abi, binary)
    console.log('curFavoriteNb: ', curFavoriteNb.toString())
    // console.log('transactionResponse: ', transactionResponse)
    console.log('New curFavoriteNb: ', curFavoriteNb2.toString())
    // console.log('getDeployedCode: ', getDeployedCode)

    // console.log('deploymentTransaction: ', deploymentTransaction)
    // console.log('getBlockNb: ', getBlockNb)
    // console.log('getAddress: ', curFavoriteNb)
    // console.log('getNetwork: ', getNetwork)
    // console.log('signer: ', signer)
}


main().then(() => process.exit(0)).catch(error => {
    console.error(error)
    process.exit(1)
})