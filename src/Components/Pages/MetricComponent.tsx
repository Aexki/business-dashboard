import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import BackNavigationComponent from '../common/BackNavigationComponent';

const graphData: { [index: string]: any } = {
  graph1: {
    kpiName: 'IP Management - Dosing and Disinfection',
    kpiDescription: `Displaying the number of filings per year over the past decade for Dosing & Disinfection patents.`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'IP Management - Dosing and Disinfection - Filed vs Alive today',
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
        enabled: true,
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} filings</b><br/>',
      },
      xAxis: {
        categories: [
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
          2017,
          2018,
          2019,
          2020,
          2021,
          2022,
          2023,
          'Total',
        ],
        crosshair: true,
      },
      yAxis: [
        {
          title: {
            text: 'Filings',
          },
          showFirstLabel: true,
        },
      ],
      series: [
        {
          color: 'rgba(158, 159, 163, 0.5)',
          pointPlacement: -0.2,
          data: [1, 8, 1, 2, 1, 0, 0, 0, 0, 1, 1, 2, 1, 2, 0, 20],
          name: 'No. of patent(s) filed in the year',
        },
        {
          name: 'No. of patent(s) alive today',
          id: 'main',
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: '16px',
              },
            },
          ],
          data: [0, 6, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 2, 0, 13],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph2: {
    kpiName: 'IP Management - Multistage',
    kpiDescription: `Displaying the number of filings per year over the past decade for Dosing & Disinfection patents.`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'IP Management - Multistage - Filed vs Alive today',
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
        enabled: true,
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} filings</b><br/>',
      },
      xAxis: {
        categories: [
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
          2017,
          2018,
          2019,
          2020,
          2021,
          2022,
          2023,
          'Total',
        ],
        crosshair: true,
      },
      yAxis: [
        {
          title: {
            text: 'Filings',
          },
          showFirstLabel: true,
        },
      ],
      series: [
        {
          color: 'rgba(158, 159, 163, 0.5)',
          pointPlacement: -0.2,
          data: [6, 3, 6, 3, 3, 5, 8, 5, 3, 7, 0, 1, 2, 0, 2, 54],
          name: 'No. of patent(s) filed in the year',
        },
        {
          name: 'No. of patent(s) alive today',
          id: 'main',
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: '16px',
              },
            },
          ],
          data: [4, 0, 2, 1, 0, 2, 7, 3, 0, 3, 0, 1, 2, 0, 2, 27],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph3: {
    kpiName: 'IP Management - Motors and Drives',
    kpiDescription: `Displaying the number of filings per year over the past decade for Dosing & Disinfection patents.`,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'IP Management - Motors and Drives - Filed vs Alive today',
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
        enabled: true,
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} filings</b><br/>',
      },
      xAxis: {
        categories: [
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
          2017,
          2018,
          2019,
          2020,
          2021,
          2022,
          2023,
          'Total',
        ],
        crosshair: true,
      },
      yAxis: [
        {
          title: {
            text: 'Filings',
          },
          showFirstLabel: true,
        },
      ],
      series: [
        {
          color: 'rgba(158, 159, 163, 0.5)',
          pointPlacement: -0.2,
          data: [0, 0, 2, 4, 0, 1, 0, 1, 0, 0, 1, 3, 0, 2, 0, 14],
          name: 'No. of patent(s) filed in the year',
        },
        {
          name: 'No. of patent(s) alive today',
          id: 'main',
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: '16px',
              },
            },
          ],
          data: [0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 8],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph4: {
    kpiName: 'New Product Share of Sales (NPSS)',
    kpiDescription: ``,
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Dosing and Disinfection'],
        crosshair: true,
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
    kpiDescription: ``,
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['BM', 'CM', 'CR', 'MT'],
        crosshair: true,
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
    kpiDescription: ``,
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Motors', 'Drives'],
        crosshair: true,
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
    kpiName: 'Warranty Management - Digital Dosing',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Digital Dosing - Target vs. Actual Over the Last 3 Years',
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
  graph8: {
    kpiName: 'Product Cost Index (PCI) - Digital Dosing',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Digital Dosing',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'Digital dosing PCI',
          data: [
            102.36, 102.43, 102.12, 102.33, 102.44, 102.7, 102.64, 102.74,
            102.36, 102.65, 102.51, 102.52, 102.52, 102.52, 102.54, 102.54,
            102.53, 102.5,
          ],
          color: '#2F2D2E',
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph9: {
    kpiName: 'Product Cost Index (PCI) - Mechanical Dosing',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Mechanical Dosing',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'Mechanical dosing PCI',
          data: [
            100.83, 100.46, 100.44, 100.8, 100.86, 100.9, 100.99, 101.13,
            101.23, 101.14, 101.03, 101.09, 101.01, 100.92, 101.0, 100.98,
            100.96, 101,
          ],
          color: '#2F2D2E',
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph10: {
    kpiName: 'Product Cost Index (PCI) - Disinfection',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Disinfection',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'Disinfection PCI',
          data: [
            101.57, 101.25, 101.44, 101.4, 101.87, 101.56, 101.96, 101.91,
            101.9, 101.8, 101.35, 101.57, 101.58, 101.57, 101.38, 101.37,
            101.39, 101.3,
          ],
          color: '#2F2D2E',
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph11: {
    kpiName: 'Product Cost Index (PCI) - Multistage - CR',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Multistage - CR',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'Large CR',
          data: [
            100.14, 100.26, 100.1, 100.15, 100, 100.69, 101.42, 100.71, 101.09,
            101.2, 100.67, 100.68, 100.69, 100.7, 100.68, 100.68, 100.68, 100.6,
          ],
        },
        {
          name: 'Large CRE',
          data: [
            100.52, 100.48, 100.39, 100.28, 100.39, 100.85, 101.4, 101.01,
            101.38, 101.39, 101.05, 101.06, 101.04, 101.02, 101.02, 101.01, 101,
            101,
          ],
        },
        {
          name: 'Small CR',
          data: [
            102.03, 101.82, 101.73, 101.8, 102.07, 101.96, 102.09, 102.06,
            102.53, 102.41, 102.23, 102.22, 102.2, 102.22, 102.21, 102.21,
            102.21, 102.2,
          ],
        },
        {
          name: 'Small CRE',
          data: [
            100.84, 100.89, 100.82, 100.65, 100.75, 101.22, 101.66, 101.24,
            101.59, 101.63, 101.22, 101.22, 101.22, 101.22, 101.23, 101.22,
            101.22, 101.22,
          ],
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph12: {
    kpiName: 'Product Cost Index (PCI) - Multistage - BM',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Multistage - BM',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'BM',
          data: [
            102.16, 102.14, 101.71, 102, 102.27, 101.8, 102.04, 102.06, 102.45,
            102.5, 102.11, 102.16, 102.2, 102.14, 102.13, 102.09, 102.14,
            102.14,
          ],
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph13: {
    kpiName: 'Product Cost Index (PCI) - Multistage - CM',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Multistage - CM',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'CM',
          data: [
            100.62, 100.61, 100.82, 100.96, 100.96, 101.33, 101.55, 101.58,
            101.86, 101.81, 101.83, 101.8, 101.81, 101.81, 101.81, 101.81,
            101.81, 101.81,
          ],
        },
        {
          name: 'CME',
          data: [
            100.14, 100.26, 100.1, 100.15, 100, 100.69, 101.42, 100.71, 101.09,
            101.2, 100.67, 100.68, 100.69, 100.7, 100.68, 100.68, 100.68,
            100.68,
          ],
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph14: {
    kpiName: 'Product Cost Index (PCI) - Multistage - MT',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Multistage - MT',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'MT',
          data: [
            101.18, 101.06, 101.42, 101.74, 101.44, 102.17, 102.26, 102.24,
            102.62, 102.56, 102.77, 102.64, 102.67, 102.66, 102.68, 102.71,
            102.78, 102.8,
          ],
        },
        {
          name: 'MTE',
          data: [
            100.5, 100.52, 100.56, 100.72, 100.47, 101.23, 101.65, 101.43,
            101.74, 101.82, 101.56, 101.46, 101.43, 101.54, 101.6, 101.62,
            101.65, 101.65,
          ],
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph15: {
    kpiName: 'Product Cost Index (PCI) - Drives',
    kpiDescription: ``,
    chartOptions: {
      title: {
        text: 'Product Cost Index for Drives',
        align: 'center',
        margin: 25,
      },
      yAxis: {
        plotLines: [
          {
            value: 100,
            color: '#59D',
            dashStyle: 'shortDash',
            width: 1,
          },
        ],
        title: {
          text: 'PCI',
          enabled: true,
        },
        gridLineWidth: 0,
        maxPadding: 0.2,
      },
      xAxis: {
        crosshair: true,
        categories: [
          '2-2024',
          '3-2024',
          '4-2024',
          '5-2024',
          '6-2024',
          '7-2024',
          '8-2024',
          '9-2024',
          '10-2024',
          '11-2024',
          '12-2024',
          '1-2025',
          '2-2025',
          '3-2025',
          '4-2025',
          '5-2025',
          '6-2025',
          '7-2025',
        ],
      },
      series: [
        {
          name: 'Drives',
          data: [
            99.6, 99.5, 99.4, 99.2, 99.5, 99.4, 99.4, 99.3, 99.4, 99.1, 99.4,
            99.4, 99.4, 99.4, 99.4, 99.4, 99.4, 99.4,
          ],
        },
        {
          name: 'Reference',
          data: [
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100,
          ],
          dashStyle: 'dot',
          color: '#2F2D2E',
        },
      ],
    },
  },
  graph16: {
    kpiName: 'Spend Management (Dosing and Disinfection) - DP',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Spend Management - Dosing and Disinfection - Actual GR Month vs Budget GR Month',
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Dosing and Disinfection'],
        crosshair: true,
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
          data: [940.9],
          name: 'Actual GR Month',
        },
        {
          name: 'Budget GR Month',
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
          data: [972],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph17: {
    kpiName: 'Spend Management (Dosing and Disinfection) - PLM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Spend Management - Dosing and Disinfection - Actual GR Month vs Budget GR Month',
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Dosing and Disinfection'],
        crosshair: true,
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
          data: [402.5],
          name: 'Actual GR Month',
        },
        {
          name: 'Budget GR Month',
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
          data: [241.4],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph18: {
    kpiName: 'Spend Management (Multistage) - DP',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Spend Management - Multistage - Actual GR Month vs Budget GR Month',
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Multistage'],
        crosshair: true,
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
          data: [175.7],
          name: 'Actual GR Month',
        },
        {
          name: 'Budget GR Month',
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
          data: [1126.2],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph19: {
    kpiName: 'Spend Management (Multistage) - PLM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Spend Management - Multistage - Actual GR Month vs Budget GR Month',
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Multistage'],
        crosshair: true,
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
          data: [472.8],
          name: 'Actual GR Month',
        },
        {
          name: 'Budget GR Month',
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
          data: [491.8],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph20: {
    kpiName: 'Spend Management (Motors & Drive) - DP',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Spend Management - Motors & Drive - Actual GR Month vs Budget GR Month',
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Motors & Drive'],
        crosshair: true,
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
          data: [213.6],
          name: 'Actual GR Month',
        },
        {
          name: 'Budget GR Month',
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
          data: [955.1],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph21: {
    kpiName: 'Spend Management (Motors & Drive) - PLM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Spend Management - Motors & Drive - Actual GR Month vs Budget GR Month',
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
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y} millions</b><br/>',
      },
      xAxis: {
        categories: ['Motors & Drive'],
        crosshair: true,
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
          data: [754.6],
          name: 'Actual GR Month',
        },
        {
          name: 'Budget GR Month',
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
          data: [235.7],
        },
      ],
      exporting: {
        allowHTML: true,
      },
    },
  },
  graph22: {
    kpiName: 'Sales Volume (Dosing and Disinfection)',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Dosing and Disinfection)',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Dosing & Disinfection',
          data: [
            7982, 169, 6897, 6769, 7497, 5724, 5599, 289, 5467, 243, 5882, 990,
          ],
        },
      ],
    },
  },
  graph23: {
    kpiName: 'Sales Revenue (Dosing and Disinfection)',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Dosing and Disinfection)',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Dosing & Disinfection',
          data: [
            70597, 72261, 56910, 67020, 61216, 50644, 50761, 56728, 55768,
            54971, 53123, 52199,
          ],
        },
      ],
    },
  },
  graph24: {
    kpiName: 'Sales Volume (Multistage) - Small CR',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - Small CR',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Small CR',
          data: [
            13314, 14992, 11949, 12668, 13134, 11241, 11764, 12002, 12199,
            12330, 10693, 11373,
          ],
        },
      ],
    },
  },
  graph25: {
    kpiName: 'Sales Volume (Multistage) - Large CR',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - Large CR',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Large CR',
          data: [
            9383, 10964, 311, 9224, 8967, 8116, 8518, 8592, 6762, 8958, 7577,
            7723,
          ],
        },
      ],
    },
  },
  graph26: {
    kpiName: 'Sales Volume (Multistage) - Small CRE',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - Small CRE',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Small CRE',
          data: [
            1839, 1618, 1089, 1468, 1441, 1144, 1396, 1446, 1709, 1285, 1180,
            1490,
          ],
        },
      ],
    },
  },
  graph27: {
    kpiName: 'Sales Volume (Multistage) - Large CRE',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - Large CRE',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Large CRE',
          data: [741, 719, 598, 659, 718, 572, 666, 726, 621, 685, 552, 742],
        },
      ],
    },
  },
  graph28: {
    kpiName: 'Sales Volume (Multistage) - BM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - BM',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'BM',
          data: [81, 110, 105, 96, 73, 63, 73, 79, 73, 98, 77, 58],
        },
      ],
    },
  },
  graph29: {
    kpiName: 'Sales Volume (Multistage) - CM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - CM',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'CM',
          data: [
            26537, 30453, 25145, 34025, 31091, 22240, 27090, 23896, 23291,
            27884, 28381, 25327,
          ],
        },
      ],
    },
  },
  graph30: {
    kpiName: 'Sales Volume (Multistage) - CME',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - CME',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'CME',
          data: [
            841, 1277, 1037, 993, 983, 878, 967, 812, 1182, 847, 805, 1105,
          ],
        },
      ],
    },
  },
  graph31: {
    kpiName: 'Sales Volume (Multistage) - MT',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - MT',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'MT',
          data: [
            18785, 21173, 16882, 17675, 15660, 16069, 14398, 14653, 15241,
            15891, 12637, 14945,
          ],
        },
      ],
    },
  },
  graph32: {
    kpiName: 'Sales Volume (Multistage) - MTE',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Multistage) - MTE',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'MTE',
          data: [358, 284, 212, 283, 404, 185, 287, 223, 287, 213, 249, 277],
        },
      ],
    },
  },
  graph33: {
    kpiName: 'Sales Volume (Motors)',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Motors)',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Motors',
          data: [824, 1007, 740, 938, 919, 728, 865, 629, 609, 703, 534, 721],
        },
      ],
    },
  },
  graph34: {
    kpiName: 'Sales Volume (Drives)',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Volume (Drives)',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Units',
        },
      },
      tooltip: {
        valueSuffix: ' unit(s)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Drives',
          data: [646, 892, 674, 861, 1084, 673, 842, 1048, 825, 824, 633, 738],
        },
      ],
    },
  },
  graph35: {
    kpiName: 'Sales Revenue (Multistage) - Small CR',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - Small CR',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Small CR',
          data: [
            108148, 124392, 96165, 101594, 105055, 86989, 90704, 94937, 101131,
            97711, 85849, 94184,
          ],
        },
      ],
    },
  },
  graph36: {
    kpiName: 'Sales Revenue (Multistage) - Large CR',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - Large CR',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Large CR',
          data: [
            210979, 245759, 182542, 205834, 208531, 178753, 185047, 186091,
            204327, 196264, 170041, 170801,
          ],
        },
      ],
    },
  },
  graph37: {
    kpiName: 'Sales Revenue (Multistage) - Small CRE',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - Small CRE',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Small CRE',
          data: [
            29051, 23701, 16603, 22583, 20869, 16784, 20286, 20983, 26671,
            18657, 17464, 23215,
          ],
        },
      ],
    },
  },
  graph38: {
    kpiName: 'Sales Revenue (Multistage) - Large CRE',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - Large CRE',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Large CRE',
          data: [
            22159, 22621, 16447, 20558, 21488, 16798, 20688, 22297, 18882,
            21094, 16909, 22461,
          ],
        },
      ],
    },
  },
  graph39: {
    kpiName: 'Sales Revenue (Multistage) - BM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - BM',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'BM',
          data: [
            6592, 15055, 9066, 9209, 5382, 6024, 6506, 8961, 8536, 10234, 7742,
            5813,
          ],
        },
      ],
    },
  },
  graph40: {
    kpiName: 'Sales Revenue (Multistage) - CM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - CM',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'CM',
          data: [
            62520, 69033, 58258, 66813, 69858, 51134, 58115, 50772, 54164,
            58786, 58008, 58083,
          ],
        },
      ],
    },
  },
  graph41: {
    kpiName: 'Sales Revenue (Multistage) - CME',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - CME',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'CME',
          data: [
            6351, 9122, 7067, 7445, 7811, 7309, 6985, 5749, 8352, 7193, 6739,
            8391,
          ],
        },
      ],
    },
  },
  graph42: {
    kpiName: 'Sales Revenue (Multistage) - MT',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - MT',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'MT',
          data: [
            68765, 78876, 62110, 69602, 63598, 60126, 57203, 57059, 59482,
            58362, 49929, 60806,
          ],
        },
      ],
    },
  },
  graph43: {
    kpiName: 'Sales Revenue (Multistage) - MTE',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Multistage) - MTE',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'MTE',
          data: [
            5318, 5641, 4161, 4493, 7405, 3411, 4196, 4322, 5833, 4116, 4457,
            4968,
          ],
        },
      ],
    },
  },
  graph44: {
    kpiName: 'Sales Revenue (Motors)',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Motors)',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Motors',
          data: [
            7717, 9411, 5527, 7635, 8049, 5548, 8223, 6401, 5829, 7144, 8132,
            4940,
          ],
        },
      ],
    },
  },
  graph45: {
    kpiName: 'Sales Revenue (Drives)',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Sales Revenue (Drives)',
        align: 'center',
      },
      xAxis: {
        categories: [
          '02-2023',
          '03-2023',
          '04-2023',
          '05-2023',
          '06-2023',
          '07-2023',
          '08-2023',
          '09-2023',
          '10-2023',
          '11-2023',
          '12-2023',
          '01-2024',
        ],
        crosshair: true,
      },
      yAxis: {
        title: {
          text: 'Thousands DKK',
        },
      },
      tooltip: {
        valueSuffix: ' Thousand(s) DKK',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Drives',
          data: [
            8543, 9918, 7826, 8376, 11830, 7397, 8883, 10971, 5226, 7794, 5999,
            8199,
          ],
        },
      ],
    },
  },
  graph46: {
    kpiName: 'Warranty Management - Mechanical Dosing',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Mechanical Dosing - Target vs. Actual Over the Last 3 Years',
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
  graph47: {
    kpiName: 'Warranty Management - Disinfection',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Disinfection - Target vs. Actual Over the Last 3 Years',
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
  graph48: {
    kpiName: 'Warranty Management (Multistage) - CR',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Multistage - CR - Target vs. Actual Over the Last 3 Years',
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
  graph49: {
    kpiName: 'Warranty Management (Multistage) - CM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Multistage - CM - Target vs. Actual Over the Last 3 Years',
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
  graph50: {
    kpiName: 'Warranty Management - (Multistage) - BM',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Multistage - BM - Target vs. Actual Over the Last 3 Years',
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
  graph51: {
    kpiName: 'Warranty Management - (Multistage) - MT',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Multistage - MT - Target vs. Actual Over the Last 3 Years',
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
  graph52: {
    kpiName: 'Warranty Management - (Motors and Drive) - Motors',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Motors and Drive - Motors - Target vs. Actual Over the Last 3 Years',
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
  graph53: {
    kpiName: 'Warranty Management - (Motors and Drive) - Drives',
    kpiDescription: ``,
    chartOptions: {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Graph: Motors and Drive - Drives - Target vs. Actual Over the Last 3 Years',
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
    <Box sx={{ p: 8, pt: 4 }}>
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
