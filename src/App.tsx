import { Button } from "src/components";
import {
  TWITTER_HANDLE,
  TWITTER_LINK,
  OPENSEA_LINK,
  // TOTAL_MINT_COUNT,
} from "src/constants";
import { useContract } from "src/hooks/useContract";
import twitterLogo from "src/assets/twitter-logo.svg";

const App = () => {
  const { currentAccount, connectWallet, askContractToMintNft } = useContract();

  const renderNotConnectedContainer = () => (
    <Button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Connect to Wallet
    </Button>
  );

  const renderMintUI = () => (
    <button
      onClick={askContractToMintNft}
      className="cta-button connect-wallet-button"
    >
      Mint NFT
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
            Each unique. Each beautiful. Discover your NFT today.
          </p>
          {currentAccount === ""
            ? renderNotConnectedContainer()
            : renderMintUI()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
        <a href={OPENSEA_LINK} target="_blank" rel="noreferrer">
          🌊 View Collection on OpenSea
        </a>
      </div>
    </div>
  );
};

export default App;
