import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Delhi Visa Office | The Irish Record',
};

export default function Page() {
  return (
    <div className="container-editorial" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ireland Visa Office — New Delhi</h1>
      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '70ch' }}>
        Tracking official information concerning applications processed through India/New Delhi. Short-stay appeal rights abolished from June 2026.
      </p>
    </div>
  );
}
