import type { Metadata } from 'next';
import { VerificationPill } from '@/components/ui/VerificationPill';

export const metadata: Metadata = {
  title: 'Editorial Standards & Defamation Safeguards | The Irish Record',
  description: 'Our journalistic commitment to source verification, separation of fact from allegation, and protection against defamation.',
};

export default function EditorialStandardsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              JOURNALISTIC PRINCIPLES
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Editorial Standards &amp; Defamation Safeguards
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            The strength of <em>The Irish Record</em> rests entirely upon its credibility. We enforce strict evidentiary standards, separate documented facts from individual grievances, and guarantee institutional fairness.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '850px' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              1. Separation of Documented Fact from Allegation
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              We do not publish claims that the State or individual immigration officers acted with corrupt, racist, or unlawful intent based solely on an applicant&apos;s assertion. All published reports focus strictly on documented administrative milestones: dates of application lodging, formal acknowledgment notices, official requests for evidence, processing durations, and statutory decision texts.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              2. Individual Civil Servant Anonymity
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Public servants, visa decision makers, and administrative staff carry out State functions under departmental policies. We never publish the personal names or contact details of frontline visa processing staff. Reporting is addressed to public institutions, Ministers, and statutory bodies.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              3. Right of Reply
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Whenever investigative reports identify administrative failures within an agency or department (such as ISD, DETE, or the HSE), formal inquiries and questions are submitted in advance of publication. Responses from government press offices are incorporated directly into relevant investigations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
