import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import * as CSS from 'csstype';
import {
  space,
  color,
  layout,
  border,
  typography,
  TypographyProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
} from 'styled-system';

export const Text = styled.span<
  SpaceProps &
    ColorProps &
    LayoutProps &
    BorderProps &
    TypographyProps &
    HTMLAttributes<HTMLSpanElement> &
    CSS.Properties
>(space, color, typography, layout, border);
