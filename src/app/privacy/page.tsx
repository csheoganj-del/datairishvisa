import type { Metadata } from 'next';
import { VerificationPill } from '@/components/ui/VerificationPill';

export const metadata: Metadata = {
  title: 'Privacy & Data Protection Architecture | The Irish Record',
  description: 'How The Irish Record protects submitter privacy, redacts high-risk immigration data, and complies with GDPR.',
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              DATA PROTECTION GOVERNANCE
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Privacy Architecture &amp; Data Protection
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            Immigration casework involves sensitive personal and legal data. We enforce strict data minimization, privacy-by-default protocols, and zero-exposure storage architectures.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '850px' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              1. High-Risk Data Redaction Policy
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Our platform architecture guarantees that the following data categories are <strong>never published or made accessible</strong> on public-facing feeds:
            </p>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              <li>Passport numbers, national identity numbers, and PPS numbers</li>
              <li>Irish Residence Permit (IRP) or GNIB registration card numbers</li>
              <li>Visa application numbers, AVATS tracking IDs, and file reference numbers</li>
              <li>Full residential street addresses or telephone contact numbers</li>
              <li>Minor children’s full names or exact dates of birth</li>
              <li>Financial records, bank statements, or medical certificates</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              2. Private Encrypted Storage
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              All documentary evidence uploaded via the reporting platform is transferred directly into private object storage buckets protected by row-level security (RLS). No public URLs are generated for uploaded files. Only vetted editorial researchers reviewing timeline verification hold decryption access.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              3. Right of Withdrawal &amp; Erasure
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Under GDPR Article 17, submitters may withdraw their consent at any time. Upon receipt of a withdrawal request referencing the public Case ID, all associated records, timelines, and uploaded documentation are permanently expunged from our database within 5 working days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
