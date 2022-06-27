import { render, screen } from "@testing-library/react";
import { AboutContainer } from "./About";

describe("About container", () => {
  it("renders welcome to the about page", () => {
    render(<AboutContainer />);

    expect(screen.getByText(/Welcome to the about page/i)).toBeInTheDocument();
  });
});
