import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nurses & Families | The Irish Record',
};

export default function Page() {
  return (
    <div className="container-editorial" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ireland recruits nurses globally. What happens after they arrive?</h1>
      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '70ch' }}>
        Ireland recruited 7,120 new nurses in 2023-24. 3,717 from India alone. Exploring their reunification journeys.
      </p>
    </div>
  );
}
