import type { Metadata } from 'next';
import Link from 'next/link';
import { VerificationPill } from '@/components/ui/VerificationPill';
import { HseDependencyChart } from '@/components/charts/HseDependencyChart';

export const metadata: Metadata = {
  title: 'The International Nurse Recruitment Investigation | The Irish Record',
  description: 'How Ireland depends on 54% internationally-qualified nurses while enforcing years of family separation, cost-of-living traps, and administrative backlogs.',
};

export default function NursesPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Editorial Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              SPECIAL INVESTIGATION
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Healing Ireland’s Families While Denied Their Own
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)', maxWidth: '78ch', lineHeight: 1.7, margin: 0 }}>
            Ireland recruited 7,120 new nurses in 2023–24. Over 54% of all practicing nurses received their qualifications abroad, with 3,717 from India alone. Yet behind the State’s aggressive global recruitment drives lies an unsparing reality: an acute cost-of-living trap, a two-year family separation timeline, and a system that treats frontline healthcare workers as interchangeable units of labor.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        {/* Core Metric Highlights */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-accent)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Non-Irish Trained Nurses
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: 'var(--color-accent)', margin: '0.5rem 0' }}>
              54.0%
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              41,341 out of 76,558 practicing nurses in Ireland first qualified outside the State. (Dept of Health 2025)
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-official)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              India Recruitment Pipeline
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: 'var(--color-official)', margin: '0.5rem 0' }}>
              3,717
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              New nursing registrations from India in 2023–24 alone — 52% of all newly registered nurses in the State.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid #8B3A3A' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Average Family Separation
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: '#8B3A3A', margin: '0.5rem 0' }}>
              24–36 mo
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              12-month permit waiting threshold + 12–21 months in the Dublin Join Family visa queue.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderTop: '3px solid #2A5D45' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              Health Sector Concentration
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: '#2A5D45', margin: '0.5rem 0' }}>
              32.2%
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Nearly 1 in 3 Indian nationals employed in Ireland work directly in human health and social work. (CSO)
            </p>
          </div>
        </section>

        {/* Visual Chart Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                HSE Clinical Dependency: The Overseas Nursing Backbone
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                Department of Health & NMBI Registration Data (2024–2025)
              </p>
            </div>
            <VerificationPill status="official_data" />
          </div>
          <HseDependencyChart />
        </section>

        {/* The Economic & Lifestyle Trap: Analysis */}
        <section style={{ marginBottom: '4.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: '1.5rem' }}>
            The Economic Trap: Starting at €35k in Europe’s Most Expensive Rental Market
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text)' }}>
                The Dublin Reality
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                A newly recruited Staff Nurse in an Irish public hospital starts on Point 1 of the HSE salary scale at approximately <strong>€35,230 to €44,000</strong> gross annually depending on recognized prior experience.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                After PAYE income tax, PRSI, and the Universal Social Charge (USC), a nurse takes home roughly <strong>€2,450 to €2,850 per month</strong>.
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-accent)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  The Math of Isolation
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  With average 1-bed/2-bed Dublin rents exceeding <strong>€2,200/month</strong>, an international nurse is forced into house-shares or dormitory rooms, sending remittances home while carrying all the living costs alone.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text)' }}>
                The Family Reunification Catch-22
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                To sponsor a spouse and children, the Department of Justice Family Reunification Policy requires proof of sufficient financial resources to not become an unreasonable burden on social welfare.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                The policy sets high net income thresholds (starting above €30,000 for families with children) that evaluate <strong>only the sponsor’s past Irish earnings</strong>. Prospective spousal income cannot be counted.
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-muted)', padding: '1rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-official)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Administrative Paradox
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  The State asks nurses to save Irish lives on Irish public hospital wages, but then declares those exact same wages insufficient to feed their own children on Irish soil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* International Comparator Table */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800 }}>
              Where Would a Nurse Choose to Go? An International Comparison
            </h2>
            <VerificationPill status="official_data" />
          </div>

          <div style={{ overflowX: 'auto', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-bg-muted)', borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: '1rem', fontWeight: 700, width: '22%' }}>Country</th>
                  <th style={{ padding: '1rem', fontWeight: 700, width: '26%' }}>Family Entry Timing</th>
                  <th style={{ padding: '1rem', fontWeight: 700, width: '26%' }}>Spouse Right to Work</th>
                  <th style={{ padding: '1rem', fontWeight: 700, width: '26%' }}>Permanent Residence / Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: '#FDF7F7' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    IRELAND
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <strong>12–36 Months:</strong> General permit requires 12 mo wait before applying; then 12–21 mo visa queue. CSEP immediate, but visas take 800+ days.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Stamp 1G granted for CSEP spouses; Stamp 3 (unpaid/dependent) or separate permit requirement for general permit families.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Stamp 4 after 2 years (CSEP) or 5 years (GEP). No statutory bridging visa if renewal takes 4+ months.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 700 }}>United Kingdom (NHS)</td>
                  <td style={{ padding: '1rem' }}>
                    <strong>Day 1:</strong> Health and Care Worker visa permits dependents to arrive together or join immediately upon visa issuance.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Full unrestricted work authorization from date of arrival.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Indefinite Leave to Remain (ILR) after 5 years; Section 3C leave automatically guarantees legal status during renewals.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: '#FAF9F6' }}>
                  <td style={{ padding: '1rem', fontWeight: 700 }}>Germany</td>
                  <td style={{ padding: '1rem' }}>
                    <strong>Immediate:</strong> EU Blue Card / Skilled Workers Act guarantees family reunification; statutory 90-day processing limit.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Immediate unrestricted labor market access for spouses.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Permanent settlement permit (Niederlassungserlaubnis) after 21–27 months with German language proficiency.
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 700 }}>Australia</td>
                  <td style={{ padding: '1rem' }}>
                    <strong>Day 1:</strong> Subclass 482 / 186 allows family members to be included on the primary application.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Unrestricted full-time work and study rights for secondary applicants.
                  </td>
                  <td style={{ padding: '1rem' }}>
                    Direct permanent residence pathways for nominated clinical healthcare occupations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.75rem', lineHeight: 1.5 }}>
            <em>Source Frameworks:</em> UK Home Office Health and Care Worker guidance; German Federal Office for Migration (BAMF); Australian Department of Home Affairs Skilled Migration; Department of Justice (Ireland) Policy Document on Non-EEA Family Reunification.
          </p>
        </section>

        {/* The Moral Question / Investigative Conclusion */}
        <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-text-inverse)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-sm)', borderTop: '4px solid var(--color-accent)' }}>
          <div style={{ maxWidth: '75ch' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-light)', display: 'block', marginBottom: '1rem' }}>
              THE CORE PUBLIC INTEREST QUESTION
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: '1.5rem' }}>
              When a Nurse Fixes Your Family, Is It Too Much to Ask That She Can Live With Hers?
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(245, 243, 238, 0.85)', marginBottom: '1.5rem' }}>
              The next time you walk into an Irish acute emergency department, an intensive care unit, or a geriatric ward, observe the people on duty. The nurse checking vital signs, adjusting intravenous medications, and holding the trembling hand of an elderly patient is statistically likely to have qualified in Kerala, New Delhi, or Manila.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(245, 243, 238, 0.85)', marginBottom: '1.5rem' }}>
              When that 13-hour shift ends at 8:30 PM, she walks out to a shared rented room. Her two-year-old child and spouse are 7,500 kilometers away, trapped in a bureaucratic backlog that official departments measure in years, not months.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(245, 243, 238, 0.85)', marginBottom: '2.5rem' }}>
              Ireland cannot recruit the world’s healthcare workers on the promise of opportunity while subjecting them to systemic isolation, arbitrary financial disqualifications, and unequal legal standing. When nurses eventually vote with their feet and move to the UK, Canada, or Australia, Ireland will not merely have lost critical medical labor—it will have lost its moral credibility.
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
                Share Your Nursing Experience
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
                Browse Verified Cases
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
