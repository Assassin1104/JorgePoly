const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

// with matic
const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};

// with infura
// const privateKey = fs.readFileSync('.secret').toString().trim();
// const projectId = '2fa49d1244db48a79e963f6d24529b4f';

// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     mumbai: {
//       url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
//       accounts: [privateKey],
//     },
//     mainnet: {
//       url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
//       accounts: [privateKey],
//     },
//   },
//   solidity: '0.8.4',
// };
