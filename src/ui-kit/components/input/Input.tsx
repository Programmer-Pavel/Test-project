import styled from '@emotion/styled';
import React, { useState } from 'react';
import {
  border,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  StylesProps,
  typography,
} from 'styled-system';
import { CloseAndClearIconSmall } from '../../../assets';

const StyledInput = styled.input(
  (props: InputStylesProps) => `
  border: none;
  border-radius: 4px;
  color: ${props.active ? '#000000' : '#8c8f90'};
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 3px 12px;
  outline: none;

  :hover {
    border: 1px solid ${props.active ? '#f5a240' : '#8c8f90'};
  }

  :disabled {
    border: 1px solid #e2e3e3;
    background: #f9f9f9;
    color: #e2e3e3;
  }
`
);

const StyledInputContainer = styled.div`
  ${space}
  ${typography}
  ${layout}
  ${border}

  position: relative;
  display: flex;
`;

interface InputStylesProps {
  active: boolean;
}

// interface InputProps {
//   color?: string;
//   width?: string;
//   height: string;
// }

export const Input = ({ ...props }) => {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInputContainer {...props}>
      <StyledInput
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChange={onInputChange}
        value={value}
        active={active}
        {...props}
      />

      {value && (
        <div
          onClick={() => setValue('')}
          onKeyPress={() => setValue('')}
          style={{
            width: '16px',
            height: '16px',
            position: 'absolute',
            top: '50%',
            right: '7px',
            cursor: 'pointer',
            textAlign: 'center',
            transform: 'translateY(-50%)',
          }}
        >
          <CloseAndClearIconSmall color="#BABCBC" />
        </div>
      )}
    </StyledInputContainer>
  );
};

Input.defaultProps = {
  color: '#757D8A',
  width: '200px',
};
