import type { Metadata } from 'next';
import { CORRECTIONS_LOG } from '@/lib/official-data';
import { VerificationPill } from '@/components/ui/VerificationPill';

export const metadata: Metadata = {
  title: 'Corrections & Clarifications Log | The Irish Record',
  description: 'Chronological public record of corrections, revisions, and data updates maintained by The Irish Record.',
};

export default function CorrectionsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              EDITORIAL ACCOUNTABILITY
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Corrections & Clarifications Log
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7, margin: 0 }}>
            In accordance with our Editorial Standards, The Irish Record transparently documents all factual updates, statistical revisions, and corrections to government dataset tracking.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {CORRECTIONS_LOG.map((c) => (
            <article
              key={c.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                  {c.category} · {c.date}
                </span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  {c.id}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                {c.title}
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {c.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', fontSize: '0.8125rem' }}>
                <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1rem', borderRadius: '2px', borderLeft: '3px solid var(--color-accent)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>PREVIOUS RECORD</div>
                  <div>{c.previous_version}</div>
                </div>
                <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1rem', borderRadius: '2px', borderLeft: '3px solid var(--color-success)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-success)', marginBottom: '0.25rem' }}>UPDATED RECORD</div>
                  <div>{c.updated_version}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
