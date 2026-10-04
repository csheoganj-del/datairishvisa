import Link from 'next/link';

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        color: 'rgba(245, 243, 238, 0.75)',
        marginTop: '6rem',
        borderTop: '3px solid var(--color-accent)',
      }}
    >
      <div
        className="container-editorial"
        style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
      >
        {/* Masthead & Primary Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            borderBottom: '1px solid rgba(245, 243, 238, 0.15)',
            paddingBottom: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 900,
                fontSize: '1.65rem',
                letterSpacing: '-0.03em',
                color: 'var(--color-text-inverse)',
                marginBottom: '0.65rem',
              }}
            >
              THE IRISH RECORD
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: 1.6,
                margin: 0,
                color: 'rgba(245, 243, 238, 0.7)',
                maxWidth: '42ch',
              }}
            >
              Independent immigration data observatory, public-interest reporting platform, citizen case tracker, and verified evidence archive.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-light)', marginBottom: '0.75rem' }}>
              Core Investigations
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem' }}>
              <li><Link href="/dependence" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Dependence — Labour Market & Healthcare</Link></li>
              <li><Link href="/family-status" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Family & Status — Processing Backlogs & Thresholds</Link></li>
              <li><Link href="/rights-gap" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Rights Gap — EU vs Non-EEA Two-Tier Reality</Link></li>
              <li><Link href="/if-they-stopped" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>If They Stopped — 24h, 7d, 30d Dependency Stress-Test</Link></li>
              <li><Link href="/cases" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Live Case Feed — Verified Citizen Submissions</Link></li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-light)', marginBottom: '0.75rem' }}>
              Evidence & Standards
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem' }}>
              <li><Link href="/evidence" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Primary Evidence & Datasets</Link></li>
              <li><Link href="/methodology" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Research & Case Verification Methodology</Link></li>
              <li><Link href="/corrections" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Corrections & Data Updates Log</Link></li>
              <li><Link href="/editorial-standards" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Editorial Standards & Defamation Safeguards</Link></li>
              <li><Link href="/privacy" style={{ color: 'rgba(245, 243, 238, 0.85)' }}>Privacy Architecture & Data Protection</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.5rem',
          }}
        >
          <div style={{ fontSize: '0.75rem', lineHeight: 1.6 }}>
            <div style={{ letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem', color: 'rgba(245, 243, 238, 0.45)', fontWeight: 600 }}>
              Operating Principle
            </div>
            <div style={{ color: 'rgba(245, 243, 238, 0.8)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
              No source. No publish. Verified numbers, official dates, real cases.
            </div>
          </div>

          <p
            style={{
              fontSize: '0.6875rem',
              maxWidth: '65ch',
              lineHeight: 1.6,
              color: 'rgba(245, 243, 238, 0.5)',
              margin: 0,
            }}
          >
            The Irish Record provides independent public-interest data journalism and policy observation. It is not an immigration legal practice and does not offer individualized legal counsel. Official processing times, policy thresholds, and individual eligibility criteria may change. Always verify with official authorities or qualified legal representatives.
          </p>
        </div>
      </div>
    </footer>
  );
}
