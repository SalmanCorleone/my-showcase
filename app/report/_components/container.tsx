'use client';

import { CardSummary } from './cardSummary';
import { ReportHeader } from './reportHeader';
import { useLabReportContext } from './labReportContext';
import { PasswordInput } from './passwordInput';

export const Container = () => {
  const { data, activeSection, sectionMap } = useLabReportContext();

  const activeKeys = activeSection ? sectionMap?.[activeSection] : null;

  return (
    <div>
      {!!data ? (
        <div className="flex flex-col gap-8">
          <ReportHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {!!activeKeys && activeKeys.map((itemName) => <CardSummary key={itemName} itemName={itemName} />)}
          </div>
        </div>
      ) : (
        <PasswordInput />
      )}
    </div>
  );
};
