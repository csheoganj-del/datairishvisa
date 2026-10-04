'use client';
import { useState } from 'react';
import { Info } from 'lucide-react';

import type { MetricDataPoint } from '@/types';

export function MetricCard({ metric }: { metric: MetricDataPoint }) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div style={{ borderTop: '3px solid var(--color-accent)', paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
      <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.5)', marginBottom: '0.5rem' }}>
        {metric.label}
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--color-text-inverse)', lineHeight: 1.1, marginBottom: '0.375rem' }}>
        {metric.value}
      </div>
      {metric.unit && (
        <div style={{ fontSize: '0.75rem', color: 'rgba(245, 243, 238, 0.55)', marginBottom: '0.75rem' }}>
          {metric.unit}
        </div>
      )}
      <button onClick={() => setShowDetail(!showDetail)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.6875rem', color: 'rgba(245, 243, 238, 0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>
        <Info size={11} aria-hidden="true" />
        {showDetail ? 'Hide source' : 'View source'}
      </button>
      {showDetail && (
        <div style={{ marginTop: '0.75rem', padding: '0.75rem', backgroundColor: 'rgba(245, 243, 238, 0.06)', borderRadius: 'var(--radius-md)', fontSize: '0.75rem', color: 'rgba(245, 243, 238, 0.65)', lineHeight: 1.6 }}>
          {metric.methodology && <p style={{ margin: '0 0 0.5rem' }}>{metric.methodology}</p>}
          {metric.sourceUrl && <div><span style={{ fontWeight: 600 }}>Source: </span><a href={metric.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245, 243, 238, 0.75)', textDecoration: 'underline' }}>{metric.sourceUrl}</a></div>}
        </div>
      )}
    </div>
  );
}
