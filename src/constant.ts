export enum CategoryType {
  Link = 'Link',
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
    kpiName: 'WARRANTY MANAGEMENT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'compliance',
    kpiName: 'COMPLIANCE',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'design_to_value',
    kpiName: 'DESIGN TO VALUE',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'pctr',
    kpiName: 'PCTR',
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
    kpiName: 'SUPPLY CHAIN RESILIENCE',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'cpi_meeting',
    kpiName: 'CPI MEETING',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'spend_management',
    kpiName: 'SPEND MANAGEMENT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'intellectual_property_management',
    kpiName: 'INTELLECTUAL PROPERTY MANAGEMENT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'competitive_analysis',
    kpiName: 'COMPETITIVE ANALYSIS',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'sales_volumne',
    kpiName: 'SALES VOLUME',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'sales_revenue',
    kpiName: 'SALES REVENUE',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    kpiId: 'npss',
    kpiName: 'NPSS-New Product Share of Sales',
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
};
