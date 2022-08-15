import React, { FunctionComponent, ReactNode } from "react";

type Props = { children?: ReactNode };

/**
 * React StrictMode that disables itself when detected to be running in Cypress
 */
export const CypressStrictMode: FunctionComponent<Props> = ({ children }) => {
  const isInCypress = (window as any).Cypress;

  if (isInCypress) {
    return <>{children}</>;
  } else {
    return <React.StrictMode>{children}</React.StrictMode>;
  }
};
