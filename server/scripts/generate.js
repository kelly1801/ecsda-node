const secp = require("@noble/secp256k1");
const { hexToBytes, toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const privKey = toHex(secp.utils.randomPrivateKey());
const publicKey = toHex(secp.getPublicKey(privKey));
const address = publicKey.slice(-20)



console.log({
    privKey,
    publicKey,
    address
});
