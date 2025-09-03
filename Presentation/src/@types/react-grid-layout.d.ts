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
    children?: React.ReactNode;
    resizeHandle?: ReactElement<HTMLSpanElement>;
  }

  export class Responsive extends React.Component<ResponsiveProps> {}
  export class WidthProvider<P = object> extends React.Component<P> {}
}
