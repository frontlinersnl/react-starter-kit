const defaultConfig = {
  version: "0.1.0",
  name: "React-starter-kit",
  services: {
    fake: {
      root: "http://localhost:9600/fake",
      trucks: "trucks",
    },
  },
  // oidc: {
  //   url: "private_url",
  //   realm: "inforit",
  //   clientId: "react-base",
  //   scope: "openid profile email",
  //   redirectUri: "http://localhost:3000/authentication/callback",
  //   silentRedirectUri: "http://localhost:3000/authentication/silent-callback",
  //   serviceWorkerOnly: false,
  // },
  oidc: {
    url: "https://sso.mastermindzh.tech/realms/public-tests",
    realm: "public-tests",
    clientId: "react-starter-kit",
    scope: "openid profile email",
    redirectUri: "http://localhost:3000/authentication/callback",
    silentRedirectUri: "http://localhost:3000/authentication/silent-callback",
    serviceWorkerOnly: false,
  },
};

// ignore this :)
try {
  window.defaultConfig = defaultConfig;
  if (module) {
    module.exports = defaultConfig;
  }
} catch {
  // ignore
}
