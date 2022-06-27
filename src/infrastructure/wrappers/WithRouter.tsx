import { FunctionComponent, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = { children?: ReactNode };

export const WithRouter: FunctionComponent<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
