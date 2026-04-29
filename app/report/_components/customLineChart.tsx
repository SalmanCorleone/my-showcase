import { useMemo } from 'react';
import { CartesianGrid, Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartDataPoint, getMedian } from '../utils';

const medianPadding = 1;

interface CustomLineChartProps {
  refRange?: [number, number];
  data?: ChartDataPoint[];
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
        <Tooltip contentStyle={{ backgroundColor: '#eeeeee', borderRadius: 4, color: 'black' }} />

        {/* Shaded range zone */}
        {!!refRange && <ReferenceArea y1={refRange[0]} y2={refRange[1]} strokeOpacity={0.3} fill="lightgreen" />}

        {/* Actual line values */}
        <Line type="monotone" dataKey="value" stroke="var(--color-indigo-300)" strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
};
