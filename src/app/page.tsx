import Link from 'next/link';

import { VerificationPill } from '@/components/ui/VerificationPill';
import { SectorDependenceChart } from '@/components/charts/SectorDependenceChart';
import { AdministrativeContrast } from '@/components/data/AdministrativeContrast';
import { IncomeGapChart } from '@/components/charts/IncomeGapChart';
import { IrelandCaseMap } from '@/components/data/IrelandCaseMap';
import { LiveCaseStream } from '@/components/data/LiveCaseStream';
import { AudienceCounter } from '@/components/data/AudienceCounter';


export default function HomePage() {
  const currentDate = '04 October 2026';
  

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        style={{
          backgroundColor: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-border)',
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
        }}
      >
        <div className="container-editorial">
          <div style={{ maxWidth: '920px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  border: '1px solid var(--color-accent)',
                  padding: '0.2rem 0.5rem',
                }}
              >
                SPECIAL INVESTIGATION
              </span>
              <VerificationPill status="official_data" />
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 800,
                fontSize: 'clamp(2.35rem, 5.8vw, 4.25rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--color-text)',
                marginBottom: '1.75rem',
              }}
            >
              IRELAND RECRUITS THE WORLD’S WORKERS.<br />
              <span style={{ color: 'var(--color-accent)' }}>
                WHAT HAPPENS TO THEIR FAMILIES AFTER THEY ARRIVE?
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '68ch',
              }}
            >
              Ireland relies heavily on internationally recruited workers across healthcare, technology, hospitality and other essential sectors. <em>The Irish Record</em> tracks their contribution, the immigration system they encounter, family-reunification delays, residency problems and the human consequences — using official data and documented cases.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                href="/dependence"
                style={{
                  backgroundColor: 'var(--color-text)',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '2px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                EXPLORE THE DATA
              </Link>
              <Link
                href="/report"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '2px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                REPORT YOUR EXPERIENCE
              </Link>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              LAST DATA VERIFICATION: <strong>{currentDate}</strong> · AUDITED AGAINST CSO, ISD, DETE, AND DOH PRIMARY REGISTRIES
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOMEPAGE DATA WALL (FOUR ENORMOUS STATS) */}
      <section
        aria-label="Core National Indicators"
        style={{
          backgroundColor: 'var(--color-bg-dark)',
          color: 'var(--color-text-inverse)',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container-editorial">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.45)' }}>
              PRIMARY LABOUR &amp; HEALTHCARE REGISTRIES (2024–2025)
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245, 243, 238, 0.65)' }}>
              Audited against CSO &amp; Department of Health Records
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2.5rem 2rem',
            }}
          >
            {/* Stat 1 */}
            <div style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                27.5%
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.9)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                OF EMPLOYEES WERE NON-IRISH NATIONALS
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(245, 243, 238, 0.55)', lineHeight: 1.5 }}>
                Central Statistics Office · 2024 Employments Dataset
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Link href="/evidence" style={{ fontSize: '0.6875rem', color: 'var(--color-accent-light)', textDecoration: 'underline' }}>
                  SOURCE RECORD →
                </Link>
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                61.4%
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.9)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                OF EMPLOYMENT GROWTH (2019–2024) FROM NON-IRISH NATIONALS
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(245, 243, 238, 0.55)', lineHeight: 1.5 }}>
                218,261 of 355,332 net new jobs · CSO Business in Ireland
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Link href="/evidence" style={{ fontSize: '0.6875rem', color: 'var(--color-accent-light)', textDecoration: 'underline' }}>
                  SOURCE RECORD →
                </Link>
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                54.0%
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.9)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                OF PRACTISING NURSES OBTAINED FIRST QUALIFICATION OUTSIDE IRELAND
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(245, 243, 238, 0.55)', lineHeight: 1.5 }}>
                Department of Health · National Healthcare Statistics (2024)
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Link href="/evidence" style={{ fontSize: '0.6875rem', color: 'var(--color-accent-light)', textDecoration: 'underline' }}>
                  SOURCE RECORD →
                </Link>
              </div>
            </div>

            {/* Stat 4 */}
            <div style={{ borderTop: '2px solid var(--color-accent)', paddingTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                41.3%
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.9)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                OF PRACTISING PHYSICIANS OBTAINED FIRST QUALIFICATION OUTSIDE IRELAND
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(245, 243, 238, 0.55)', lineHeight: 1.5 }}>
                Department of Health · National Healthcare Statistics (2024)
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Link href="/evidence" style={{ fontSize: '0.6875rem', color: 'var(--color-accent-light)', textDecoration: 'underline' }}>
                  SOURCE RECORD →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IRELAND DEPENDS ON THEM */}
      <section style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', backgroundColor: 'var(--color-bg)' }}>
        <div className="container-editorial">
          <div style={{ maxWidth: '850px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', display: 'block', marginBottom: '0.5rem' }}>
              STRUCTURAL INTEGRATION
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: 'var(--color-text)',
                marginBottom: '1rem',
              }}
            >
              IRELAND DOESN&apos;T JUST EMPLOY INTERNATIONAL WORKERS.<br />
              ITS GROWTH DEPENDS ON THEM.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Between 2019 and 2024, total employment in Ireland grew by 355,332 positions. Non-Irish nationals accounted for 218,261 of that net expansion — representing 61.4% of total job growth. In key sectors like technology, hospitality, and healthcare, the state operates in a condition of structural dependence on international labour.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <SectorDependenceChart />

            {/* India Spotlight Card */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                  SPOTLIGHT: INDIAN WORKFORCE
                </span>
                <VerificationPill status="official_data" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text)' }}>
                Concentration in Clinical &amp; Technical Infrastructure
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Official CSO data indicates that Indian nationals comprise 3.1% of all employees in Ireland, but are heavily concentrated in critical infrastructure:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Share of Information &amp; Communication Workers:</span>
                  <strong>8.8%</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Share of Health &amp; Social Work Workers:</span>
                  <strong>6.9%</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', borderTop: '1px dashed var(--color-border)', paddingTop: '0.75rem' }}>
                  <span>Share of all Indian Employments in Health &amp; Social Care:</span>
                  <strong style={{ color: 'var(--color-accent)', fontSize: '1.05rem' }}>32.2%</strong>
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                Nearly one in three Indian nationals employed in Ireland works directly in the public healthcare and social assistance infrastructure. <em>Source: CSO Business in Ireland 2025.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ADMINISTRATIVE CONTRAST */}
      <section style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', backgroundColor: 'var(--color-bg-muted)' }}>
        <div className="container-editorial">
          <AdministrativeContrast />
        </div>
      </section>

      {/* 5. INCOME THRESHOLDS & FAMILY SEPARATION */}
      <section style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', backgroundColor: 'var(--color-bg)' }}>
        <div className="container-editorial">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', display: 'block', marginBottom: '0.5rem' }}>
                ADMINISTRATIVE HURDLES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 3.8vw, 2.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}
              >
                The Family Income Formula
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Under the revised Non-EEA Family Reunification Policy, non-EEA workers sponsoring family members face income requirements that do not evaluate household earning potential. In Category C routes (covering General Employment Permit holders and independent Stamp 4 residents), thresholds rise to levels structurally unattainable on single median salaries.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                For Irish citizens sponsoring non-EEA spouses or children under the 12 June 2026 rules, the gross cumulative income requirement stands at <strong>€75,000 over the preceding 3 years</strong> (an average of €25,000 annually), which must be earned independently by the sponsor.
              </p>
              <Link
                href="/family-status"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                DETAILED INCOME THRESHOLD BREAKDOWN →
              </Link>
            </div>

            <div>
              <IncomeGapChart />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PEOPLE REPORTING NOW (LIVE CASE STREAM) */}
      <section style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', backgroundColor: 'var(--color-bg-muted)' }}>
        <div className="container-editorial">
          <LiveCaseStream />
        </div>
      </section>

      {/* 7. IRELAND CASE MAP (COUNTY AGGREGATES) */}
      <section style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', backgroundColor: 'var(--color-bg)' }}>
        <div className="container-editorial">
          <IrelandCaseMap />
        </div>
      </section>

      {/* 8. AUDIENCE & CITIZEN OBSERVATORY METRICS */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'var(--color-bg-dark)' }}>
        <div className="container-editorial">
          <AudienceCounter />
        </div>
      </section>

      {/* 9. CALL TO ACTION / REPORTING PLATFORM */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
          borderTop: '4px solid var(--color-accent)',
        }}
      >
        <div className="container-editorial" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            THE DATA IS NATIONAL.<br />
            THE CONSEQUENCES ARE PERSONAL.
          </h2>

          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '65ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Are you dealing with a family visa delay, IRP renewal blockage, re-entry problem, visa refusal, or children ageing out of dependent permissions?
          </p>

          <div style={{ display: 'inline-block', marginBottom: '2.5rem' }}>
            <Link
              href="/report"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-accent)',
                color: '#FFFFFF',
                padding: '1rem 2.25rem',
                borderRadius: '2px',
                fontSize: '0.9375rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                boxShadow: '0 4px 14px rgba(139, 58, 58, 0.4)',
              }}
            >
              REPORT YOUR EXPERIENCE (3–5 MINS) →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              textAlign: 'left',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '2rem',
              fontSize: '0.8125rem',
              color: 'var(--color-text-secondary)',
            }}
          >
            <div>
              <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>Strict Privacy</strong>
              Your identity can remain entirely anonymous. No passport, IRP or identifying data is ever made public.
            </div>
            <div>
              <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>Private Evidence</strong>
              Uploaded correspondence is kept in encrypted storage for editorial verification only.
            </div>
            <div>
              <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>Public Accountability</strong>
              Verified submissions reveal structural queue patterns that government departments cannot dismiss.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
