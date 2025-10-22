'use client';

import { storage, STORAGE_KEYS } from '@/utils/storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type LabReportContextType = {
  activeSection: string | null;
  updateSection: (section: string) => void;
  decodeData: (input: number) => void;
  data?: Data;
  sectionMap?: SectionMap;
  refreshData: () => void;
};

const LabReportContext = createContext<LabReportContextType>({
  activeSection: null as string | null,
  updateSection: () => {},
  decodeData: () => {},
  refreshData: () => {},
});

interface LabReportContextProps {
  children: ReactNode;
}

export const LabReportContextProvider = ({ children }: LabReportContextProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [data, setData] = useState<Data>();
  const [sectionMap, setSectionMap] = useState<SectionMap>();

  useEffect(() => {
    if (!sectionMap) return;
    setActiveSection(Object.keys(sectionMap)[0]);
  }, [sectionMap]);

  useEffect(() => {
    const decoded = storage.get(STORAGE_KEYS.LAB_REPORT_DECODED) as DecodedData | null;
    if (!decoded) return;
    setData(decoded.data);
    setSectionMap(decoded.report_sections);
  }, []);

  const updateSection = (section: string) => {
    setActiveSection(section);
  };

  const decodeData = async (input: number) => {
    try {
      const res = await fetch('files/encoded.json');
      const file = await res.json();

      const decodedJSON = file.data
        .split('')
        .map((c: string) => String.fromCharCode(c.charCodeAt(0) - Number(input)))
        .join('');

      const decoded = JSON.parse(decodedJSON) as DecodedData;
      storage.set(STORAGE_KEYS.LAB_REPORT_DECODED, decoded);
      setData(decoded.data);
      setSectionMap(decoded.report_sections);
    } catch {
      alert('Ask Samil for the correct value');
    }
  };

  const refreshData = () => {
    storage.clear();
    setData(undefined);
    setSectionMap(undefined);
    setActiveSection(null);
  };

  return (
    <LabReportContext.Provider value={{ activeSection, updateSection, decodeData, refreshData, data, sectionMap }}>
      {children}
    </LabReportContext.Provider>
  );
};

export const useLabReportContext = () => useContext(LabReportContext);
