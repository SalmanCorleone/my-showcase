import { RiRefreshLine } from 'react-icons/ri';
import { useLabReportContext } from './labReportContext';

export const ReportHeader = () => {
  const { updateSection, refreshData, activeSection, sectionMap } = useLabReportContext();

  return (
    <div className="col-span-1 lg:col-span-3 text-white">
      <div className="flex gap-2 flex-wrap">
        {!!sectionMap &&
          Object.keys(sectionMap).map((key) => (
            <button
              onClick={() => updateSection(key)}
              key={key}
              className={`px-2 py-1 border border-gray-300 rounded text-sm cursor-pointer capitalize ${
                key === activeSection ? 'bg-indigo-800 text-white' : 'bg-white text-gray-800'
              }`}
            >
              {key}
            </button>
          ))}
        <button
          onClick={() => refreshData()}
          className={`px-2 py-1 border border-gray-300 rounded text-sm cursor-pointer capitalize ${'bg-white text-orange-800'}`}
        >
          <RiRefreshLine className="inline mr-1" />
          Refresh
        </button>
      </div>
    </div>
  );
};
