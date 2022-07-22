interface CloseAndClearIconProps {
  color?: '#F47920' | '#BABCBC' | '#FFFFFF';
  iconStyles?: React.CSSProperties;
}

export const CloseAndClearIconLarge = ({ color, iconStyles, ...props }: CloseAndClearIconProps) => (
  <svg
    style={iconStyles}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Icon/24/close">
      <path
        id="Verctor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6843 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4883 17.902 16.7442 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z"
        fill={color}
      />
    </g>
  </svg>
);

CloseAndClearIconLarge.defaultProps = {
  color: '#757D8A',
  iconStyles: {},
};

export const CloseAndClearIconSmall = ({ color, iconStyles, ...props }: CloseAndClearIconProps) => (
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

CloseAndClearIconSmall.defaultProps = {
  color: '#757D8A',
  iconStyles: {},
};
