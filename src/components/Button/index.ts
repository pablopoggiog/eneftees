import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  background-color: #63b5cf;
  padding: 10px;
  color: white;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    background-color: #3ca2c3;
    transform: scale(1.01);
  }
`;
