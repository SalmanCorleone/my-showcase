import { getItemData, mapItemReportToChartData, parseRefRange } from '../utils';
import { CustomLineChart } from './customLineChart';
import { useLabReportContext } from './labReportContext';

export const ChartView = () => {
  const { data, activeSection, sectionMap } = useLabReportContext();
  const activeKeys = activeSection ? sectionMap?.[activeSection] : null;

  if (!activeKeys || !data) return null;

  const chartableItems = activeKeys.filter((itemName) => {
    const itemData = getItemData(data, itemName);
    return typeof itemData[0]?.value === 'number';
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {chartableItems.map((itemName) => {
        const itemData = getItemData(data, itemName);
        return (
          <div
            key={itemName}
            className="border border-gray-100 p-4 rounded-xl shadow-md fade-in text-gray-700 bg-white"
          >
            <h2 className="font-bold text-2xl">{itemName}</h2>
            <p className="text-gray-500 text-xs mb-2">
              ref: {itemData[0]?.ref_range || undefined} {itemData[0]?.unit || 'unit'}
            </p>
            <CustomLineChart
              data={mapItemReportToChartData(itemData)}
              refRange={parseRefRange(itemData[0]?.ref_range, itemName)}
            />
          </div>
        );
      })}
    </div>
  );
};
