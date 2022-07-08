import { FunctionComponent, ReactNode, Suspense } from "react";
import { AppLoader } from "../loader/appLoader";

type Props = { children?: ReactNode };

/**
 * Component which wraps children in a fallback loader
 */
export const Loader: FunctionComponent<Props> = ({ children }) => {
  return <Suspense fallback={<AppLoader />}>{children}</Suspense>;
};
