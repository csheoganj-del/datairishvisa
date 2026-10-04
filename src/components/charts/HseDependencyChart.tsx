'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { name: 'Healthcare Assistants', percentage: 61 },
  { name: 'Registered Nurses', percentage: 54 },
  { name: 'Non-Consultant Doctors', percentage: 42 },
];

export function HseDependencyChart() {
  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', backgroundColor: 'var(--color-bg-dark)', color: 'white' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.6)', marginBottom: '1.25rem' }}>
        Proportion of Internationally Educated HSE Staff
      </div>
      <div style={{ height: 250, width: '100%' }}>
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 5 }}>
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis dataKey="name" type="category" width={160} tick={{ fontSize: 12, fill: 'rgba(245, 243, 238, 0.9)' }} axisLine={false} tickLine={false} />
            <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: '#1A1D18', border: '1px solid #4B4B47' }} formatter={(value: number) => `${value}%`} />
            <Bar dataKey="percentage" fill="#9E4F2F" radius={[0, 4, 4, 0]}>
              <LabelList dataKey="percentage" position="right" fill="rgba(245, 243, 238, 0.9)" formatter={(val: number) => `${val}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p style={{ fontSize: '0.8125rem', color: 'rgba(245, 243, 238, 0.7)', marginTop: '1rem', lineHeight: 1.5 }}>
        Source: HSE Workforce Planning Report 2024–2026 & NMBI Annual Report. Over half the nursing staff keeping Irish hospitals running are imported, yet the immigration system structurally denies them the right to a family life.
      </p>
    </div>
  );
}
