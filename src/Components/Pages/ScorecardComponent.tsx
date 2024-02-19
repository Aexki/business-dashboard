import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Typography,
  Zoom,
} from '@mui/material';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import { Link } from 'react-router-dom';
import { scorecardList } from '../../constant';

const ScorecardComponent = () => {
  const getStatus = (statusCode: number): string => {
    let status;
    if (statusCode === 1) {
      status = 'Danger';
    } else if (statusCode === 2) {
      status = 'Warning';
    } else {
      status = 'Safe';
    }
    return status;
  };

  const getColor = (status: number): string => {
    let color;
    if (status === 1) {
      color = 'rgb(255, 0, 0)';
    } else if (status === 2) {
      color = 'rgb(255, 128, 0)';
    } else {
      color = 'rgb(76, 153, 0)';
    }
    return color;
  };

  const getBackgroundColor = (status: number): string => {
    let bgColor;
    if (status === 1) {
      bgColor = 'rgb(255, 204, 204)';
    } else if (status === 2) {
      bgColor = 'rgb(255, 229, 204)';
    } else {
      bgColor = 'rgb(153, 255, 153)';
    }
    return bgColor;
  };

  return (
    <Grid container spacing={2} sx={{ p: 5 }}>
      {scorecardList.map((scorecardData, index) => {
        return (
          <Grid item sm={12} md={6} xl={4} key={index}>
            <Link
              to={`/${scorecardData.kpiId}`}
              style={{ textDecoration: 'none' }}
            >
              <Card className="scorecardContainer">
                <CardContent>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: '1.5rem',
                      lineHeight: '2',
                      color: '#01386B',
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    {scorecardData.kpiName}
                    <Box
                      sx={{
                        display: 'flex',
                        margin: 'auto 0',
                      }}
                    >
                      {scorecardData.productLineStatus?.map(
                        (productLineStatus: number, idx: number) => {
                          return (
                            <Tooltip
                              key={idx}
                              title={
                                <Box>
                                  <Typography sx={{ fontSize: '16px' }}>
                                    Product Line {idx + 1}
                                  </Typography>
                                  <Typography sx={{ fontSize: '14px', color: '#CCC' }}>
                                    Status:{' '}
                                    <span
                                      style={{
                                        color: getColor(productLineStatus),
                                      }}
                                    >
                                      {getStatus(productLineStatus)}
                                    </span>
                                  </Typography>
                                </Box>
                              }
                              placement="top"
                              arrow
                              TransitionComponent={Zoom}
                              componentsProps={{
                                tooltip: {
                                  sx: {
                                    bgcolor: 'common.black',
                                    '& .MuiTooltip-arrow': {
                                      color: 'common.black',
                                    },
                                    borderRadius: '10px',
                                  },
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  marginRight:
                                    idx ==
                                    scorecardData.productLineStatus.length - 1
                                      ? 0
                                      : '10px',
                                  fontSize: '.7rem',
                                  height: '20px',
                                  width: '20px',
                                  padding: '4px',
                                  borderRadius: '8px',
                                  backgroundColor: `${getBackgroundColor(
                                    productLineStatus
                                  )}`,
                                  color: getColor(productLineStatus),
                                  border: `1px solid ${getColor(
                                    productLineStatus
                                  )}`,
                                }}
                              >
                                {`PL${idx + 1}`}
                              </Box>
                            </Tooltip>
                          );
                        }
                      )}
                    </Box>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ fontSize: '.8rem' }}
                  >
                    {scorecardData.description}
                  </Typography>
                  <StackedBarChartIcon
                    sx={{ color: '#01386B', fontSize: '3rem' }}
                  />
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
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ScorecardComponent;
