import { render, screen, waitFor } from "@testing-library/react";
import { WithTestTranslations } from "../../app/tests/mocks/i18n/WithTestTranslations";
import { OidcProvider } from "../sso/OidcProvider";
import { WithRouter } from "../wrappers/WithRouter";
import { Navbar } from "./Navbar";

describe("Navbar container", () => {
  it.only("renders a navigation section identified by the nav test-id", async () => {
    render(
      <WithTestTranslations>
        {/* for simple tests where we don't need auth we don't actually have to mock responses */}
        <OidcProvider>
          <WithRouter>
            <Navbar />
          </WithRouter>
        </OidcProvider>
      </WithTestTranslations>,
    );
    // because of the extra loaders we wait for a result just to be sure
    // see: https://testing-library.com/docs/guide-disappearance/
    await waitFor(() => {
      expect(screen.getAllByTestId("nav")?.length).toBeGreaterThan(0);
    });
  });
});
