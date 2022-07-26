import styled from '@emotion/styled';
import * as CSS from 'csstype';
import { HTMLAttributes } from 'react';
import {
  space,
  color,
  layout,
  flexbox,
  position,
  system,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexProps,
  PositionProps,
} from 'styled-system';

export const Box = styled.div<
  HTMLAttributes<HTMLDivElement> &
    SpaceProps &
    ColorProps &
    LayoutProps &
    FlexProps &
    PositionProps &
    CSS.Properties
>(
  {
    boxSizing: 'border-box',
  },
  space,
  color,
  layout,
  flexbox,
  position,
  system({
    transform: {
      property: 'transform',
    },
    cursor: {
      property: 'cursor',
    },
  })
);
