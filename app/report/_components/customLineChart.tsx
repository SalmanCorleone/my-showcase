import { useMemo } from 'react';
import { CartesianGrid, Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartDataPoint } from '../utils';

interface CustomLineChartProps {
  refRange?: [number, number];
  data?: ChartDataPoint[];
}

export const CustomLineChart = (props: CustomLineChartProps) => {
  const { refRange, data } = props;

  const domain = useMemo<[number, number]>(() => {
    const values = data ? data.map((d) => d.value) : [];
    const dataMin = values.length ? Math.min(...values) : 0;
    const dataMax = values.length ? Math.max(...values) : 0;
    const min = refRange ? Math.min(dataMin, refRange[0]) : dataMin;
    const max = refRange ? Math.max(dataMax, refRange[1]) : dataMax;
    const padding = max === min ? Math.abs(min) * 0.1 || 1 : (max - min) * 0.1;
    return [min - padding, max + padding];
  }, [data, refRange]);

  return (
    <ResponsiveContainer width="100%" height={300} style={{ border: '1px solid #ccc', borderRadius: '8px' }}>
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" />
        <YAxis domain={domain} tickFormatter={(value) => value.toFixed(2)} />
        <Tooltip contentStyle={{ backgroundColor: '#eeeeee', borderRadius: 4, color: 'black' }} />

        {/* Shaded range zone */}
        {!!refRange && <ReferenceArea y1={refRange[0]} y2={refRange[1]} strokeOpacity={0.3} fill="lightgreen" />}

        {/* Actual line values */}
        <Line type="monotone" dataKey="value" stroke="var(--color-indigo-300)" strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
};
