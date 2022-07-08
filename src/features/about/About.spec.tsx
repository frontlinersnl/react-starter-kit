import { render, screen } from "@testing-library/react";
import { WithTestTranslations } from "../../app/tests/mocks/i18n/WithTestTranslations";

import { AboutContainer } from "./About";

describe("About container", () => {
  it("renders welcome to the about page", () => {
    render(
      <WithTestTranslations>
        <AboutContainer />
      </WithTestTranslations>,
    );

    expect(screen.getByText(/About/)).toBeInTheDocument();
  });

  it("uses the about.title key for translation rendering", () => {
    // we can specify that we only want translations keys to be rendered so we can check for translation keys instead
    render(
      <WithTestTranslations keysOnly={true}>
        <AboutContainer />
      </WithTestTranslations>,
    );

    expect(screen.getByText(/about.title/)).toBeInTheDocument();
  });
});
