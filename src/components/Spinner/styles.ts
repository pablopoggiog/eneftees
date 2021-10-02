import styled, { keyframes } from "styled-components";

const spin = keyframes`
        0% {
          transform: rotate(0deg);
        }
  
        50% {
          transform: rotate(180deg);
          opacity: 0.6;
        }
  
        100% {
          transform: rotate(360deg);
          opacity: 1;
        }
      `;

export const Loader = styled.div<{ inner?: boolean; innest?: boolean }>`
  border: 16px solid lightBlue;
  border-top: 16px solid rgba(255, 219, 220);
  border-radius: 50%;
  width: ${({ inner, innest }) => (inner ? "67px" : innest ? "15px" : "120px")};
  height: ${({ inner, innest }) =>
    inner ? "67px" : innest ? "15px" : "120px"};
  animation: ${spin} 2s linear infinite;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
