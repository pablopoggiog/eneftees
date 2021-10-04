import styled from "styled-components";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 90;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
