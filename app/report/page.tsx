import { Container } from './_components/container';
import { LabReportContextProvider } from './_components/labReportContext';

export default function Home() {
  return (
    <LabReportContextProvider>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <Container />
      </div>
    </LabReportContextProvider>
  );
}
