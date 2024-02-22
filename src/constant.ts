export enum CategoryType {
  Link = 'Link',
  Group = 'Group',
  Dashboard = 'Dashboard',
  Question = 'Question',
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

export enum Frequency {
  Monthly = 'Monthly',
  Quarterly = 'Quarterly',
  Anually = 'Anually',
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
    frequency: Frequency.Monthly,
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
    frequency: Frequency.Monthly,
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
    frequency: Frequency.Monthly,
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
    frequency: Frequency.Monthly,
  },
  {
    kpiId: 'supply_chain_resilience',
    kpiName: 'Supply Chain Resilience',
    productLineStatus: [
      IndicatorType.Danger,
      IndicatorType.Danger,
      IndicatorType.Danger,
    ],
    description: `Ensuring the supply chain's resilience by strategically planning and managing risks, ensuring stability and adaptability to disruptions in the process.`,
    frequency: Frequency.Quarterly,
  },
  {
    kpiId: 'cpi_meeting',
    kpiName: 'CPI Meeting',
    productLineStatus: [
      IndicatorType.Warning,
      IndicatorType.Positive,
      IndicatorType.Warning,
    ],
    description:
      'CPI meetings help in the ongoing improvement of products, services or processes through incremental and breakthrough improvements.',
    frequency: Frequency.Monthly,
  },
  {
    kpiId: 'spend_management',
    kpiName: 'Spend Management',
    productLineStatus: [
      IndicatorType.Danger,
      IndicatorType.Positive,
      IndicatorType.Danger,
    ],
    description:
      'Optimizing spend across the organization by implementing strategic processes and tools to manage costs effectively and drive value.',
    frequency: Frequency.Monthly,
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
    frequency: Frequency.Anually,
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
    frequency: Frequency.Quarterly,
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
    frequency: Frequency.Monthly,
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
    frequency: Frequency.Monthly,
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
    frequency: Frequency.Monthly,
  },
];

export const kpiData: { [index: string]: any } = {
  warranty: {
    kpiName: 'Warranty Management',
    kpiDescription: `Warranty management entails administering warranty terms for products or services, including tracking, processing claims, and ensuring compliance.`,
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
                graphId: 'graph7',
                type: SubGroupType.Dashboard,
                status: IndicatorType.Positive,
              },
              {
                name: 'Mechanical Dosing',
                type: SubGroupType.Dashboard,
                graphId: 'graph46',
                status: IndicatorType.Positive,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Dashboard,
            graphId: 'graph47',
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
            type: CategoryType.Dashboard,
            graphId: 'graph48',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Dashboard,
            graphId: 'graph49',
            status: IndicatorType.Positive,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Dashboard,
            graphId: 'graph50',
            status: IndicatorType.Danger,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Dashboard,
            graphId: 'graph51',
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
                graphId: 'graph52',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Dashboard,
                graphId: 'graph53',
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
    kpiDescription: `Compliance involves adhering to regulatory standards, industry guidelines, and internal policies to ensure legal and ethical conformity within an organization.`,
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
    kpiDescription: `Designing products to maximize value perception and cost-efficiency, aligning with customer needs and market demands.`,
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
    kpiDescription: `Tracking and optimizing product costs over time to ensure competitiveness and profitability in the market.`,
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
                link: 'graph9',
                status: IndicatorType.Warning,
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: 'graph10',
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
            link: 'graph11',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: 'graph13',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: 'graph12',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Link,
            link: 'graph14',
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
                link: 'graph15',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Dashboard,
                link: 'graph15',
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
    kpiDescription: `Ensuring the supply chain's resilience by strategically planning and managing risks, ensuring stability and adaptability to disruptions in the process.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Danger,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Link,
            link: '',
            status: IndicatorType.Warning,
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
        status: IndicatorType.Danger,
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
        status: IndicatorType.Danger,
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
    kpiDescription: `CPI meetings help in the ongoing improvement of products, services or processes through incremental and breakthrough improvements.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            type: CategoryType.Question,
            question: 'Is the next CPI meeting planned?',
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Positive,
        subCategory: [
          {
            type: CategoryType.Question,
            question: 'Is the next CPI meeting planned?',
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            type: CategoryType.Question,
            question: 'Is the next CPI meeting planned?',
          },
        ],
      },
    ],
    site: 'https://grundfos.etq.com/prod/rel/#/app/auth/login',
  },
  spend_management: {
    kpiName: 'Spend Management',
    kpiDescription: `Optimizing spend across the organization by implementing strategic processes and tools to manage costs effectively and drive value.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Danger,
        subCategory: [
          {
            categoryName: 'DP',
            type: CategoryType.Dashboard,
            graphId: 'graph16',
            status: IndicatorType.Positive,
          },
          {
            categoryName: 'PLM',
            type: CategoryType.Dashboard,
            graphId: 'graph17',
            status: IndicatorType.Danger,
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'DP',
            type: CategoryType.Dashboard,
            graphId: 'graph18',
            status: IndicatorType.Positive,
          },
          {
            categoryName: 'PLM',
            type: CategoryType.Dashboard,
            graphId: 'graph19',
            status: IndicatorType.Positive,
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Danger,
        subCategory: [
          {
            categoryName: 'DP',
            type: CategoryType.Dashboard,
            graphId: 'graph20',
            status: IndicatorType.Positive,
          },
          {
            categoryName: 'PLM',
            type: CategoryType.Dashboard,
            graphId: 'graph21',
            status: IndicatorType.Danger,
          },
        ],
      },
    ],
    site: 'https://app.powerbi.com/groups/me/apps/bf4121d9-d32a-495b-8b9f-86a3019efc6a/reports/6feb6745-27ad-408e-b07d-be333f30786a/ReportSection8dc8d46700ad2b83708c?experience=power-bi',
  },
  intellectual_property_management: {
    kpiName: 'IP Management',
    kpiDescription: `Managing and protecting intellectual property assets through legal frameworks and strategic practices to ensure their value and integrity are maintained.`,
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
    kpiDescription: `Analyzing competitors to identify strengths, weaknesses, and strategies, aiding in making informed business decisions and improving market competitiveness.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            type: CategoryType.Question,
            question: 'Touch base with CA team?',
          },
          {
            type: CategoryType.Question,
            question: 'Reports from CA team?',
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            type: CategoryType.Question,
            question: 'Touch base with CA team?',
          },
          {
            type: CategoryType.Question,
            question: 'Reports from CA team?',
          },
        ],
      },
      {
        subKpiName: 'Motors and Drives',
        shortDescription: 'Short description related to Motors and Drives...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            type: CategoryType.Question,
            question: 'Touch base with CA team?',
          },
          {
            type: CategoryType.Question,
            question: 'Reports from CA team?',
          },
        ],
      },
    ],
    site: '',
  },
  sales_volume: {
    kpiName: 'Sales Volume',
    kpiDescription: `Tracking and analyzing sales quantities to understand market trends and optimize sales strategies for improved revenue generation and market performance.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing and Disinfection graph',
            type: CategoryType.Dashboard,
            graphId: 'graph22',
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
            type: CategoryType.Group,
            data: [
              {
                name: 'Small CR',
                type: SubGroupType.Dashboard,
                graphId: 'graph24',
                status: IndicatorType.Warning,
              },
              {
                name: 'Large CR',
                type: SubGroupType.Dashboard,
                graphId: 'graph25',
                status: IndicatorType.Warning,
              },
              {
                name: 'Small CRE',
                type: SubGroupType.Dashboard,
                graphId: 'graph26',
                status: IndicatorType.Warning,
              },
              {
                name: 'Large CRE',
                type: SubGroupType.Dashboard,
                graphId: 'graph27',
                status: IndicatorType.Warning,
              },
            ],
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Group,
            data: [
              {
                name: 'CM',
                type: SubGroupType.Dashboard,
                graphId: 'graph29',
                status: IndicatorType.Warning,
              },
              {
                name: 'CME',
                type: SubGroupType.Dashboard,
                graphId: 'graph30',
                status: IndicatorType.Warning,
              },
            ],
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Dashboard,
            graphId: 'graph28',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Group,
            data: [
              {
                name: 'MT',
                type: SubGroupType.Dashboard,
                graphId: 'graph31',
                status: IndicatorType.Warning,
              },
              {
                name: 'MTE',
                type: SubGroupType.Dashboard,
                graphId: 'graph32',
                status: IndicatorType.Warning,
              },
            ],
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
                graphId: 'graph33',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Dashboard,
                graphId: 'graph34',
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
    kpiDescription: `Analyzing and managing sales revenue to optimize pricing, promotions, and distribution strategies for increased profitability and market competitiveness.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        status: IndicatorType.Warning,
        subCategory: [
          {
            categoryName: 'Dosing and Disinfection graph',
            type: CategoryType.Dashboard,
            graphId: 'graph23',
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
            type: CategoryType.Group,
            data: [
              {
                name: 'Small CR',
                type: SubGroupType.Dashboard,
                graphId: 'graph35',
                status: IndicatorType.Warning,
              },
              {
                name: 'Large CR',
                type: SubGroupType.Dashboard,
                graphId: 'graph36',
                status: IndicatorType.Warning,
              },
              {
                name: 'Small CRE',
                type: SubGroupType.Dashboard,
                graphId: 'graph37',
                status: IndicatorType.Warning,
              },
              {
                name: 'Large CRE',
                type: SubGroupType.Dashboard,
                graphId: 'graph38',
                status: IndicatorType.Warning,
              },
            ],
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'CM',
            type: CategoryType.Group,
            data: [
              {
                name: 'CM',
                type: SubGroupType.Dashboard,
                graphId: 'graph40',
                status: IndicatorType.Warning,
              },
              {
                name: 'CME',
                type: SubGroupType.Dashboard,
                graphId: 'graph41',
                status: IndicatorType.Warning,
              },
            ],
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'BM',
            type: CategoryType.Dashboard,
            graphId: 'graph39',
            status: IndicatorType.Warning,
          },
          {
            categoryName: 'MT',
            type: CategoryType.Group,
            data: [
              {
                name: 'MT',
                type: SubGroupType.Dashboard,
                graphId: 'graph42',
                status: IndicatorType.Warning,
              },
              {
                name: 'MTE',
                type: SubGroupType.Dashboard,
                graphId: 'graph43',
                status: IndicatorType.Warning,
              },
            ],
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
                graphId: 'graph44',
                status: IndicatorType.Warning,
              },
              {
                name: 'Drives',
                type: SubGroupType.Dashboard,
                graphId: 'graph45',
                status: IndicatorType.Warning,
              },
            ],
          },
        ],
      },
    ],
    site: '',
  },
  npss: {
    kpiName: 'New Product Share of Sales (NPSS)',
    kpiDescription: `Tracking and optimizing the market share of new products in terms of sales to drive strategic decisions and product development initiatives.`,
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
