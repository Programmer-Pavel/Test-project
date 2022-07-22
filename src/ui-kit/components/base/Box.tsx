import styled from '@emotion/styled';
import { space, color, layout, flexbox, position, system } from 'styled-system';

export const Box = styled.div(
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
