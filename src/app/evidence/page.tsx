import type { Metadata } from 'next';
import { VerificationPill } from '@/components/ui/VerificationPill';
import { EVIDENCE_SOURCES, CORRECTIONS_LOG } from '@/lib/official-data';

export const metadata: Metadata = {
  title: 'Evidence Library & Datasets | The Irish Record',
  description: 'Primary sources, official statistics, methodology notes, and auditable corrections log for The Irish Record platform.',
};

export default function EvidencePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              DATA REPOSITORY & ARCHIVE
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Evidence Library & Source Register
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            Every factual assertion, statistic, and queue tracking snapshot published on <em>The Irish Record</em> originates from verifiable official datasets. We operate under a strict standard: <strong>No Source = No Publish</strong>.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        {/* Primary Source Cards */}
        <section style={{ marginBottom: '4.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Primary Official Sources & Datasets
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {EVIDENCE_SOURCES.map((src) => (
              <div
                key={src.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '2rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                      {src.category} · {src.organisation}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800, margin: '0.25rem 0 0 0' }}>
                      {src.title}
                    </h3>
                  </div>
                  <VerificationPill status="official_data" />
                </div>

                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  <strong>Data Used on Site:</strong> {src.data_used_on_site}
                </div>

                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  <strong>Dataset Definition:</strong> {src.definition}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.75rem' }}>
                  <div style={{ color: 'var(--color-text-muted)' }}>
                    Publication Date: <strong>{src.date}</strong> · Last Verified: <strong>{src.last_checked}</strong>
                  </div>
                  <a
                    href={src.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-accent)', fontWeight: 700, textDecoration: 'underline' }}
                  >
                    ACCESS PRIMARY SOURCE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Auditable Corrections Log */}
        <section style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              EDITORIAL TRANSPARENCY
            </span>
            <VerificationPill status="historical" />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800, marginBottom: '1rem' }}>
            Corrections & Data Updates Log
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: '80ch', marginBottom: '2rem' }}>
            When government departments issue revised processing snapshots or amend policy thresholds, we update our records while preserving an auditable public revision trail.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {CORRECTIONS_LOG.map((c) => (
              <div key={c.id} style={{ borderLeft: '3px solid var(--color-text)', paddingLeft: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <strong style={{ color: 'var(--color-text)' }}>{c.date}</strong>
                  <span style={{ color: 'var(--color-text-muted)' }}>·</span>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase' }}>{c.category}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                  {c.title}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: '0 0 0.5rem 0', lineHeight: 1.5 }}>
                  {c.description}
                </p>
                <div style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-bg-muted)', padding: '0.5rem 0.75rem', borderRadius: '2px', color: 'var(--color-text-muted)' }}>
                  <strong>Prior:</strong> {c.previous_version} → <strong>Updated:</strong> {c.updated_version}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
