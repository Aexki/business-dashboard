import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Header from './Components/Header';
import DetailsComponent from './Pages/DetailsComponent';
import ScorecardComponent from './Pages/ScorecardComponent';
import MetricComponent from './Pages/MetricComponent';

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
          <Header />
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
