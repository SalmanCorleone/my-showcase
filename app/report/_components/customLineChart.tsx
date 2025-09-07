import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import { getMedian } from '../utils';

const medianPadding = 1;

interface CustomLineChartProps {
  refRange?: [number, number];
  data?: { key: string; value: number }[];
}

export const CustomLineChart = (props: CustomLineChartProps) => {
  const { refRange, data } = props;

  const median = useMemo(() => (data ? getMedian(data) : 0), [data]);

  return (
    <ResponsiveContainer width="100%" height={300} style={{ border: '1px solid #ccc', borderRadius: '8px' }}>
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" />
        <YAxis domain={[median - medianPadding, median + medianPadding]} tickFormatter={(value) => value.toFixed(2)} />
        <Tooltip contentStyle={{ backgroundColor: 'var(--color-gray-800)', borderRadius: 4 }} />

        {/* Shaded range zone */}
        {!!refRange && <ReferenceArea y1={refRange[0]} y2={refRange[1]} strokeOpacity={0.3} fill="lightgreen" />}

        {/* Actual line values */}
        <Line type="monotone" dataKey="value" stroke="var(--color-indigo-300)" strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
};
