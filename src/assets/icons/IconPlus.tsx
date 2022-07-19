interface PlusIconProps {
  color?: '#F47920' | '#BABCBC' | '#FFFFFF';
  isDisabled?: boolean;
}

export const IconPlusLarge = ({ color, isDisabled }: PlusIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon/24/plus">
      <path
        id="Verctor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
        fill={isDisabled ? '#BABCBC' : color}
      />
    </g>
  </svg>
);

IconPlusLarge.defaultProps = {
  color: '#FFFFFF',
  isDisabled: false,
};

export const IconPlusSmall = ({ color, isDisabled }: PlusIconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon/16/plus">
      <path
        id="Verctor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.666 7.33332H8.66602V3.33332C8.66602 2.96466 8.36735 2.66666 7.99935 2.66666C7.63135 2.66666 7.33268 2.96466 7.33268 3.33332V7.33332H3.33268C2.96468 7.33332 2.66602 7.63132 2.66602 7.99999C2.66602 8.36866 2.96468 8.66666 3.33268 8.66666H7.33268V12.6667C7.33268 13.0353 7.63135 13.3333 7.99935 13.3333C8.36735 13.3333 8.66602 13.0353 8.66602 12.6667V8.66666H12.666C13.034 8.66666 13.3327 8.36866 13.3327 7.99999C13.3327 7.63132 13.034 7.33332 12.666 7.33332"
        fill={isDisabled ? '#BABCBC' : color}
      />
    </g>
  </svg>
);

IconPlusSmall.defaultProps = {
  color: '#FFFFFF',
  isDisabled: false,
};
