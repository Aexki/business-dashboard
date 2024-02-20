import React, { useState } from 'react';
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
import { Link, useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import {
  CategoryType,
  SubGroupType,
  getBackgroundColor,
  getColor,
  kpiData,
} from '../../constant';
import LinkIcon from '@mui/icons-material/Link';
import BackNavigationComponent from '../common/BackNavigationComponent';
import CircleIcon from '@mui/icons-material/Circle';

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
          <Box
            key={category.categoryName}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <CircleIcon
              sx={{ color: getColor(category.status), fontSize: 10 }}
            />
            &emsp;
            <Link to={category.link} target="_blank">
              <Typography sx={{ fontWeight: 700, color: 'black' }}>
                {category.categoryName}
              </Typography>
            </Link>
          </Box>
        );
      case CategoryType.Group:
        return (
          <Box key={category.categoryName}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CircleIcon
                sx={{ color: getColor(category.status), fontSize: 10 }}
              />
              &emsp;
              <Typography sx={{ fontWeight: 700 }}>
                {category.categoryName}
              </Typography>
            </Box>
            {category.data.map(
              (linkData: {
                name: string;
                type: string;
                status: number;
                link: string;
              }) => {
                return (
                  <ListItem key={linkData.name}>
                    <ListItemIcon>
                      <SubdirectoryArrowRightIcon />
                    </ListItemIcon>
                    <CircleIcon
                      sx={{ color: getColor(linkData.status), fontSize: 10 }}
                    />
                    &emsp;
                    {linkData.type === SubGroupType.Dashboard ? (
                      <Link to={`/${params.kpiId}/${linkData.link}`}>
                        <ListItemText
                          primary={linkData.name}
                          sx={{ color: 'black' }}
                        />
                      </Link>
                    ) : (
                      <Link to={linkData.link} target="_blank">
                        <ListItemText
                          primary={linkData.name}
                          sx={{ color: 'black' }}
                        />
                      </Link>
                    )}
                  </ListItem>
                );
              }
            )}
          </Box>
        );
      case CategoryType.Dashboard:
        return (
          <ListItem key={category.categoryName} sx={{ display: 'flex' }}>
            <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
              <SubdirectoryArrowRightIcon />
              <CircleIcon
                sx={{ color: getColor(category.status), fontSize: 10 }}
              />
              &emsp;
            </ListItemIcon>
            <Link to={`/${params.kpiId}/${category.graphId}`}>
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
    <Box sx={{ p: 8, pt: 4 }}>
      <Box id="detailHeaderContainer" sx={{ display: 'flex' }}>
        <BackNavigationComponent />
        <Typography
          sx={{ fontSize: '48px', fontWeight: 700, color: '#01386B', my: 2 }}
        >
          {data.kpiName}
        </Typography>
      </Box>
      <Typography>{data.kpiDescription}</Typography>
      {data.site && (
        <Link
          to={data.site}
          target="_blank"
          style={{
            display: 'flex',
            marginTop: '40px',
            color: '#01386B',
            textUnderlineOffset: 3,
          }}
        >
          <LinkIcon sx={{ mt: '1px', mr: 1 }} />
          <Typography>Link to Grundfos site for {data.kpiName} KPI</Typography>
        </Link>
      )}
      {data.subKpis.length > 0 && (
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#01386B',
            mt: 5,
            mb: 3,
          }}
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
                sx={{ backgroundColor: getColor(kpi.status) }}
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
