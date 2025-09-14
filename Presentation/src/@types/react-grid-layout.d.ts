declare module 'react-grid-layout' {
  import * as React from 'react';

  export interface Layout {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;
    static?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
  }

  export interface ResponsiveProps {
    className?: string;
    layouts: { [key: string]: Layout[] };
    breakpoints: { [key: string]: number };
    cols: { [key: string]: number };
    rowHeight?: number;
    width?: number;
    isDraggable?: boolean;
    isResizable?: boolean;
    verticalCompact?: boolean;
    children?: React.ReactNode;
    resizeHandle?: React.ReactElement<HTMLSpanElement>;
    onLayoutChange?: (layouts: { [key: string]: Layout[] }) => void;
  }

  export class Responsive extends React.Component<ResponsiveProps> {}

export const WidthProvider: <P = object>(
  component: React.ComponentType<P>
) => React.ComponentType<P>;

export const GridLayout: React.ComponentType<{
  layout?: Layout[];
  cols?: number;
  rowHeight?: number;
  width?: number;
  isResizable?: boolean;
  isDraggable?: boolean;
  verticalCompact?: boolean;
  children?: React.ReactNode;
  onLayoutChange?: (layout: Layout[]) => void; // <-- добавляем
}>;

  export default GridLayout;
}
