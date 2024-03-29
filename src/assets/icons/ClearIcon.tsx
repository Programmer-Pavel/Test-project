import { Theme } from '@emotion/react';
import React from 'react';

interface ClearIconProps {
  color?: keyof Theme['colors'];
  iconStyles?: React.CSSProperties;
}

export const ClearIcon = ({ color, iconStyles, ...props }: ClearIconProps) => (
  <svg
    style={iconStyles}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.94283 8.00001L11.8048 5.13801C12.0655 4.87735 12.0655 4.45601 11.8048 4.19535C11.5442 3.93468 11.1228 3.93468 10.8622 4.19535L8.00017 7.05735L5.13817 4.19535C4.8775 3.93468 4.45617 3.93468 4.1955 4.19535C3.93483 4.45601 3.93483 4.87735 4.1955 5.13801L7.0575 8.00001L4.1955 10.862C3.93483 11.1227 3.93483 11.544 4.1955 11.8047C4.3255 11.9347 4.49617 12 4.66683 12C4.8375 12 5.00817 11.9347 5.13817 11.8047L8.00017 8.94268L10.8622 11.8047C10.9922 11.9347 11.1628 12 11.3335 12C11.5042 12 11.6748 11.9347 11.8048 11.8047C12.0655 11.544 12.0655 11.1227 11.8048 10.862L8.94283 8.00001Z"
      fill={color}
    />
  </svg>
);

ClearIcon.defaultProps = {
  color: '#757D8A',
  iconStyles: {},
};
