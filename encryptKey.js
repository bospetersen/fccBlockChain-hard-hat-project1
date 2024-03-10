const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const encryptedJSONKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD
        // ,process.env.PRIVATE_KEY
    )
    console.log(encryptedJSONKey)
    fs.writeFileSync('./.encryptedKey.json', encryptedJSONKey);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

// ----------------------------------------------------------

// const ethers = require('ethers');
// const fs = require('fs-extra');
// require('dotenv').config();

// async function main() {
//     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

//     const encryptedJsonKey = await wallet.encrypt(
//         process.env.PRIVATE_KEY_PASSWORD
//     );
//     console.log(encryptedJsonKey);
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
