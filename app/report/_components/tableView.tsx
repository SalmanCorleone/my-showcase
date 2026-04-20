import React from 'react';
import { getItemData } from '../utils';
import { useLabReportContext } from './labReportContext';
import { RiLineChartLine } from 'react-icons/ri';

export const TableView = () => {
  const { data, activeSection, sectionMap } = useLabReportContext();
  const activeKeys = activeSection ? sectionMap?.[activeSection] : null;

  if (!activeKeys || !data) return null;

  const handleChartClick = (itemName: string) => {
    alert(`Chart for ${itemName} - coming soon!`);
  };

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-md bg-white fade-in">
      <table className="w-full text-left border-collapse min-w-max">
        <thead className="sticky top-0">
          <tr className="bg-indigo-50 border-b border-gray-200">
            <th className="p-2 font-bold text-indigo-900 border-r border-gray-200 sticky left-0 bg-indigo-50 z-10 w-[40px]"></th>
            <th className="p-4 font-bold text-indigo-900 border-r border-gray-200 sticky left-[40px] bg-indigo-50 z-10 min-w-[150px]">
              Item
            </th>
            {Object.keys(data).map((month) => (
              <th key={month} className="p-4 font-semibold text-indigo-800 text-sm min-w-[120px]">
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activeKeys.map((itemName) => {
            const itemData = getItemData(data, itemName);
            return (
              <tr key={itemName} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="p-1 border-r border-gray-200 sticky left-0 bg-white z-10 w-[40px]">
                  <button
                    onClick={() => handleChartClick(itemName)}
                    className="p-1 rounded border border-gray-300 bg-white text-gray-600 hover:border-lime"
                    title="Show Chart"
                  >
                    <RiLineChartLine size={14} />
                  </button>
                </td>
                <td className="p-4 font-bold text-gray-800 border-r border-gray-200 sticky left-[40px] bg-white z-10 min-w-[150px]">
                  {itemName}
                </td>
                {Object.keys(data).map((month) => {
                  const row = itemData.find((d) => d.month === month);
                  return (
                    <td key={month} className="p-4 text-gray-600 min-w-[120px]">
                      {row ? row.value : '-'}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
