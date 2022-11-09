require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rescue pizza sniff harvest photo flock victory'; 
let testAccounts = [
"0x3c897730653d4fa111f4b1a5ff7bbffd1e6d52a6f2509e017ff0af2f2695c00f",
"0xf75a00f63645d1c3afa5d5083bcff9a7e9991709dfa57b67242bf6397b02f314",
"0x4fa8b5474c434dc3285a2e865a41a2407b82640e7446d5ea1255b459eb87e99a",
"0xe1698df8f3fcd4e2bf1e66a44a243b828bd1b308ebe021d3ccedc71af7cb2a96",
"0x8d6720561c24d1e9430a094f6c202e6f87fdbe8257f0a28cd89bdf7a601cd08f",
"0xf0e0ad3cc5dc8fe1d73b91c7212f52e91aa4b76ca885bf960292b2c18e870a65",
"0x17ed89fa5e0d7ac373dab32f3520fb18cbb422e351eb34000ed22919fde41c57",
"0x632b1951010adad447b5a08586f94721c1e51ced3b26969e49692d1de40c32d6",
"0x4a16bfda1c7df182fa904c4c9eb0337a95feb6e42ed893403df0176b5c4ba620",
"0x0d8785a14562df73c7a224b1fec25f9c65c67f5c49923aff53bf26ebc8f02f49"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

