import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { CategoryType, SubGroupType, getColor, kpiData } from '../../constant';
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
              (subData: {
                name: string;
                type: string;
                status: number;
                link?: string;
                graphId?: string;
              }) => {
                return (
                  <ListItem key={subData.name}>
                    <ListItemIcon>
                      <SubdirectoryArrowRightIcon sx={{ ml: 1 }} />
                    </ListItemIcon>
                    <CircleIcon
                      sx={{ color: getColor(subData.status), fontSize: 10 }}
                    />
                    &emsp;
                    {subData.type === SubGroupType.Dashboard ? (
                      <Link to={`/${params.kpiId}/${subData.graphId}`}>
                        <ListItemText
                          primary={subData.name}
                          sx={{ color: 'black' }}
                        />
                      </Link>
                    ) : (
                      <Link to={subData.link ?? ''} target="_blank">
                        <ListItemText
                          primary={subData.name}
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon
              sx={{ color: getColor(category.status), fontSize: 10 }}
            />
            <ListItem key={category.categoryName}>
              <Link to={`/${params.kpiId}/${category.graphId}`}>
                <ListItemText
                  primary={category.categoryName}
                  sx={{ color: 'black' }}
                />
              </Link>
            </ListItem>
          </Box>
        );
      case CategoryType.Question:
        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <ListItem
              key={category.question}
              sx={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>
                <b>Q.</b>&emsp;{category.question}
              </Typography>
              <RadioGroup row>
                &emsp;&emsp;
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      sx={{
                        color: 'green',
                        '&.Mui-checked': {
                          color: 'green',
                        },
                      }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      sx={{
                        color: 'red',
                        '&.Mui-checked': {
                          color: 'red',
                        },
                      }}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
            </ListItem>
          </Box>
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
      <Typography sx={{ fontSize: '18px' }}>{data.kpiDescription}</Typography>
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
          <Typography>Link to Grundfos site for {data.kpiName}</Typography>
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
