'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { differenceInDays, parseISO } from 'date-fns';
import type { OfficialProcessingUpdate } from '@/types';

const CATEGORY_COLORS: Record<string, string> = {
  'Join Family (Category A — Irish Citizen Sponsor)': '#8B3A3A',
  'Join Family (Category B — CSEP/Hosting Agreement)': '#9E4F2F',
  'Family Member of EU/EEA/Swiss Citizen': '#2A5D8F',
};

export function ProcessingComparisonChart({ updates }: { updates: OfficialProcessingUpdate[] }) {
  const today = new Date();
  const data = updates.filter((u) => u.oldestApplicationDate).map((u) => {
    const days = differenceInDays(today, parseISO(u.oldestApplicationDate!));
    const months = Math.round(days / 30);
    return {
      name: u.visaCategory.replace('Join Family (Category A — Irish Citizen Sponsor)', 'Join Family\n(Irish Citizen)').replace('Join Family (Category B — CSEP/Hosting Agreement)', 'Join Family\n(CSEP/Category B)').replace('Family Member of EU/EEA/Swiss Citizen', 'EU Treaty Rights\n(Directive)'),
      months,
      color: CATEGORY_COLORS[u.visaCategory] ?? '#4B4B47',
      rawCategory: u.visaCategory,
    };
  });

  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', backgroundColor: 'white' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
        Approximate months between oldest application currently being processed and today
      </div>
      <div style={{ height: 280 }} aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16, top: 8, bottom: 8 }}>
            <XAxis type="number" tick={{ fontSize: 11, fill: '#6B6B66' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}m`} />
            <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11, fill: '#4B4B47' }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="months" radius={[0, 3, 3, 0]}>
              {data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
