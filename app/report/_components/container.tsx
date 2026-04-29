'use client';

import { CardSummary } from './cardSummary';
import { useLabReportContext } from './labReportContext';
import { PasswordInput } from './passwordInput';
import { ReportHeader } from './reportHeader';
import { TableView } from './tableView';

export const Container = () => {
  const { data, activeSection, sectionMap, viewMode } = useLabReportContext();

  const activeKeys = activeSection ? sectionMap?.[activeSection] : null;

  return (
    <div className="p-4">
      {!!data ? (
        <div className="flex flex-col gap-8">
          <ReportHeader />
          {viewMode === 'card' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {!!activeKeys && activeKeys.map((itemName) => <CardSummary key={itemName} itemName={itemName} />)}
            </div>
          ) : (
            <TableView />
          )}
        </div>
      ) : (
        <PasswordInput />
      )}
    </div>
  );
};
