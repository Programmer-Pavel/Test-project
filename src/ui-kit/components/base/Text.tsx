import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import {
  space,
  color,
  layout,
  typography,
  TypographyProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export const Text = styled.span<
  SpaceProps & ColorProps & LayoutProps & TypographyProps & HTMLAttributes<HTMLSpanElement>
>(space, color, typography, layout);
