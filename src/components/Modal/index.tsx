import { FunctionComponent } from "react";
import { Container } from "./styles";

export const Modal: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};
