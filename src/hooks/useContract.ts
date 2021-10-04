import { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import myEneftee from "src/utils/MyEneftee.json";
import { CONTRACT_ADDRESS } from "src/constants";

export const useContract = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isMining, setIsMining] = useState(false);
  const [newNFT, setNewNFT] = useState<number | null>(null);

  const interactWithContract = (
    callback: (contract: ethers.Contract) => void
  ) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          myEneftee.abi,
          signer
        );

        callback(connectedContract);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);

      setupEventListener();

      if (window.ethereum.networkVersion !== "4")
        alert(
          "Hey — I see you're connected to mainnet but this only works on Rinkeby!"
        );
    } catch (error) {
      console.log(error);
    }
  };

  const setupEventListener = useCallback(async () => {
    interactWithContract((contract) => {
      contract.on("NewEpicNFTMinted", (from, tokenId) => {
        console.log(from, tokenId.toNumber());
        setNewNFT(tokenId.toNumber());
      });
    });
    console.log("Setup event listener!");
  }, []);

  const checkIfWalletIsConnected = useCallback(async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);

      setupEventListener();
    } else {
      console.log("No authorized account found");
    }
  }, [setupEventListener]);

  const askContractToMintNft = async () => {
    interactWithContract(async (contract) => {
      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await contract.makeAnEpicNFT();

      setIsMining(true);
      console.log("Mining...please wait.");
      await nftTxn.wait();
      console.log(nftTxn);
      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
      );
      setIsMining(false);
    });
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  return {
    currentAccount,
    connectWallet,
    askContractToMintNft,
    isMining,
    newNFT,
  };
};
