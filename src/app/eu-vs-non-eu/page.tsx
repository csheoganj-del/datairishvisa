import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EU vs Non-EU | The Irish Record',
};

export default function Page() {
  return (
    <div className="container-editorial" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>EU Treaty Rights vs National Policy</h1>
      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '70ch' }}>
        EU Directive 2004/38/EC governs free movement. Irish citizens living in Ireland do not fall under this directive for family reunification.
      </p>
    </div>
  );
}
