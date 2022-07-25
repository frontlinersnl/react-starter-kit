const defaultConfig = {
  version: "0.1.0",
  name: "React-starter-kit",
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
