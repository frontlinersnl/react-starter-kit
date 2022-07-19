import { render, screen } from "@testing-library/react";
import { WithTestTranslations } from "../../app/tests/mocks/i18n/WithTestTranslations";
import { WithRouter } from "../wrappers/WithRouter";
import { Navbar } from "./Navbar";

describe("Navbar container", () => {
  it.only("renders a navigation section identified by the nav test-id", () => {
    render(
      <WithTestTranslations>
        <WithRouter>
          <Navbar />
        </WithRouter>
      </WithTestTranslations>,
    );

    expect(screen.getAllByTestId("nav")?.length).toBeGreaterThan(0);
  });
});
