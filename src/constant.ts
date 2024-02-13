export enum CategoryType {
  Link = 'Link',
  GroupLink = 'GroupLink',
  Dashboard = 'Dashboard',
}

export enum IndicatorType {
  Positive = 'green',
  Danger = 'red',
  Neutral = 'transparent',
}

export const scorecardList = [
  {
    kpiId: 'warranty',
    kpiName: 'Warranty Management',
    description:
      'Warranty management entails administering warranty terms for products or services, including tracking, processing claims, and ensuring compliance.',
  },
  {
    kpiId: 'compliance',
    kpiName: 'Compliance',
    description:
      'Compliance involves adhering to regulatory standards, industry guidelines, and internal policies to ensure legal and ethical conformity within an organization.',
  },
  {
    kpiId: 'design_to_value',
    kpiName: 'Design To Value',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'pci',
    kpiName: 'Product Cost Index',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'suc',
    kpiName: 'SUC',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'supply_chain_resilience',
    kpiName: 'Supply Chain Resilience',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'cpi_meeting',
    kpiName: 'CPI Meeting',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'spend_management',
    kpiName: 'Spend Management',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'intellectual_property_management',
    kpiName: 'Intellectual Property Management',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'competitive_analysis',
    kpiName: 'Competitive Analysis',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'sales_volumne',
    kpiName: 'Sales Volume',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'sales_revenue',
    kpiName: 'Sales Revenue',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'npss',
    kpiName: 'NPSS-New Product Share of Sales',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export const kpiData: { [index: string]: any } = {
  warranty: {
    kpiName: 'Warranty Management',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [],
  },
  intellectual_property_management: {
    kpiName: 'IP Management',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Patent Portfolio (Live Patents)',
        shortDescription:
          'Short description related to Patent Portfolio(live patents)...',
        color: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'D&D',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'Multistage',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'M&D',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
        ],
      },
      {
        subKpiName: 'PATENT EFFICIENCY RATIO',
        shortDescription:
          'Short description related to PATENT EFFICIENCY RATIO...',
        color: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'D&D',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'Multistage',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'M&D',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
        ],
      },
    ],
  },
  compliance: {
    kpiName: 'Compliance',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        color: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        color: IndicatorType.Danger,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'CM',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/reports/421b3a06-9a52-49ec-a3e0-99508974885b/ReportSectionab86c1770124958c7d71?ctid=dabd5d90-87c2-44c9-93cd-783e03236e40&experience=power-bi',
          },
          {
            categoryName: 'MT',
            type: CategoryType.Dashboard,
          },
        ],
      },
    ],
  },
  pci: {
    kpiName: 'Product Cost Index',
    kpiDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    subKpis: [
      {
        subKpiName: 'Dosing & Disinfection',
        shortDescription:
          'Short description related to dosing & disinfection...',
        color: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'Dosing',
            type: CategoryType.GroupLink,
            data: [
              {
                name: 'Digital Dosing',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
              {
                name: 'Mechanical Dosing',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
            ],
          },
          {
            categoryName: 'Disinfection',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
          },
        ],
      },
      {
        subKpiName: 'Multistage',
        shortDescription: 'Short description related to Multistage...',
        color: IndicatorType.Positive,
        subCategory: [
          {
            categoryName: 'CR',
            type: CategoryType.GroupLink,
            data: [
              {
                name: 'Large CR',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
              {
                name: 'Large CRE',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
              {
                name: 'Small CR',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
              {
                name: 'Small CRE',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
            ],
          },
          {
            categoryName: 'CM',
            type: CategoryType.GroupLink,
            data: [
              {
                name: 'CM',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
              {
                name: 'CME',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
            ],
          },
          {
            categoryName: 'BM',
            type: CategoryType.Link,
            link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
          },
          {
            categoryName: 'MT',
            type: CategoryType.GroupLink,
            data: [
              {
                name: 'MT',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
              {
                name: 'MTE',
                link: 'https://app.powerbi.com/groups/me/apps/daec3be8-3b9b-490f-9bac-6e05c6f07a9b/reports/175ade95-aaa8-49b5-ade0-d78399229326/ReportSection23d6d76fba0763280870?experience=power-bi',
              },
            ],
          },
        ],
      },
    ],
  },
};
