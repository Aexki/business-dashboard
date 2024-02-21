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
import {
  getBackgroundColor,
  getColor,
  getStatus,
  scorecardList,
} from '../../constant';

const ScorecardComponent = () => {
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
                                  {idx === 0 ? 'Dosing and Disinfection' : idx === 1 ? 'Multistage' : 'Motors and Drive'}
                                  </Typography>
                                  <Typography
                                    sx={{ fontSize: '14px', color: '#CCC' }}
                                  >
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
                                    idx ===
                                    scorecardData.productLineStatus.length - 1
                                      ? 0
                                      : '10px',
                                  fontSize: '.7rem',
                                  height: '20px',
                                  width: '30px',
                                  padding: '4px',
                                  borderRadius: '8px',
                                  backgroundColor: `${getBackgroundColor(
                                    productLineStatus
                                  )}`,
                                  color: getColor(productLineStatus),
                                  border: `1px solid ${getColor(
                                    productLineStatus
                                  )}`,
                                  textAlign: 'center',
                                }}
                              >
                                {idx === 0 ? 'D&D' : idx === 1 ? 'MS' : 'M&D'}
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
                    Updated {scorecardData.frequency}
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
