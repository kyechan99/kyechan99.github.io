import '@emotion/react';

import { ColorsType, FontSizesType, BreakpointsType } from '@/styles/theme';

type ColorsType = typeof colors;
type FontSizesType = typeof fontSizes;
type BreakpointsType = typeof breakpoints;

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    fontSizes: FontSizesType;
    breakpoints: BreakpointsType;
  }
}
