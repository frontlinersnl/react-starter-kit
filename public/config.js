const config = {
  version: "0.1.0",
};

try {
  window.config = config;
  if (module) {
    module.exports = config;
  }
} catch {
  // ignore
}
