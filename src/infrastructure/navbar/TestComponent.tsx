import { FunctionComponent } from "react";
import styled from "styled-components";

type Props = {};

const TestComponent: FunctionComponent<Props> = () => {
  return <h1>TestComponent</h1>;
};

const StyledTestComponent = styled(TestComponent)``;

export { StyledTestComponent as TestComponent };
