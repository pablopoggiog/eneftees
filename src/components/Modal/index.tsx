import { FunctionComponent } from "react";
import { Background, CloseButton, Container, Content } from "./styles";

interface ModalProps {
  content: string | JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({
  content,
  isOpen,
  onClose,
}) => {
  return (
    <Background isOpen={isOpen}>
      <Container>
        <CloseButton onClick={onClose}>x</CloseButton>
        <Content> {content}</Content>
      </Container>
    </Background>
  );
};
