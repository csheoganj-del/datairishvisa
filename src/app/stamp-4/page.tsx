import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stamp 4 Explainer | The Irish Record',
};

export default function Page() {
  return (
    <div className="container-editorial" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Stamp 4 does not always mean the same thing.</h1>
      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '70ch' }}>
        Critical Skills Employment Permit holders can access Stamp 4 after 21 months. General Employment Permit holders after 57 months.
      </p>
    </div>
  );
}
