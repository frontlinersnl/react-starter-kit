import { render, screen } from "@testing-library/react";
import { HomeContainer } from "./Home";

describe("Home component", () => {
  it("renders learn react link", () => {
    render(<HomeContainer />);

    expect(screen.getByText(/learn/i)).toBeInTheDocument();
  });
});
