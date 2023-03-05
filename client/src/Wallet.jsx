import server from "./server";
import * as secp from "@noble/secp256k1";
import { toHex } from "ethereum-cryptography/utils";
function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  privKey,
  setPrivKey,
}) {
  async function onChange(evt) {
    const privKey = evt.target.value;
    setPrivKey(privKey);
    const address = toHex(secp.getPublicKey(privKey)).slice(-20)

    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>
      <label>Address :{address}</label>
      <label>
       Private Key
        <input
          placeholder="Type a private key"
          value={privKey}
          onChange={onChange}
        ></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
