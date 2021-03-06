import { web3 } from "../lib/web3";
import { useState, useEffect } from "react";

const Tip = function ({ isLoggedIn, accounts, address }) {
  const send = function () {
    const price = web3.utils.toWei("0.01", "ether");

    window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: address,
          value: web3.utils.toHex(price),
        },
      ],
    });
  };

  return <button onClick={send}>Tip 0.01 ETH</button>;
};

export default Tip;
