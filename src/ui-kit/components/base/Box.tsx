import styled from '@emotion/styled';
import * as CSS from 'csstype';
import { HTMLAttributes } from 'react';
import {
  border,
  space,
  shadow,
  color,
  layout,
  flexbox,
  position,
  system,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

export const Box = styled.div<
  HTMLAttributes<HTMLDivElement> &
    SpaceProps &
    ColorProps &
    LayoutProps &
    ShadowProps &
    FlexProps &
    PositionProps &
    BorderProps &
    CSS.Properties
>(
  {
    boxSizing: 'border-box',
  },
  space,
  color,
  layout,
  flexbox,
  shadow,
  border,
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
