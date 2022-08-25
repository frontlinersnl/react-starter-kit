import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { store } from "./app/store";
import { CypressStrictMode } from "./infrastructure/CypressStrictMode";
import "./infrastructure/i18n/init";
import { OidcProvider } from "./infrastructure/sso/OidcProvider";
import { Loader } from "./infrastructure/wrappers/WithPageSuspense";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")!;
const root = createRoot(container);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

root.render(
  <CypressStrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <OidcProvider>
        <Loader>
          <App />
        </Loader>
      </OidcProvider>
    </Provider>
  </CypressStrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
