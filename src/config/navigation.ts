export const NAVIGATION_CONFIG: readonly {
  key: string;
  path: string;
  icon: unknown;
  isContentType: boolean;
}[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
