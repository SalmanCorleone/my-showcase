import { getItemData, mapItemReportToChartData } from '../utils';
import { CustomLineChart } from './customLineChart';
import { useLabReportContext } from './labReportContext';

interface CardSummaryProps {
  itemName: string;
}

export const CardSummary = ({ itemName }: CardSummaryProps) => {
  const { data } = useLabReportContext();
  const summary = getItemData(data, itemName);

  return (
    <div className="border border-gray-600 p-4 rounded-xl shadow-md fade-in text-gray-300 bg-gray-900">
      <h2 className="font-bold text-3xl">{itemName}</h2>
      <p className="text-gray-500 text-xs">
        ref: {summary[0]?.ref_range || undefined} {summary[0]?.unit || 'unit'}
      </p>

      <div className="flex flex-col gap-1">
        {summary.map((dataRow, index) => (
          <div key={index} className="p-2 flex gap-4 items-center">
            <h2 className="text-2xl">{dataRow.value}</h2>
            <p>{dataRow.month}</p>
          </div>
        ))}
      </div>

      <CustomLineChart data={mapItemReportToChartData(summary)} />
    </div>
  );
};
