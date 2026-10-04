import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Right of Reply | The Irish Record',
};

export default function Page() {
  return (
    <div className="container-editorial" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Right of Reply Record</h1>
      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '70ch' }}>
        Log of questions sent to official bodies like ISD and the Department of Justice.
      </p>
    </div>
  );
}
