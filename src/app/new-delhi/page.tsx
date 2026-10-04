import type { Metadata } from 'next';
import Link from 'next/link';
import { VerificationPill } from '@/components/ui/VerificationPill';

export const metadata: Metadata = {
  title: 'Ireland Visa Office — New Delhi Dossier | The Irish Record',
  description: 'Investigating processing backlogs, appeal rights abolition, documentation scrutiny, and family separation through the Irish Visa Office in New Delhi.',
};

export default function NewDelhiPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              OVERSEAS POST INVESTIGATION
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            The New Delhi Pipeline: Labour Wanted, Families Refused
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)', maxWidth: '78ch', lineHeight: 1.7, margin: 0 }}>
            India is Ireland’s single largest supplier of internationally trained healthcare professionals and critical enterprise skills. Yet applicants routing through the Embassy of Ireland / Visa Office in New Delhi confront systemic processing opacity, high refusal rates for visiting relatives, and the abolition of administrative appeal rights.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        {/* Metric Cards */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-accent)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Health Dependency on India
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: 'var(--color-accent)', margin: '0.5rem 0' }}>
              32.2%
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Nearly a third of all Indian nationals working in Ireland are employed directly in health and social care. (CSO)
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-official)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Annual Nurse Recruitment
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: 'var(--color-official)', margin: '0.5rem 0' }}>
              3,717
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Indian-trained nurses registered in Ireland in 2023–24, outnumbering all domestic Irish nursing graduates combined.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid #8B3A3A' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Short-Stay Appeal Rights
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: '#8B3A3A', margin: '0.5rem 0' }}>
              Abolished
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Since June 2026, no administrative appeal exists for short-stay (C Visit) visa refusals issued through New Delhi.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid #2A5D45' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Work Permit Speed vs Visa
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: '#2A5D45', margin: '0.5rem 0' }}>
              7d vs 820d
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              DETE processes Critical Skills permits in 7 days; ISD Join Family visa queue sits at 823 calendar days.
            </p>
          </div>
        </section>

        {/* Section: The Abolition of Appeal Rights */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              POLICY REGRESSION
            </span>
            <VerificationPill status="official_data" />
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: '1.25rem' }}>
            The June 2026 Policy Shift: Zero Recourse for Visiting Family
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '82ch', marginBottom: '1.5rem' }}>
            In June 2026, Immigration Service Delivery introduced an administrative change withdrawing the historical internal appeals mechanism for Short-Stay (C-Visit) visas. Previously, families whose tourist or family-visit applications were refused could submit written clarifications, banking proof, or missing affidavits to an appeals officer within 60 days at no cost.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Impact on Elderly Parents & Childcare
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                When an Indian doctor or nurse gives birth in Ireland, grandparents routinely apply for a 90-day visit visa to support the postpartum recovery. Under the new regime, a refusal based on standardized boilerplate (e.g. &ldquo;insufficient ties to home country&rdquo;) is final. The only remedy is to pay a fresh €60 fee and start from scratch, or file High Court Judicial Review proceedings costing €15,000+.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-official)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Boilerplate Refusal Patterns
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Analysis of verified refusals submitted to The Irish Record demonstrates that parents holding significant property assets, pension income, and family ties in India are routinely refused under Section &ldquo;OC&rdquo; (Obligation to Return) despite sponsor incomes exceeding €80,000 in Ireland.
              </p>
            </div>
          </div>
        </section>

        {/* Section: The Double Standard */}
        <section style={{ marginBottom: '4.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            The Two Systems Operating Simultaneously
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-success)', marginBottom: '0.5rem' }}>
                Fast-Track for Corporate & State Needs
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Work Permits: 1 to 2 Weeks
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                When the HSE, private hospitals, or multinational tech campuses need engineers or nurses, the Department of Enterprise issues Critical Skills Employment Permits in an average of 7 days. Corporate recruitment agencies travel to Kochi and New Delhi with State support to recruit on demand.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                Multi-Year Stagnation for Families
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Join Family Visas: 24 to 36 Months
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Once the worker lands in Dublin and begins paying taxes, the priority evaporates. Applications for their children and spouse are handed over to the Dublin Visa Office and New Delhi post, where they enter queues that official dashboards show progressing at only 13–16 application days per calendar month.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-text-inverse)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ maxWidth: '75ch' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: '1.25rem' }}>
              Have You Encountered Delays or Refusals in New Delhi?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(245, 243, 238, 0.85)', marginBottom: '2rem' }}>
              The Irish Record is documenting refusal letters, queue timelines, and administrative processing dates for applications submitted through VFS India and the Embassy of Ireland in New Delhi. All submissions are treated under strict GDPR and journalistic confidentiality protocols.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/report"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--color-accent)',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.75rem',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                Log a New Delhi Case
              </Link>
              <Link
                href="/cases"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '0.85rem 1.75rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                View Documented Cases
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
