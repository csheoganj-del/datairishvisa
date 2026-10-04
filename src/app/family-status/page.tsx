import type { Metadata } from 'next';
import Link from 'next/link';
import { VerificationPill } from '@/components/ui/VerificationPill';
import { AdministrativeContrast } from '@/components/data/AdministrativeContrast';
import { IncomeGapChart } from '@/components/charts/IncomeGapChart';
import { PROCESSING_SNAPSHOT_HISTORY } from '@/lib/official-data';

export const metadata: Metadata = {
  title: 'Family & Status — Backlogs & Income Barriers | The Irish Record',
  description: 'Analysis of Irish immigration family reunification processing queues, Category A/B/C sponsorship rules, and income thresholds.',
};

export default function FamilyStatusPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              FAMILY REUNIFICATION INVESTIGATION
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Family Reunification, Status Traps & Queue Movement
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            Examining the administrative mechanics of Irish family reunification: from 27-month Join Family backlogs and the &apos;Age-Lock&apos; crisis to the revised income thresholds and Stamp 4 IRP expiry gaps.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        {/* Contrast Module */}
        <div style={{ marginBottom: '4rem' }}>
          <AdministrativeContrast />
        </div>

        {/* Section: Queue Velocity Analysis */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                AUDITING QUEUE ADVANCEMENT
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, margin: '0.25rem 0 0 0' }}>
                Join Family Queue Advancement Rate (2026 Snapshots)
              </h2>
            </div>
            <VerificationPill status="calculated" />
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '80ch', marginBottom: '1.75rem' }}>
            Tracking official Tuesday processing updates over time demonstrates how the queue behaves. Between 30 June 2026 and 29 September 2026 (91 calendar days), the front of the Category B queue advanced by only 44 application days. In other words, <strong>the backlog expanded by 47 calendar days over a single summer</strong>.
          </p>

          <div style={{ overflowX: 'auto', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-bg-muted)', borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Snapshot Date</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Category</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Oldest Application Under Review</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Calculated Front-Line Age</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Official Notes</th>
                </tr>
              </thead>
              <tbody>
                {PROCESSING_SNAPSHOT_HISTORY.map((snap) => (
                  <tr key={snap.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{snap.snapshot_date}</td>
                    <td style={{ padding: '0.85rem 1rem' }}>{snap.category_label}</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--color-accent)', fontWeight: 700 }}>{snap.applications_processing_date}</td>
                    <td style={{ padding: '0.85rem 1rem' }}>{snap.calculated_queue_age_days} days (~{Math.round(snap.calculated_queue_age_days / 30.4)} mos)</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--color-text-muted)' }}>{snap.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
            <em>Methodology Note:</em> Queue age reflects the calendar duration between the application received date and the snapshot publication date. It does not measure average processing time across all applications.
          </div>
        </section>

        {/* Section: Income Thresholds & Legal Categories */}
        <section style={{ marginBottom: '4.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Sponsor Categories & Family Income Thresholds
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                The Irish <em>Policy Document on Non-EEA Family Reunification</em> categorises sponsors into three operational tiers with starkly distinct conditions:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                    Category A — Irish Citizen Sponsors
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Under the 12 June 2026 amendments, sponsors must show gross cumulative income of <strong>€75,000 over the preceding 3 years</strong> (averaging €25,000/yr), without relying primarily on State social supports. No joint spousal assessment permitted.
                  </div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                    Category B — Critical Skills & Hosting Agreements
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Entitled to apply for family reunification immediately upon taking up employment. However, overseas visa queue processing positions remain at June 2024, meaning physical reunification is deferred by 12–24 months in practice.
                  </div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                    Category C — General Permits & Independent Stamp 4
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Requires a mandatory <strong>12-month waiting period</strong> of lawful employment prior to lodging applications, followed by full visa queue processing. Governed by escalating income thresholds that exceed entry-level healthcare and services pay scales.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <IncomeGapChart />
            </div>
          </div>
        </section>

        {/* Section: The Age-Lock & Re-entry Gaps */}
        <section style={{ backgroundColor: 'var(--color-bg-dark)', color: '#FFFFFF', padding: '3rem 2rem', borderRadius: 'var(--radius-sm)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: '#FFFFFF' }}>
            Systemic Failures: Age-Lock & Re-Entry Gaps
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent-light)', marginBottom: '0.5rem' }}>
                The &apos;Age-Lock&apos; Crisis
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(245, 243, 238, 0.8)', lineHeight: 1.6 }}>
                Under current ISD policy, a child must be under 18 both at the time of application <em>and</em> at the time of administrative decision. When files languish for 18–24 months, children aged 16 or 17 regularly turn 18 while waiting. Rather than grandfathering their eligibility at the filing date, the system administratively excludes them, forcing family separation.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent-light)', marginBottom: '0.5rem' }}>
                IRP Expiry & Travel Hazards
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(245, 243, 238, 0.8)', lineHeight: 1.6 }}>
                Ireland lacks a statutory equivalent of the UK &apos;Section 3C Leave&apos; provision or the German &apos;Fiktionsbescheinigung&apos;. A Stamp 4 holder whose IRP card expires while an in-time renewal is pending holds no formal re-entry documentation recognised at international airline gates, generating travel immobility.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Link href="/cases" style={{ color: 'var(--color-accent-light)', fontSize: '0.8125rem', fontWeight: 700 }}>
              VIEW DOCUMENTED CITIZEN CASES ON THESE ISSUES →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
