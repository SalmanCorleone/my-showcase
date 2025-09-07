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

export const mapItemReportToChartData = (itemReports: ItemReport[]) => {
  return itemReports.map((report) => ({
    key: report.month || '',
    value: report.value,
  }));
};

export const getMedian = (data: { key: string; value: number }[]): number => {
  if (!data.length) return 0;
  const values = data.map((d) => d.value).sort((a, b) => a - b);
  const mid = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    return (values[mid - 1] + values[mid]) / 2;
  } else {
    return values[mid];
  }
};
