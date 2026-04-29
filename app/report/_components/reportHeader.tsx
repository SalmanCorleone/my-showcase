import { ToggleButtonGroup } from '@/components/toggleButtonGroup';
import { RiLayoutGridLine, RiRefreshLine, RiTableLine } from 'react-icons/ri';
import { useLabReportContext } from './labReportContext';

export const ReportHeader = () => {
  const { updateSection, refreshData, activeSection, sectionMap, viewMode, setViewMode } = useLabReportContext();

  const viewOptions = [
    {
      value: 'table',
      icon: <RiTableLine size={16} />,
      title: 'Table View',
    },
    {
      value: 'card',
      icon: <RiLayoutGridLine size={16} />,
      title: 'Card View',
    },
  ];

  return (
    <div className="col-span-1 lg:col-span-3 text-white">
      <div className="flex gap-2 flex-wrap justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          <ToggleButtonGroup
            options={Object.keys(sectionMap || {}).map((key) => ({
              value: key,
              icon: null,
              title: key,
            }))}
            activeValue={activeSection || ''}
            onChange={(val) => updateSection(val)}
            className="bg-transparent border-none p-0 flex-wrap gap-2"
          />
          <button
            onClick={() => refreshData()}
            className={`px-2 py-1 border border-gray-300 rounded text-sm cursor-pointer capitalize ${'bg-white text-orange-800'}`}
          >
            <RiRefreshLine className="inline mr-1" />
            Refresh
          </button>
        </div>

        <ToggleButtonGroup
          options={viewOptions}
          activeValue={viewMode}
          onChange={(val) => setViewMode(val as 'card' | 'table')}
        />
      </div>
    </div>
  );
};
