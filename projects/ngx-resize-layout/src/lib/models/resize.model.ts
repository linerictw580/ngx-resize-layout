export interface ErcLayoutConfig {
  rows: ErcRowConfig[];
  /**
   * number of pixels in between rows and columns
   * @default 8
   */
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

export interface ErcLayoutInfo {
  layer: number;
  index: number;
  maxIndex: number;
}
