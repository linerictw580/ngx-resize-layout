export interface ErcLayoutConfig {
  rows: ErcRowConfig[];
  /**number of pixels in between rows and columns */
  spacing?: number;
}

export interface ErcRowConfig {
  id: string;
}

export interface ErcColConfig {
  id: string;
}

export interface ErcRowResized {}

export interface ErcColResized {}

export type ErcResizeSource = 'self' | 'ancestor';
