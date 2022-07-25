import deepmerge from "deepmerge";

/**
 * gets and merges both the regular config and the override config from the window
 * into window.mergedConfig
 */
export const mergeConfigs = () => {
  if (!window.mergedConfig) {
    window.mergedConfig = deepmerge(window.defaultConfig, window.configOverride ?? {});
  }
};

mergeConfigs();

export const Config = window.mergedConfig;
