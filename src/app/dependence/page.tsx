import type { Metadata } from 'next';
import Link from 'next/link';

import { VerificationPill } from '@/components/ui/VerificationPill';
import { SectorDependenceChart } from '@/components/charts/SectorDependenceChart';
import { HseDependencyChart } from '@/components/charts/HseDependencyChart';

export const metadata: Metadata = {
  title: 'Dependence — Labour Market & Healthcare | The Irish Record',
  description: 'Evidence-based analysis of Ireland’s structural dependence on international labour across healthcare, ICT, and enterprise.',
};

export default function DependencePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              LABOUR & ECONOMIC INVESTIGATION
            </span>
            <VerificationPill status="official_data" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Ireland’s Structural Dependence on International Labour
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            Official data from the Central Statistics Office, Department of Health, and Health Service Executive reveals that international workers are no longer a supplementary buffer for the Irish economy — they are its foundational growth engine.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Non-Irish Employments (2024)
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1 }}>
              697,219
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
              Representing <strong>27.5%</strong> of all payroll employments in Ireland. <em>Source: CSO Business in Ireland 2025.</em>
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Share of 5-Year Job Growth
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1 }}>
              61.4%
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
              218,261 out of 355,332 net new jobs between 2019 and 2024 were filled by non-Irish nationals.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Nurses Qualified Outside Ireland
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1 }}>
              54.0%
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
              Of 76,558 practising nurses, over half obtained their first professional qualification abroad.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Physicians Qualified Outside Ireland
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1 }}>
              41.3%
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
              4 in 10 practising physicians in Irish healthcare institutions graduated overseas.
            </p>
          </div>
        </div>

        {/* Section: Healthcare Breakdown */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Healthcare & Clinical Delivery
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                According to the <em>National Healthcare Statistics 2025</em> (published by the Department of Health), Ireland’s public and private health delivery relies extensively on professionals who obtained their initial qualifications in jurisdictions such as India, the United Kingdom, the Philippines, Pakistan, and Sudan.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                HSE workforce audits indicate that 54% of registered general nurses and 61% of healthcare assistants are foreign-educated. Without sustained international recruitment, acute wards and residential elder care facilities would experience severe operational contractions.
              </p>
              <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--color-bg-muted)', borderLeft: '3px solid var(--color-border-strong)', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                <strong>Terminology Precision:</strong> Figures refer specifically to practitioners whose <em>first professional qualification</em> was conferred outside the State. This reflects recruitment flows, not necessarily personal nationality or citizenship status.
              </div>
            </div>

            <div>
              <HseDependencyChart />
            </div>
          </div>
        </section>

        {/* Section: Sectoral Spread */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Macroeconomic Sectoral Distribution
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <SectorDependenceChart />
            </div>
            <div>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                CSO enterprise datasets indicate that international workers sustain critical private and public services. In Administrative and Support Services, 45.6% of employments are held by non-Irish nationals. Accommodation and Food Services registers 45.1%, while Information and Communication reaches 41.4%.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                The growth in high-skill employment permit issuance has enabled Ireland’s multinational technology and engineering hubs to maintain global competitiveness.
              </p>
              <Link
                href="/rights-gap"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                COMPARE ADMINISTRATIVE RIGHTS ACROSS PERMIT HOLDER CATEGORIES →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
