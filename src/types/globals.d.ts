import { RunTimeConfig } from "../infrastructure/config/RunTimeConfig";

declare global {
  interface Window {
    mergedConfig: RunTimeConfig;
    defaultConfig: RunTimeConfig;
    configOverride: Partial<RunTimeConfig>;
  }
}

export {};
