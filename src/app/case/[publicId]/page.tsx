import type { Metadata } from 'next';
import Link from 'next/link';
import { VerificationPill } from '@/components/ui/VerificationPill';
import { VERIFIED_CITIZEN_CASES } from '@/lib/official-data';

interface PageProps {
  params: Promise<{ publicId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { publicId } = await params;
  const c = VERIFIED_CITIZEN_CASES.find(
    (item) => item.public_case_id.toLowerCase() === publicId.toLowerCase() || item.id === publicId
  );

  return {
    title: c ? `${c.public_case_id}: ${c.short_title} | The Irish Record` : 'Case Details | The Irish Record',
    description: c ? c.public_summary : 'Individual anonymised case timeline and verification status.',
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { publicId } = await params;
  const c = VERIFIED_CITIZEN_CASES.find(
    (item) => item.public_case_id.toLowerCase() === publicId.toLowerCase() || item.id === publicId
  );

  if (!c) {
    return (
      <div className="container-editorial" style={{ paddingTop: '5rem', paddingBottom: '5rem', minHeight: '60vh' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>Case Not Found</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          No case matching identifier &ldquo;{publicId}&rdquo; was found in the verified registry.
        </p>
        <Link
          href="/cases"
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--color-accent)',
            color: '#FFFFFF',
            padding: '0.65rem 1.25rem',
            borderRadius: '2px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.8125rem',
          }}
        >
          ← Return to Case Registry
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Link href="/cases" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textDecoration: 'none' }}>
              ← CASE ARCHIVE
            </Link>
            <span style={{ color: 'var(--color-border)' }}>|</span>
            <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              {c.public_case_id}
            </span>
            <VerificationPill status={c.verification_status} />
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {c.short_title}
          </h1>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', paddingTop: '0.5rem' }}>
            <div>
              <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
                Documented Waiting Period
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                {c.waiting_days} Days
              </span>
            </div>
            <div>
              <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
                County Location
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                {c.county_public}, Ireland
              </span>
            </div>
            <div>
              <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
                Sponsor Category
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Category {c.sponsor_category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
              Case Narrative
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {c.public_summary}
            </p>

            <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-official)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                Verified Documentary Evidence
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {c.evidence_summary}
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
              Procedural Metadata
            </h2>
            <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.8125rem' }}>
              <div>
                <dt style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.6875rem', fontWeight: 700 }}>Category</dt>
                <dd style={{ margin: '0.25rem 0 0 0', fontWeight: 600 }}>{c.category}</dd>
              </div>
              <div>
                <dt style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.6875rem', fontWeight: 700 }}>Subcategory</dt>
                <dd style={{ margin: '0.25rem 0 0 0', fontWeight: 600 }}>{c.subcategory}</dd>
              </div>
              <div>
                <dt style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.6875rem', fontWeight: 700 }}>Application Date</dt>
                <dd style={{ margin: '0.25rem 0 0 0', fontWeight: 600 }}>{c.application_date}</dd>
              </div>
              <div>
                <dt style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.6875rem', fontWeight: 700 }}>Responsible Authority</dt>
                <dd style={{ margin: '0.25rem 0 0 0', fontWeight: 600 }}>{c.authority}</dd>
              </div>
              <div>
                <dt style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.6875rem', fontWeight: 700 }}>Children Involved</dt>
                <dd style={{ margin: '0.25rem 0 0 0', fontWeight: 600 }}>{c.children_count} {c.irish_citizen_child ? '(Irish Citizen Child)' : ''}</dd>
              </div>
              <div>
                <dt style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.6875rem', fontWeight: 700 }}>Resolution Status</dt>
                <dd style={{ margin: '0.25rem 0 0 0', fontWeight: 600, textTransform: 'capitalize' }}>{c.current_status}</dd>
              </div>
            </dl>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
              <Link
                href="/report"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-accent)',
                  color: '#FFFFFF',
                  padding: '0.75rem',
                  borderRadius: '2px',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Submit Similar Case
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
