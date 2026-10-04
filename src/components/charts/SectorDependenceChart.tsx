'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const data = [
  { sector: 'Administrative & Support Services', percentage: 45.6 },
  { sector: 'Accommodation & Food Services', percentage: 45.1 },
  { sector: 'Information & Communication', percentage: 41.4 },
  { sector: 'All Enterprise Employments', percentage: 27.5 },
  { sector: 'Human Health & Social Work', percentage: 22.8 },
];

export function SectorDependenceChart() {
  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
          Non-Irish Nationality Share of Employments by Sector (2024)
        </div>
        <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
          CSO · Business in Ireland 2025
        </span>
      </div>

      <div style={{ height: 260, width: '100%' }}>
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 35, top: 10, bottom: 5 }}>
            <XAxis type="number" domain={[0, 50]} unit="%" tick={{ fontSize: 11, fill: '#4B4B47' }} />
            <YAxis dataKey="sector" type="category" width={180} tick={{ fontSize: 11, fill: '#111111' }} axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(val: number) => [`${val}%`, 'Non-Irish Employments']}
              contentStyle={{ backgroundColor: 'var(--color-bg-dark)', color: '#FFFFFF', borderRadius: '2px', border: 'none', fontSize: '0.8125rem' }}
            />
            <Bar dataKey="percentage" fill="var(--color-text)" radius={[0, 2, 2, 0]}>
              <LabelList dataKey="percentage" position="right" formatter={(v: number) => `${v}%`} style={{ fontSize: 11, fontWeight: 700, fill: '#111111' }} />
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.sector.includes('All') ? 'var(--color-accent)' : '#2A3026'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
        <strong>Population Definition:</strong> Payroll employments in Ireland held by individuals of self-declared non-Irish nationality. <em>Source: Central Statistics Office (CSO), Business in Ireland 2025 — Labour Market and Social Sustainability.</em>
      </div>
    </div>
  );
}
