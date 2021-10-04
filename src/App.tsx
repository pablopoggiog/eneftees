import { useEffect, useState } from "react";
import { Button, Spinner } from "src/components";
import {
  CONTRACT_ADDRESS,
  OPENSEA_LINK,
  // TOTAL_MINT_COUNT,
} from "src/constants";
import honestWork from "src/assets/honest-work.jpg";
import { Modal } from "src/components";
import { useContract } from "src/hooks/useContract";
import { Container, HeaderContainer, Title, Text, Link, Image } from "./styles";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    currentAccount,
    connectWallet,
    askContractToMintNft,
    isMining,
    newNFT,
  } = useContract();

  useEffect(() => {
    if (newNFT) setIsModalOpen(true);
  }, [newNFT]);

  const closeModal = () => setIsModalOpen(false);

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
        {!currentAccount ? "Connect Wallet" : "Mint NFT"}
      </Button>
      {isMining && <Spinner />}
      <Link href={OPENSEA_LINK} target="_blank" rel="noreferrer">
        🌊 View Collection on OpenSea
      </Link>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={
            <>
              <Text>
                Hey there! We've minted your NFT and sent it to your wallet.
              </Text>

              <Text>
                It may be blank right now. It can take a max of 10 min to show
                up on OpenSea.
              </Text>

              <Text>
                <Link
                  href={`https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${newNFT}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Here's the link
                </Link>
              </Text>
            </>
          }
        />
      )}
    </Container>
  );
};

export default App;
