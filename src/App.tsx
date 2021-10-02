import { Button } from "src/components";
import {
  OPENSEA_LINK,
  // TOTAL_MINT_COUNT,
} from "src/constants";
import honestWork from "src/assets/honest-work.jpg";
import { useContract } from "src/hooks/useContract";
import { Container, HeaderContainer, Title, Text, Link, Image } from "./styles";

const App = () => {
  const { currentAccount, connectWallet, askContractToMintNft } = useContract();

  return (
    <Container>
      <HeaderContainer>
        <Title>My NFT Collection</Title>
        <Text>Each unique. Each beautiful. Discover your NFT today.</Text>
      </HeaderContainer>

      <Image src={honestWork} width="300px" />

      <Button
        onClick={!currentAccount ? () => connectWallet() : askContractToMintNft}
      >
        {!currentAccount ? "Connect to Wallet" : "Mint NFT"}
      </Button>
      <Link href={OPENSEA_LINK} target="_blank" rel="noreferrer">
        🌊 View Collection on OpenSea
      </Link>
    </Container>
  );
};

export default App;
