import styled from "styled-components";

interface BackgroundProps {
  isOpen: boolean;
}

export const Background = styled.div<BackgroundProps>`
  background: rgba(0, 0, 0, 0.86);
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 90;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #363537;
  color: white;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  padding: 1em 1.4em;
  word-break: break-word;
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  padding: 1em;
`;
