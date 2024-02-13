import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { CategoryType, kpiData } from '../constant';

const DetailsComponent = () => {
  const params = useParams();
  const id = params.kpiId ?? '';
  const [data] = useState(kpiData[id]);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const generateSummary = (categoryDataType: string, category: any) => {
    switch (categoryDataType) {
      case CategoryType.Link:
        return (
          <Box key={category.categoryName}>
            <Typography sx={{ fontWeight: 700, color: 'black' }}>
              {category.categoryName}
            </Typography>
            <ListItem key={category.categoryName}>
              <ListItemIcon>
                <SubdirectoryArrowRightIcon />
              </ListItemIcon>
              <Link to={category.link} target="_blank">
                <Typography sx={{ fontWeight: 700, color: 'black' }}>
                  {category.categoryName}
                </Typography>
              </Link>
            </ListItem>
          </Box>
        );
      case CategoryType.GroupLink:
        return (
          <Box key={category.categoryName}>
            <Typography sx={{ fontWeight: 700 }}>
              {category.categoryName}
            </Typography>
            {category.data.map((linkData: { name: string; link: string }) => {
              return (
                <ListItem key={linkData.name}>
                  <ListItemIcon>
                    <SubdirectoryArrowRightIcon />
                  </ListItemIcon>
                  <Link to={linkData.link} target="_blank">
                    <ListItemText
                      primary={linkData.name}
                      sx={{ color: 'black' }}
                    />
                  </Link>
                </ListItem>
              );
            })}
          </Box>
        );
      case CategoryType.Dashboard:
        return (
          <ListItem key={category.categoryName}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <Link to={`/${params.kpiId}/dosing`} target="_blank">
              <ListItemText
                primary={category.categoryName}
                sx={{ color: 'black' }}
              />
            </Link>
          </ListItem>
        );
      default:
        return <div>No Data</div>;
    }
  };

  return data ? (
    <Box sx={{ p: 8 }}>
      <Typography
        sx={{ fontSize: '48px', fontWeight: 700, color: '#01386B', my: 2 }}
      >
        {data.kpiName}
      </Typography>
      <Typography>{data.kpiDescription}</Typography>
      {data.subKpis.length > 0 && (
        <Typography
          sx={{ fontSize: '24px', fontWeight: 700, color: '#01386B', my: 5 }}
        >
          Sub-Category
        </Typography>
      )}
      {data.subKpis.map((kpi: any) => {
        return (
          <Accordion
            expanded={expanded === kpi.subKpiName}
            onChange={handleChange(kpi.subKpiName)}
            key={kpi.subKpiName}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Box
                className="indicator"
                sx={{ backgroundColor: kpi.color }}
              ></Box>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {kpi.subKpiName}
              </Typography>
              {kpi.shortDescription && (
                <Typography sx={{ color: 'text.secondary' }}>
                  {kpi.shortDescription}
                </Typography>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <List dense={true}>
                {kpi.subCategory.map((category: any) => {
                  return generateSummary(category.type, category);
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
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

export default DetailsComponent;
