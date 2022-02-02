require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet reward stick code grace bread swing genuine'; 
let testAccounts = [
"0x76b1e8f32f0d98c235038d57a24b6f2df434d22b07d196c179f35c196c8a7a08",
"0x7984275f858c5e00792c0d904629922ca6fd0717626aa3f94ab95a4ffaf95e33",
"0xea2c544b1a3fe4ab39c1400818b9443ab31e79ff7ddabb0eea84bc47b9d90c45",
"0x6573f90a93df7a1c8cd6f124de770de8870821c5e5b23318e30b7c06552cde74",
"0x5d52b7a5f02f1e22bcd298bfcfcf4e19d4f24c7f3c255e958fb61ab76b40f936",
"0x2eab60c3df3a6718d91f0d06274844f0d5078f126e9e2997021d032a3ed4d470",
"0x3a539fab926f1566cd46f6318c2e9321777ac4de3780266226daa00fad8dbf19",
"0xa2ca0a2165d2deefc51d103e942329833f864510f43e4dcab036120b41ce5607",
"0xb2276723ed565a8248a8932ae52e55defef1ae6aec29aecca284df53b0192b4c",
"0x514432b29e8d1e6ea1c5c46a2640bf096a0a6b8e1e03e1b4ecfc16fd3a9d08fc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


