import '@emotion/react';
import { colors } from '../ui-kit/theme/colors';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
  }
}
