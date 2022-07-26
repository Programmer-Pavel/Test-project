import styled from '@emotion/styled';
import { flexbox } from 'styled-system';
import { Box } from './Box';

export const Flex = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${flexbox}
`;

export const FlexCol = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${flexbox}
`;
