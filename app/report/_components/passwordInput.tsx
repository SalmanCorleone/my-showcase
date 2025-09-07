'use client';

import { useState } from 'react';
import { useLabReportContext } from './labReportContext';

export const PasswordInput = () => {
  const [pass, setPass] = useState<number>();

  const { decodeData } = useLabReportContext();

  const handleSubmit = () => {
    if (!pass) return;
    decodeData(pass);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl h-full flex flex-col items-center justify-center gap-8 p-12 md:p-24 rounded-2xl min-h-[calc(90vh-80px)]">
      <div>
        <h2 className="text-gray-200 font-bold text-3xl text-center">Enter Password</h2>
      </div>
      <div>
        <input
          type="number"
          className="border border-gray-200 rounded-xl text-2xl text-gray-200 w-[16rem] p-4"
          placeholder="Enter secret N"
          value={pass}
          onChange={(e) => setPass(+e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </div>
      <div className="">
        <button
          className="py-4 px-24 bg-indigo-800 text-white rounded-xl text-2xl cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
