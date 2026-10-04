'use client';

import { useState } from 'react';
import { VerificationPill } from '@/components/ui/VerificationPill';

export default function IfTheyStoppedPage() {
  const [activeTab, setActiveTab] = useState<'24h' | '7d' | '30d'>('24h');

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              SYSTEMIC DEPENDENCY STRESS-TEST
            </span>
            <VerificationPill status="scenario" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            IF THEY STOPPED
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            A stress test of Ireland’s structural dependence on international labour across healthcare, elder care, technology, hospitality, and essential infrastructure.
          </p>

          <div style={{ marginTop: '1.5rem', padding: '0.85rem 1.15rem', backgroundColor: 'var(--color-bg-muted)', borderLeft: '3px solid var(--color-border-strong)', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
            <strong>Methodology Notice:</strong> This interactive model is an analytical dependency assessment tool designed to map institutional exposure. It is not an advocacy tool, forecast, or industrial action call. Historical data is verified; operational pressure projections are strictly labelled as modelled scenarios.
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="container-editorial" style={{ paddingTop: '2.5rem' }}>
        <div style={{ display: 'flex', borderBottom: '2px solid var(--color-border)', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {(['24h', '7d', '30d'] as const).map((tab) => {
            const label = tab === '24h' ? '24 HOURS' : tab === '7d' ? '7 DAYS' : '30 DAYS';
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.75rem 1.75rem',
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-sans)',
                  backgroundColor: isActive ? 'var(--color-text)' : 'transparent',
                  color: isActive ? '#FFFFFF' : 'var(--color-text-secondary)',
                  border: 'none',
                  borderRadius: '2px 2px 0 0',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: 24 HOURS */}
        {activeTab === '24h' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  HISTORICAL BENCHMARK · ACUTE DISRUPTION
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800, margin: '0.25rem 0 0 0' }}>
                  24-Hour Horizon: Acute Immediate Disruption
                </h2>
              </div>
              <VerificationPill status="historical" />
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '80ch', marginBottom: '2rem' }}>
              To model a 24-hour absence of foreign-qualified healthcare workers (54% of nurses, 41% of doctors), we look to contemporaneous records of the 2019 national nursing industrial action as an illustrative baseline.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent)', display: 'block', marginBottom: '0.5rem' }}>
                  Documented Impact (2019 Benchmark)
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  ~25,000+ Appointments
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Over 25,000 outpatient hospital appointments and elective procedures were postponed in a single 24-hour stoppage across Irish acute hospitals. <em>Source: HSE Contemporaneous Operational Records (Feb 2019).</em>
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent)', display: 'block', marginBottom: '0.5rem' }}>
                  Emergency Department Capacity
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  Code Red Diverts
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Immediate escalation to emergency life-support coverage only; closure of non-urgent triage lines; cancellation of all day-case surgical lists.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent)', display: 'block', marginBottom: '0.5rem' }}>
                  Community & Home Care
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  Severe Impairment
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Widespread suspension of non-critical home care visits and public health nursing clinics across community health organisations (CHOs).
                </p>
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              <strong>Classification:</strong> HISTORICAL NURSING INDUSTRIAL ACTION BENCHMARK — NOT A NON-EU LABOUR WITHDRAWAL FORECAST. Sourced from published RTÉ, HSE, and Oireachtas Health Committee records.
            </div>
          </div>
        )}

        {/* Tab 2: 7 DAYS */}
        {activeTab === '7d' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                  OPERATIONAL CASCADE · MODELLED SCENARIO
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800, margin: '0.25rem 0 0 0' }}>
                  7-Day Horizon: The Operational Cascade
                </h2>
              </div>
              <VerificationPill status="scenario" />
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '80ch', marginBottom: '2rem' }}>
              Over a seven-day timeline, operational constraints cascade beyond hospital acute units into residential care, enterprise hospitality, food production, and multinational cloud infrastructure.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Acute Healthcare Delivery Chain
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--color-bg-muted)' }}>
                    1. Acute Ward Understaffing (54% nurse shortfall)
                  </div>
                  <div style={{ textAlign: 'center', color: 'var(--color-accent)' }}>↓</div>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--color-bg-muted)' }}>
                    2. Immediate Cessation of Elective Surgery & Endoscopy
                  </div>
                  <div style={{ textAlign: 'center', color: 'var(--color-accent)' }}>↓</div>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--color-bg-muted)' }}>
                    3. Acute Bed Gridlock (Unable to discharge to elder care)
                  </div>
                  <div style={{ textAlign: 'center', color: 'var(--color-accent)' }}>↓</div>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--color-bg-muted)' }}>
                    4. Ambulance Diversions & Trolley Count Surges
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Commercial & Enterprise Disruption
                </h3>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                  <li><strong>Hospitality & Catering (45.1% non-Irish):</strong> Severe operating hours reduction; temporary closures across hotels, restaurants, and institutional catering.</li>
                  <li><strong>Agriculture & Food Processing:</strong> Meat processing and agricultural harvesting face acute bottleneck constraints.</li>
                  <li><strong>Technology & IT Operations (41.4% non-Irish):</strong> Engineering sprint delays, incident-response slowdowns across Dublin datacenter clusters.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: 30 DAYS */}
        {activeTab === '30d' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                  MACROECONOMIC CAPACITY FAILURE · MODELLED SCENARIO
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800, margin: '0.25rem 0 0 0' }}>
                  30-Day Horizon: National Capacity Breakdown
                </h2>
              </div>
              <VerificationPill status="scenario" />
            </div>

            <p style={{ fontSize: '1.125rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)', lineHeight: 1.6, maxWidth: '85ch', marginBottom: '2.5rem', fontStyle: 'italic' }}>
              &quot;One day causes disruption. One week exposes dependence. One month tests national capacity.&quot;
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem' }}>Fiscal & Exchequer Exposure</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  The 697,219 non-Irish workers pay billions in Income Tax, Universal Social Charge (USC), and PRSI. A protracted withdrawal contracts payroll tax revenue while multiplying State expenditure on emergency agency staff at €900–€1,200/week premium rates.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem' }}>Care Home Solvency</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  With 61% of healthcare assistants internationally educated, private and voluntary nursing homes face mandatory HIQA regulatory closures due to inability to satisfy statutory minimum staffing ratios.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem' }}>Global FDI Attractiveness</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  Multinational enterprises in ICT and pharmaceuticals re-evaluate Irish expansion plans, accelerating talent migration toward Germany and the Netherlands where statutory family reunification timelines exist.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
