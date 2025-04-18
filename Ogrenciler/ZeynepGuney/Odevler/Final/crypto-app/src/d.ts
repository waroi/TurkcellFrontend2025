declare module "react-sparklines" {
  import React from "react";

  export interface SparklinesProps {
    data: number[];
    limit?: number;
    width?: number;
    height?: number;
    margin?: number;
    min?: number;
    max?: number;
    style?: React.CSSProperties;
    svgWidth?: number | string;
    svgHeight?: number | string;
    preserveAspectRatio?: string;
    children?: React.ReactNode; 
  }

  export interface SparklinesLineProps {
    color?: string;
    style?: React.CSSProperties;
  }

  export const Sparklines: React.FC<SparklinesProps>;
  export const SparklinesLine: React.FC<SparklinesLineProps>;
}