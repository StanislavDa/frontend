import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const DefaultIcon: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1" y="1" rx="2" width="12" height="12" strokeWidth="2" />
  </SvgIcon>
);

export const CheckedIcon: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="14" height="14" rx="3" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.71402 6.30066C4.62206 6.20534 4.51205 6.12931 4.39042 6.07701C4.26879 6.0247 4.13797 5.99717 4.0056 5.99602C3.87323 5.99487 3.74195 6.02012 3.61943 6.0703C3.49691 6.12048 3.3856 6.19458 3.292 6.28829C3.19839 6.38199 3.12437 6.49342 3.07424 6.61607C3.02411 6.73872 2.99889 6.87013 3.00004 7.00265C3.00119 7.13516 3.02869 7.26612 3.08094 7.38787C3.13319 7.50963 3.20914 7.61976 3.30435 7.71182L5.29823 9.7078C5.48518 9.8949 5.73871 10 6.00306 10C6.26741 10 6.52094 9.8949 6.7079 9.7078L10.6956 5.71584C10.7909 5.62377 10.8668 5.51365 10.9191 5.39189C10.9713 5.27013 10.9988 5.13918 11 5.00666C11.0011 4.87415 10.9759 4.74274 10.9258 4.62009C10.8756 4.49744 10.8016 4.38601 10.708 4.29231C10.6144 4.1986 10.5031 4.1245 10.3806 4.07432C10.258 4.02414 10.1268 3.99889 9.9944 4.00004C9.86203 4.00119 9.73121 4.02872 9.60958 4.08102C9.48795 4.13333 9.37794 4.20936 9.28598 4.30468L6.00306 7.59106L4.71402 6.30066V6.30066Z"
    />
  </SvgIcon>
);

export const IndeterminateIcon: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="14" height="14" rx="3" />
    <path d="M10 6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H10C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6Z" />
  </SvgIcon>
);
