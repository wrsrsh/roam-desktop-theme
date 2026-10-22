// The theme consumes only Roam's settings API. Keep its shape local instead of
// installing a component toolkit and its unused server dependencies for a type.
export type OnloadArgs = {
  extensionAPI: {
    settings: {
      get(key: string): unknown;
      set(key: string, value: unknown): void | Promise<void>;
      panel: {
        create(options: {
          tabTitle: string;
          settings: Array<{
            id: string;
            name: string;
            description?: string;
            action: {
              type: string;
              items?: string[];
              onChange(value: any): void;
              [key: string]: unknown;
            };
          }>;
        }): void;
      };
    };
  };
};
