import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories | The Irish Record',
};

export default function Page() {
  return (
    <div className="container-editorial" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Personal Experiences</h1>
      <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '70ch' }}>
        Anonymised case stories of immigration processing. Protecting identities by default.
      </p>
    </div>
  );
}
