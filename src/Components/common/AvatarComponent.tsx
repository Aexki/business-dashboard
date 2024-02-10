import { Avatar } from '@mui/material';
import React from 'react';

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  /* eslint-enable no-bitwise */
  return color;
};

const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 35,
      height: 35,
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};

const AvatarComponent: React.FC<{ userName: string }> = ({ userName }) => {
  return <Avatar {...stringAvatar(userName)} />;
};

export default AvatarComponent;
