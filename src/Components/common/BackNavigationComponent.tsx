import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from '@mui/material';

const BackNavigationComponent = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      sx={{
        mt: 3.5,
        ml: -6,
        height: '48px',
        width: '48px',
      }}
      onClick={() => {
        navigate(-1);
      }}
    >
      <ChevronLeftIcon
        sx={{
          fontSize: '48px',
          fontWeight: 700,
          color: '#01386B',
          cursor: 'pointer',
        }}
      />
    </IconButton>
  );
};

export default BackNavigationComponent;
