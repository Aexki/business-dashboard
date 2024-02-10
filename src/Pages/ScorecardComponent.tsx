import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import { Link } from 'react-router-dom';
import { scorecardList } from '../constant';

const ScorecardComponent = () => {
  const Scorecard = (scorecardData: {
    kpiId: string;
    kpiName: string;
    description: string;
  }) => {
    return (
      <Link to={`/${scorecardData.kpiId}`} style={{ textDecoration: 'none' }}>
        <Card className="scorecardContainer">
          <CardContent>
            <Typography
              component="div"
              sx={{
                fontSize: '1.5rem',
                lineHeight: '2',
                color: '#01386B',
                fontWeight: 700,
              }}
            >
              {scorecardData.kpiName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontSize: '.8rem' }}
            >
              {scorecardData.description}
            </Typography>
            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> */}
            <StackedBarChartIcon sx={{ color: '#01386B', fontSize: '3rem' }} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                fontSize: '.7rem',
                color: 'black',
              }}
            >
              Updated Monthly
            </Typography>
            {/* </Box> */}
          </CardContent>
        </Card>
      </Link>
    );
  };

  return (
    <Grid container spacing={5} sx={{ p: 5 }}>
      {scorecardList.map((scorecardData, index) => {
        return (
          <Grid item sm={12} md={6} lg={4} xl={3} key={index}>
            {Scorecard(scorecardData)}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ScorecardComponent;
