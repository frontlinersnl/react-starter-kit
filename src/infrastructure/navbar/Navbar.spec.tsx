import { render, screen } from "@testing-library/react";
import { WithRouter } from "../wrappers/WithRouter";
import { Navbar } from "./Navbar";

describe("Navbar container", () => {
  it("renders a navigation section identified by the nav test-id", () => {
    render(
      <WithRouter>
        <Navbar />
      </WithRouter>,
    );

    expect(screen.getAllByTestId("nav")?.length).toBeGreaterThan(0);
  });
});
