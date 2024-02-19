import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import BackNavigationComponent from '../common/BackNavigationComponent';
import { Subtitles } from '@mui/icons-material';

const graphData: { [index: string]: any } = {
  graph1: {
    kpiName: 'Patent Portfolio (live patents)',
    kpiDescription: `Displaying the number of filings per year over the past decade for Dosing & Disinfection patents.`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Number of filings  - Dosing & Disinfection',
        align: 'center',
      },
      xAxis: {
        categories: [
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
          2022,
        ],
        crosshair: true,
        accessibility: {
          description: 'Years',
        },
      },
      yAxis: {
        title: {
          text: 'Filings',
        },
      },
      tooltip: {
        valueSuffix: ' filing(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Filings',
          data: [16, 1, 3, 6, 1, 0, 0, 2, 0, 3, 0, 2],
        },
      ],
    },
  },
  graph2: {
    kpiName: 'Patent Portfolio (live patents)',
    kpiDescription: `Displaying the number of filings per year over the past decade for Multistage patents.`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Number of filings - Multistage',
        align: 'center',
      },
      xAxis: {
        categories: [
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
          2022, 2023,
        ],
        crosshair: true,
        accessibility: {
          description: 'Years',
        },
      },
      yAxis: {
        title: {
          text: 'Filings',
        },
      },
      tooltip: {
        valueSuffix: ' filing(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Filings',
          data: [27, 6, 3, 5, 7, 5, 6, 6, 0, 2, 1, 0, 2],
        },
      ],
    },
  },
  graph3: {
    kpiName: 'Patent Portfolio (live patents)',
    kpiDescription: `Displaying the number of filings per year over the past decade for Motors and Drives patents.`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Number of filings  - Motors and drives',
        align: 'center',
      },
      xAxis: {
        categories: [
          2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
          2022,
        ],
        crosshair: true,
        accessibility: {
          description: 'Years',
        },
      },
      yAxis: {
        title: {
          text: 'Filings',
        },
      },
      tooltip: {
        valueSuffix: ' filing(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Filings',
          data: [8, 3, 0, 1, 0, 1, 0, 0, 1, 3, 0, 2],
        },
      ],
    },
  },
  graph4: {
    kpiName: 'New Product Share of Sales (NPSS)',
    kpiDescription: `Lorem Ipsum`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'NPSS - Dosing and Disinfection - Target vs Actual',
        align: 'center',
      },
      plotOptions: {
        column: {
          grouping: false,
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size: 15px">' +
          '{series.chart.options.countries.(point.key).name}' +
          '</span><br/>',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Dosing and Disinfection'],
        crosshair: true,
        accessibility: {
          description: 'Years',
        },
      },
      yAxis: [
        {
          title: {
            text: 'Millions',
          },
          showFirstLabel: false,
        },
      ],
      series: [
        {
          color: 'rgba(158, 159, 163, 0.5)',
          pointPlacement: -0.2,
          linkedTo: 'main',
          data: [0],
          name: 'Target',
        },
        {
          name: 'Actual',
          id: 'main',
          dataSorting: {
            enabled: true,
            matchByName: true,
          },
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: '16px',
              },
            },
          ],
          data: [0],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph5: {
    kpiName: 'New Product Share of Sales (NPSS)',
    kpiDescription: `Lorem Ipsum`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'NPSS - Multistage - Target vs Actual',
        align: 'center',
      },
      plotOptions: {
        column: {
          grouping: false,
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size: 15px">' +
          '{series.chart.options.countries.(point.key).name}' +
          '</span><br/>',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['BM', 'CM', 'CR', 'MT'],
        crosshair: true,
        accessibility: {
          description: 'Years',
        },
      },
      yAxis: [
        {
          title: {
            text: 'Millions',
          },
          showFirstLabel: false,
        },
      ],
      series: [
        {
          color: 'rgba(158, 159, 163, 0.5)',
          pointPlacement: -0.2,
          linkedTo: 'main',
          data: [16, 8, 13.75, 0],
          name: 'Target',
        },
        {
          name: 'Actual',
          id: 'main',
          dataSorting: {
            enabled: true,
            matchByName: true,
          },
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: '16px',
              },
            },
          ],
          data: [12, 9.5, 13.75, 3],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph6: {
    kpiName: 'New Product Share of Sales (NPSS)',
    kpiDescription: `Lorem Ipsum`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'NPSS - Motors and Drives - Target vs Actual',
        align: 'center',
      },
      plotOptions: {
        column: {
          grouping: false,
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size: 15px">' +
          '{series.chart.options.countries.(point.key).name}' +
          '</span><br/>',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Motors', 'Drives'],
        crosshair: true,
        accessibility: {
          description: 'Years',
        },
      },
      yAxis: [
        {
          title: {
            text: 'Millions',
          },
          showFirstLabel: false,
        },
      ],
      series: [
        {
          color: 'rgba(158, 159, 163, 0.5)',
          pointPlacement: -0.2,
          linkedTo: 'main',
          data: [0, 16],
          name: 'Target',
        },
        {
          name: 'Actual',
          id: 'main',
          dataSorting: {
            enabled: true,
            matchByName: true,
          },
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: '16px',
              },
            },
          ],
          data: [0, 26],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph7: {
    kpiName: 'Warranty',
    kpiDescription: `Lorem Ipsum`,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Digital Dosing Target vs. Actual Over the Last 3 Years',
        align: 'center',
      },
      xAxis: {
        type: 'datetime',
        labels: {
          overflow: 'justify',
        },
      },
      yAxis: {
        title: {
          text: 'In Millions',
        },
      },
      tooltip: {
        valueSuffix: ' M',
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5,
            },
          },
          marker: {
            enabled: false,
          },
          pointInterval: 30 * 24 * 3600 * 1000, // 1 month in milliseconds
          pointStart: Date.UTC(2021, 1, 1, 0, 0, 0),
        },
      },
      series: [
        {
          name: 'Target',
          data: [5.4, 5.2, 5.7, 6.3, 5.2, 5.6, 6.1, 5.6, 5.9, 7.1, 8.6, 7.8],
          color: 'red',
        },
        {
          name: 'Actual',
          data: [0.2, 0.1, 0.1, 0.5, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1, 0.2, 1.1],
        },
      ],
    },
  },
};

const MetricComponent = () => {
  const params = useParams();
  const metricId = params.metricId ?? '';
  const [data] = useState(metricId ? graphData[metricId] : undefined);

  return data ? (
    <Box sx={{ p: 8 }}>
      <Box id="detailHeaderContainer" sx={{ display: 'flex' }}>
        <BackNavigationComponent />
        <Typography
          sx={{ fontSize: '48px', fontWeight: 700, color: '#01386B', my: 2 }}
        >
          {data.kpiName}
        </Typography>
      </Box>
      <Typography>{data?.kpiDescription}</Typography>
      <Box sx={{ margin: 'auto', mt: 20, maxWidth: '2000px' }}>
        <HighchartsReact highcharts={Highcharts} options={data?.chartOptions} />
      </Box>
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
