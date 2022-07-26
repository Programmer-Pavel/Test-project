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
import { ClearIcon } from '../../../assets';
import { Box } from '../base/Box';

const StyledInput = styled.input<InputStylesProps & TypographyProps & ColorProps>`
  ${color}
  ${typography}

  border: ${({ theme, ...props }) =>
    props.border || `1px solid ${props.active ? theme.colors.orange : theme.colors.lightgrey}`};
  border-radius: ${(props) => props.borderRadius || '4px'};
  color: ${({ theme, ...props }) => props.color || theme.colors.black};
  width: 100%;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || '16px'};
  line-height: ${(props) => props.lineHeight || '24px'};
  padding: ${(props) => props.padding || '3px 12px'};
  outline: none;

  :hover {
    border: ${({ theme, ...props }) =>
      props.border || `1px solid ${props.active ? theme.colors.orange : theme.colors.darkgrey}`};
  }

  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.lightgrey};
    background: ${({ theme }) => theme.colors.lightgrey};
    color: ${({ theme }) => theme.colors.lightslategrey};
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

export const Input = ({
  onChange,
  value,
  setValue,
  disabled,
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
        disabled={disabled}
        {...props}
      />

      {value && !disabled && (
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
          <ClearIcon />
        </Box>
      )}
    </StyledInputContainer>
  );
};

Input.defaultProps = {
  color: null,
  border: null,
  borderRadius: null,
  fontWeight: null,
  fontSize: null,
  lineHeight: null,
  padding: null,
};
