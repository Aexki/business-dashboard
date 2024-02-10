import React, { useState } from 'react';
import logo from '../assets/images/Grundfos-logo-white.png';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import AvatarComponent from './common/AvatarComponent';

const Header = () => {
  const [userName] = useState<string>('Sabatini Jena');

  return (
    <nav className="navigation">
      <Link to="/">
        <img src={logo} alt={'logo'} className="logo" />
      </Link>
      <div>
        <Typography sx={{ fontSize: 18 }}>PD INDUSTRY DASHBOARD</Typography>
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}
      >
        <Typography>Hi {userName?.split(' ')[0]}</Typography>&emsp;
        <AvatarComponent userName={userName} />
      </div>
    </nav>
  );
};

export default Header;
