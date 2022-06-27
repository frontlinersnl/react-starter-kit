type RunTimeConfig = {
  version: number;
};

export const Config = (window as any).config as RunTimeConfig;
