import styled from '@emotion/styled';
import React, { useState } from 'react';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { CloseAndClearIconSmall } from '../../../assets';
import { Box } from '../base/Box';

const StyledInput = styled.input<InputStylesProps & TypographyProps & ColorProps>`
  ${color}
  ${typography}

  border: ${(props) => props.border || `1px solid ${props.active ? '#F5A240' : '#BABCBC'}`};
  border-radius: ${(props) => props.borderRadius || '4px'};
  color: ${(props) => props.color || (props.active ? '#000000' : '#8c8f90')};
  width: 100%;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || '16px'};
  line-height: ${(props) => props.lineHeight || '24px'};
  padding: ${(props) => props.padding || '3px 12px'};
  outline: none;

  :hover {
    border: ${(props) => props.border || `1px solid ${props.active ? '#F5A240' : '#8c8f90'}`};
  }

  :disabled {
    border: 1px solid #e2e3e3;
    background: #f9f9f9;
    color: #e2e3e3;
  }
`;

const StyledInputContainer = styled.div<SpaceProps & LayoutProps>`
  ${space}
  ${layout}

  position: relative;
  display: flex;
`;

interface InputStylesProps {
  active?: boolean;
  color?: string;
  border?: string;
  borderRadius?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  padding?: string;
}

interface InputProps extends SpaceProps, LayoutProps, TypographyProps, ColorProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  setValue: (value: string) => void;
  color?: string;
  border?: string;
  borderRadius?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  padding?: string;
}

export const RInput = ({
  onChange,
  value,
  setValue,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <StyledInputContainer {...props}>
      <StyledInput
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChange={onChange}
        value={value}
        active={active}
        {...props}
      />

      {value && (
        <Box
          onClick={() => setValue('')}
          onKeyPress={() => setValue('')}
          width="16px"
          height="16px"
          position="absolute"
          top="50%"
          right="7px"
          cursor="pointer"
          transform="translateY(-50%)"
        >
          <CloseAndClearIconSmall color="#BABCBC" />
        </Box>
      )}
    </StyledInputContainer>
  );
};

RInput.defaultProps = {
  color: null,
  border: null,
  borderRadius: null,
  fontWeight: null,
  fontSize: null,
  lineHeight: null,
  padding: null,
};
