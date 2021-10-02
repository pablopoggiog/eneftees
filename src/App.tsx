import { Button } from "src/components";
import {
  OPENSEA_LINK,
  // TOTAL_MINT_COUNT,
} from "src/constants";
import { useContract } from "src/hooks/useContract";
import { Container, HeaderContainer, Title, Text, Link } from "./styles";

const App = () => {
  const { currentAccount, connectWallet, askContractToMintNft } = useContract();

  return (
    <Container>
      <HeaderContainer>
        <Title>My NFT Collection</Title>
        <Text>Each unique. Each beautiful. Discover your NFT today.</Text>
        <Button
          onClick={
            !currentAccount ? () => connectWallet() : askContractToMintNft
          }
        >
          {!currentAccount ? "Connect to Wallet" : "Mint NFT"}
        </Button>
      </HeaderContainer>
      <Link href={OPENSEA_LINK} target="_blank" rel="noreferrer">
        🌊 View Collection on OpenSea
      </Link>
    </Container>
  );
};

export default App;
