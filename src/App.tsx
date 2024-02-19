import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './Components/common/Navbar';
import DetailsComponent from './Components/Pages/DetailsComponent';
import ScorecardComponent from './Components/Pages/ScorecardComponent';
import MetricComponent from './Components/Pages/MetricComponent';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<ScorecardComponent />} />
            <Route path="/:kpiId" element={<DetailsComponent />} />
            <Route path="/:kpiId/:metricId" element={<MetricComponent />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
