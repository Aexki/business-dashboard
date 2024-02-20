export enum CategoryType {
  Link = 'Link',
  Group = 'Group',
  Dashboard = 'Dashboard',
}

export enum SubGroupType {
  Link = 'Link',
  Dashboard = 'Dashboard',
}

export enum IndicatorType {
  Danger = 1,
  Warning = 2,
  Positive = 3,
}

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getStatus = (statusCode: number): string => {
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

export const getColor = (status: number): string => {
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

export const getBackgroundColor = (status: number): string => {
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

export const scorecardList = [
  {
    kpiId: 'warranty',
    kpiName: 'Warranty Management',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Danger,
      IndicatorType.Warning,
    ],
    description:
      'Warranty management entails administering warranty terms for products or services, including tracking, processing claims, and ensuring compliance.',
  },
  {
    kpiId: 'compliance',
    kpiName: 'Compliance',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    description:
      'Compliance involves adhering to regulatory standards, industry guidelines, and internal policies to ensure legal and ethical conformity within an organization.',
  },
  {
    kpiId: 'design_to_value',
    kpiName: 'Design To Value',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    description:
      'Designing products to maximize value perception and cost-efficiency, aligning with customer needs and market demands.',
  },
  {
    kpiId: 'pci',
    kpiName: 'Product Cost Index',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    description:
      'Tracking and optimizing product costs over time to ensure competitiveness and profitability in the market.',
  },
  {
    kpiId: 'supply_chain_resilience',
    kpiName: 'Supply Chain Resilience',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    description: `Ensuring the supply chain's resilience by strategically planning and managing risks, ensuring stability and adaptability to disruptions in the process.`,
  },
  {
    kpiId: 'cpi_meeting',
    kpiName: 'CPI Meeting',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    description:
      'CPI Meeting focuses on Cost Performance Index, analyzing project cost efficiency, and identifying areas for cost optimization and budget control.',
  },
  {
    kpiId: 'spend_management',
    kpiName: 'Spend Management',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    description:
      'Optimizing spend across the organization by implementing strategic processes and tools to manage costs effectively and drive value.',
  },
  {
    kpiId: 'intellectual_property_management',
    kpiName: 'Intellectual Property Management',
    productLineStatus: [
      IndicatorType.Positive,
      IndicatorType.Positive,
      IndicatorType.Positive,
    ],
    description:
      'Managing and protecting intellectual property assets through legal frameworks and strategic practices to ensure their value and integrity are maintained.',
  },
  {
    kpiId: 'competitive_analysis',
    kpiName: 'Competitive Analysis',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    description:
      'Analyzing competitors to identify strengths, weaknesses, and strategies, aiding in making informed business decisions and improving market competitiveness.',
  },
  {
    kpiId: 'sales_volume',
    kpiName: 'Sales Volume',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    site: '',
    description:
      'Tracking and analyzing sales quantities to understand market trends and optimize sales strategies for improved revenue generation and market performance.',
  },
  {
    kpiId: 'sales_revenue',
    kpiName: 'Sales Revenue',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Warning,
      IndicatorType.Warning,
    ],
    site: '',
    description:
      'Analyzing and managing sales revenue to optimize pricing, promotions, and distribution strategies for increased profitability and market competitiveness.',
  },
  {
    kpiId: 'npss',
    kpiName: 'NPSS-New Product Share of Sales',
    productLineStatus: [
      IndicatorType.Positive,
      IndicatorType.Warning,
      IndicatorType.Positive,
    ],
    description:
      'Tracking and optimizing the market share of new products in terms of sales to drive strategic decisions and product development initiatives.',
  },
];

export const kpiData: { [index: string]: any } = {
  warranty: {
    kpiName: 'Warranty Management',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Positive,
            data: [
              {
                name: 'Digital Dosing',
                link: 'graph7',
                type: SubGroupType.Dashboard,
                status: IndicatorType.Positive,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Dashboard,
                link: 'graph7',
                status: IndicatorType.Positive,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: 'graph7',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Danger,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: 'graph7',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: 'graph7',
            status: IndicatorType.Positive,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: 'graph7',
            status: IndicatorType.Danger,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: 'graph7',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Dashboard,
                link: 'graph7',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Dashboard,
                link: '24',
                status: null,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: 'https://app.powerbi.com/groups/me/apps/ac1d8048-52ce-4cd2-9ffc-336677ad9e37/reports/6c1426f3-ff16-4318-be63-90c1c613c9f8/ReportSection5af66cbc68eb57ea40b4?experience=power-bi',
  },
  compliance: {
    kpiName: 'Compliance',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
  },
  design_to_value: {
    kpiName: 'Design To Value',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Dashboard,
                link: 'graph7',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Dashboard,
                link: '24',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: 'https://login.sievo.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DGrundfos_PPM%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520offline_access%2520userdetails%2520is_api%2520sievo_uid%26state%3DOpenIdConnect.AuthenticationProperties%253DQQwwr9-zYqAzaQaPKo6ZOhqyA_oi_Wlfp3RDeu40nHrw-XDr4zyJXinJvxmPxOoqNiauOjDmBXm1UKhtTMT-JsKrBXt6yXXk19uU5V2rveYFgXjcq0ifH5SbVQG4Itqe%26response_mode%3Dform_post%26nonce%3D638438515690273381.Njk5ZjAwNjEtYWM3My00OTQyLTkyMzgtYm',
  },
  pci: {
    kpiName: 'Product Cost Index',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Dashboard,
                link: 'graph8',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Dashboard,
                link: 'graph8',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: 'graph8',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: 'graph8',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: 'graph8',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: 'graph8',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: 'graph8',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Dashboard,
                link: 'graph8',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Dashboard,
                link: 'graph8',
                status: IndicatorType.Warning,
              },
            ],
          },
        ],
      },
    ],
    site: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/ed66521a-14b1-459e-8388-39497cb95fa4/ReportSection23d6d76fba0763280870?experience=power-bi',
  },
  supply_chain_resilience: {
    kpiName: 'Supply Chain Resilience',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: '',
  },
  cpi_meeting: {
    kpiName: 'CPI Meeting',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: 'https://grundfos.etq.com/prod/rel/#/app/auth/login',
  },
  spend_management: {
    kpiName: 'Spend Management',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: 'https://app.powerbi.com/groups/me/apps/afd66893-3275-4c81-9051-9a0f66139869/reports/24e546db-65f2-439f-a89f-9382b6014506/ReportSection05b44a1ad1141cd715ee?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi&clientSideAuth=0',
  },
  intellectual_property_management: {
    kpiName: 'IP Management',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Positive,
        subCategory: [
          {
            categoryName:
              'Dosing and Disinfection Graph - Patent count per year',
            status: IndicatorType.Positive,
            type: CategoryType.Dashboard,
            graphId: 'graph1',
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'Multistage Graph - Patent count per year',
            status: IndicatorType.Positive,
            type: CategoryType.Dashboard,
            graphId: 'graph2',
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph - Patent count per year',
            status: IndicatorType.Positive,
            type: CategoryType.Dashboard,
            graphId: 'graph3',
          },
        ],
      },
    ],
    site: '',
  },
  competitive_analysis: {
    kpiName: 'Competitive Analysis',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: '',
  },
  sales_volume: {
    kpiName: 'Sales Volume',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: '',
  },
  sales_revenue: {
    kpiName: 'Sales Revenue',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Group,
            status: IndicatorType.Warning,
            data: [
              {
                name: 'Digital Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph',
            status: IndicatorType.Warning,
            type: CategoryType.Group,
            data: [
              {
                name: 'Motors',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Link,
                link: '',
                status: IndicatorType.Warning,
              },
            ],
          },
          // Drive - 36, 37, 38
          // Motors - 48, 19, 50, 51
        ],
      },
    ],
    site: '',
  },
  npss: {
    kpiName: 'New Product Share of Sales (NPSS)',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'Dosing and Disinfection Graph - Target vs Actual',
            status: IndicatorType.Positive,
            type: CategoryType.Dashboard,
            graphId: 'graph4',
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Multistage Graph - Target vs Actual',
            status: IndicatorType.Warning,
            type: CategoryType.Dashboard,
            graphId: 'graph5',
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'Motors and Drives Graph - Target vs Actual',
            status: IndicatorType.Positive,
            type: CategoryType.Dashboard,
            graphId: 'graph6',
          },
        ],
      },
    ],
    site: 'https://app.powerbi.com/groups/me/apps/afd66893-3275-4c81-9051-9a0f66139869/reports/24e546db-65f2-439f-a89f-9382b6014506/ReportSection05b44a1ad1141cd715ee?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi&clientSideAuth=0',
  },
};
