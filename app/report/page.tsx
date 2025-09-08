import { Container } from './_components/container';
import { LabReportContextProvider } from './_components/labReportContext';

export default function Home() {
  return (
    <LabReportContextProvider>
      <div className="min-h-screen p-8 pb-20 gap-16">
        <Container />
      </div>
    </LabReportContextProvider>
  );
}
