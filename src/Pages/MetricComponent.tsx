import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const graphData: { [index: string]: any } = {
  dosing: {
    kpiName: 'Dosing',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    subKpis: [
      {
        subKpiName: 'Dosing',
      },
    ],
  },
};

const options = {
  title: {
    text: 'My Dosing chart',
  },

  series: [{
    data: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 5],
        [4, 8],
        [5, 13],
        [6, 21],
        [7, 34],
        [8, 55],
        [9, 89]
    ]
}]
};

const MetricComponent = () => {
  const params = useParams();
  const metricId = params.metricId ?? '';
  const [data] = useState(metricId ? graphData[metricId] : undefined);

  return data ? (
    <Box sx={{ p: 8 }}>
      <Typography
        sx={{ fontSize: '48px', fontWeight: 700, color: '#01386B', my: 2 }}
      >
        {data?.kpiName}
      </Typography>
      <Typography>{data?.kpiDescription}</Typography>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      No Data
    </Box>
  );
};

export default MetricComponent;
