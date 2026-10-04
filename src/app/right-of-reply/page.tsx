import type { Metadata } from 'next';
import { VerificationPill } from '@/components/ui/VerificationPill';

export const metadata: Metadata = {
  title: 'Right of Reply & Institutional Responses | The Irish Record',
  description: 'Log of formal inquiries, right-of-reply requests, and responses submitted to the Department of Justice, ISD, DETE, and HSE.',
};

const INQUIRIES = [
  {
    target: 'Department of Justice / Immigration Service Delivery',
    date: '2026-09-18',
    status: 'Response Received',
    subject: 'Join Family Category B Processing Queues Exceeding 800 Calendar Days',
    summary: 'Inquiry regarding the divergence between DETE Critical Skills permit processing times (~7 days) and ISD Join Family processing queues (~820 days), and the absence of interim bridging visas for family members.',
    response: 'The Department stated that family reunification applications undergo comprehensive individual assessment, that application volumes have increased, and that additional staffing resources continue to be deployed to the Dublin Visa Office.',
  },
  {
    target: 'Immigration Service Delivery / Dublin Visa Office',
    date: '2026-06-25',
    status: 'Response Received',
    subject: 'Abolition of Short-Stay (C-Visit) Administrative Appeals in New Delhi',
    summary: 'Inquiry into the rationale for removing administrative appeals for short-stay family visits and the disproportionate impact on visiting grandparents and family support networks.',
    response: 'ISD confirmed the administrative policy adjustment to streamline processing capacity and stated that applicants may submit new applications with updated supporting documentation at any time.',
  },
  {
    target: 'Health Service Executive (HSE) / Department of Health',
    date: '2026-07-12',
    status: 'Pending Response',
    subject: 'Impact of Family Separation Timelines on International Healthcare Staff Retention',
    summary: 'Request for internal survey data on retention rates among internationally recruited non-EEA nurses citing family separation and housing barriers as reasons for exit from Irish hospitals.',
    response: 'Formal acknowledgment received. Detailed statistical breakdown requested under AIE/FOI provisions.',
  },
];

export default function RightOfReplyPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              EDITORIAL PROTOCOL
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Right of Reply & Institutional Queries
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7, margin: 0 }}>
            In accordance with high investigative standards, The Irish Record offers relevant government departments, agencies, and institutions reasonable opportunity to respond to all data findings, structural critique, and policy observations prior to and following publication.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {INQUIRIES.map((item, idx) => (
            <article
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                  {item.target}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Submitted: {item.date} · <strong>{item.status}</strong>
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                {item.subject}
              </h2>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {item.summary}
              </p>

              <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1.25rem', borderRadius: '2px', borderLeft: '3px solid var(--color-official)' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>
                  Institutional Response Summary
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', lineHeight: 1.6, margin: 0 }}>
                  {item.response}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
