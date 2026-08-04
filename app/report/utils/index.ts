export const getItemData = (data: Data | undefined, key: string) => {
  if (!data) return [];
  const itemData = Object.keys(data).reduce((acc, month) => {
    const dataRow = data[month].find((item) => item.key.toLowerCase() === key.toLowerCase());
    if (dataRow)
      return [
        ...acc,
        {
          ...dataRow,
          month,
          value: key === 'Creatinine' && dataRow.value > 100 ? +(dataRow.value / 88.4).toFixed(2) : dataRow.value,
        },
      ];
    return acc;
  }, [] as ItemReport[]);

  return itemData;
};

export interface ChartDataPoint {
  key: string;
  value: number;
}

export const mapItemReportToChartData = (itemReports: ItemReport[]): ChartDataPoint[] => {
  return itemReports.map((report) => ({
    key: report.month || '',
    value: report.value,
  }));
};

export const getMedian = (data: ChartDataPoint[]): number => {
  if (!data.length) return 0;
  const values = data.map((d) => d.value).sort((a, b) => a - b);
  const mid = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    return (values[mid - 1] + values[mid]) / 2;
  } else {
    return values[mid];
  }
};

export const parseRefRange = (refRange?: string | null, itemName?: string): [number, number] | undefined => {
  if (!refRange) return undefined;
  const match = refRange.trim().match(/^([\d.]+)\s*-\s*([\d.]+)$/);
  if (!match) return undefined;
  let range: [number, number] = [Number(match[1]), Number(match[2])];
  if (itemName === 'Creatinine' && range[1] > 100) {
    range = [+(range[0] / 88.4).toFixed(2), +(range[1] / 88.4).toFixed(2)];
  }
  return range;
};
