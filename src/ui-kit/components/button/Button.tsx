import styled from '@emotion/styled';
import { ShadowProps } from 'styled-system';
import { Flex } from '../base/Flex';
import { Text } from '../base/Text';

const StyledButton = styled.button(
  (props: BtnStyleProps & ButtonProps & ShadowProps) => `

  width: ${props.width || 'auto'};
  height: ${props.height || props.btnSizezStyles.height};
  padding: ${props.iconOnly ? '0px' : props.btnSizezStyles.padding};
  background: ${props.background || props.btnVisualStyles.background};
  border-radius: ${props.borderRadius || '4px'};
  border: ${props.btnVisualStyles.border};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  color: ${props.color || props.btnVisualStyles.color};
  font-weight: 700;
  font-size: ${props.btnSizezStyles.fontSize};
  line-height: ${props.btnSizezStyles.lineHeight};
  

  :disabled {
    pointer-events: none;
    user-select: none;
    background: ${props.btnVisualStyles.disabled.background};
    color: ${props.btnVisualStyles.disabled.color};
    border-color: ${props.btnVisualStyles.disabled.borderColor};
  }
  
  :hover {
    background: ${props.btnVisualStyles.hover.background};
  }

  :active {
    background: ${props.btnVisualStyles.active.background};
  }
  `
);

const btnSizezStyles = {
  large: {
    height: '52px',
    padding: '12px 28px',
    fontSize: '22px',
    lineHeight: '28px',
  },
  medium: {
    height: '40px',
    padding: '8px 24px',
    fontSize: '18px',
    lineHeight: '24px',
  },
  small: {
    height: '28px',
    padding: '4px 16px',
    fontSize: '14px',
    lineHeight: '0px',
  },
};

const btnVisualStyles = {
  primary: {
    border: 'none',
    background: '#F47920',
    color: '#FFFFFF',

    hover: {
      background: '#E36301',
    },

    active: {
      background: '#D45201',
    },

    disabled: {
      borderColor: '',
      background: '#E2E3E3',
      color: '#BABCBC',
    },
  },

  secondary: {
    border: '1px solid #F47920',
    background: 'transparent',
    color: '#F47920',

    hover: {
      background: '#FBE8D9',
    },

    active: {
      background: '#F9E5D9',
    },

    disabled: {
      borderColor: '#BABCBC',
      background: 'transparent',
      color: '#BABCBC',
    },
  },

  tertiary: {
    border: 'none',
    background: 'transparent',
    color: '#F47920',

    hover: {
      background: '#FBE8D9',
    },

    active: {
      background: '#F9E5D9',
    },

    disabled: {
      borderColor: 'none',
      background: 'transparent',
      color: '#BABCBC',
    },
  },
};

interface BtnStyleProps {
  btnSizezStyles:
    | typeof btnSizezStyles.large
    | typeof btnSizezStyles.medium
    | typeof btnSizezStyles.small;
  btnVisualStyles:
    | typeof btnVisualStyles.primary
    | typeof btnVisualStyles.secondary
    | typeof btnVisualStyles.primary;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
  size?: 'large' | 'medium' | 'small';
  background?: string;
  color?: string;
  disabled?: boolean;
  width?: string;
  borderRadius?: string;
  height?: string;
  iconSide?: 'right' | 'left';
  visual?: 'primary' | 'secondary' | 'tertiary';
  iconOnly?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = ({ size, icon, iconSide, visual, iconOnly, ...props }: ButtonProps) => (
  <StyledButton
    btnSizezStyles={size ? btnSizezStyles[size] : btnSizezStyles.medium}
    btnVisualStyles={visual ? btnVisualStyles[visual] : btnVisualStyles.primary}
    size={size}
    iconOnly={iconOnly}
    {...props}
  >
    <Flex justifyContent={iconOnly || !icon ? 'center' : 'space-between'}>
      {iconOnly ? (
        icon
      ) : (
        <>
          {iconSide === 'left' && icon}
          <Text
            mr={iconSide === 'right' && size === 'small' ? '9px' : '12px'}
            ml={iconSide === 'left' && size === 'small' ? '9px' : '12px'}
          >
            {props.children}
          </Text>
          {iconSide === 'right' && icon}
        </>
      )}
    </Flex>
  </StyledButton>
);

Button.defaultProps = {
  type: 'button',
  background: '',
  color: '',
  disabled: false,
  width: null,
  height: null,
  size: '',
  icon: null,
  iconSide: 'right',
  visual: 'primary',
  children: null,
  iconOnly: false,
  borderRadius: '',
};
