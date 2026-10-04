'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

const data = [
  { name: 'Hospitality / Retail', salary: 27000 },
  { name: 'Healthcare Assistant', salary: 30000 },
  { name: 'Registered Nurse', salary: 40000 },
  { name: 'CSO Median Wage', salary: 40200 },
];

export function IncomeGapChart() {
  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', backgroundColor: 'white' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
        Median Salaries vs Nov 2025 Family Reunification Threshold (€46,000 for Spouse + 2 Kids)
      </div>
      <div style={{ height: 350, width: '100%' }}>
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30, top: 20, bottom: 5 }}>
            <XAxis type="number" domain={[0, 50000]} tickFormatter={(val) => `€${val/1000}k`} />
            <YAxis dataKey="name" type="category" width={150} tick={{ fontSize: 12, fill: '#4B4B47' }} />
            <Tooltip formatter={(value: number) => `€${value.toLocaleString()}`} />
            <ReferenceLine x={46000} stroke="#8B3A3A" strokeDasharray="3 3" label={{ position: 'top', value: '€46,000 Threshold', fill: '#8B3A3A', fontSize: 12, fontWeight: 'bold' }} />
            <Bar dataKey="salary" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.salary >= 46000 ? '#2D6A4F' : '#4B4B47'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '1rem', lineHeight: 1.5 }}>
        The State explicitly prohibits combining spouses&apos; incomes to meet this threshold. A full-time nurse recruited to the HSE cannot bring their family without working excessive overtime or moving to a higher pay grade, effectively tearing families apart.
      </p>
    </div>
  );
}
