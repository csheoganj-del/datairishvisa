import type { Metadata } from 'next';
import { VerificationPill } from '@/components/ui/VerificationPill';

export const metadata: Metadata = {
  title: 'Research & Verification Methodology | The Irish Record',
  description: 'Full disclosure of statistical definitions, data harvesting methods, verification tiers, and stress-test assumptions.',
};

export default function MethodologyPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              STANDARDS & TRANSPARENCY
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Research & Verification Methodology
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            A rigorous public-interest data platform demands absolute transparency. Here we disclose our definitions, distinction between nationality and country of training, queue-age calculation rules, and case audit procedures.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '850px' }}>
          {/* Section 1 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
              1. Non-Irish Nationality vs Foreign Qualification
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              We strictly distinguish between administrative nationality and professional educational origin:
            </p>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              <li><strong>CSO Employments Data:</strong> Measures <em>non-Irish nationality</em> as recorded in payroll records. It includes UK and EU nationals as well as non-EEA nationals. It must never be described as &quot;non-EU only&quot;.</li>
              <li><strong>Department of Health Workforce Data:</strong> Measures practitioners who <em>obtained their first professional qualification outside the State</em>. A doctor who is now an Irish citizen but graduated in Pakistan is correctly counted as internationally trained.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
              2. Queue Front-Line Age vs Average Processing Time
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Immigration Service Delivery (ISD) publishes weekly dates representing the oldest unprocessed complete application currently under review. We calculate <strong>Front-Line Queue Age</strong> as the calendar duration between that application receipt date and the snapshot publication date. We explicitly state that this measures the age of the queue front line, and must not be conflated with the mean or median processing duration across the entire cohort.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
              3. Citizen Case Audit Standards
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Case submissions undergo automated PII redaction and manual documentary audit before publication. Cases are categorized into three verified tiers:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
                <VerificationPill status="documented_case" />
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Primary documents (AVATS receipt, VFS stamp, employment permit, or ISD decision letter) examined by editorial staff.
                </p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
                <VerificationPill status="user_reported" />
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Submitted directly by a resident; timeline logged while awaiting documentary verification.
                </p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
                <VerificationPill status="official_data" />
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Directly extracted from official government gazettes, Dáil Parliamentary Questions, or statutory releases.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
