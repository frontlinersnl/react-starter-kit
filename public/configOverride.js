/**
 * This is the config override file.
 * This file is meant to be replaced during deployment with override values compared to the regular config.js
 * For development purposes this file can be completely empty
 */

const configOverride = {};

// ignore this :)
try {
  window.configOverride = configOverride;
  if (module) {
    module.exports = configOverride;
  }
} catch {
  // ignore
}
