'use client';

import React from 'react';
import { VerificationPill } from '@/components/ui/VerificationPill';

export function AdministrativeContrast() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
            Processing Reality Contrast
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, margin: '0.25rem 0 0 0' }}>
            Recruitment Moves in Days. Family Queues Are Still in 2024.
          </h3>
        </div>
        <VerificationPill status="official_data" />
      </div>

      {/* Two Columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {/* Left Panel */}
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-muted)', borderLeft: '4px solid #2D6A4F', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '0.5rem' }}>
            CRITICAL SKILLS EMPLOYMENT PERMIT (DETE)
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
            Administered by Department of Enterprise, Tourism and Employment
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
              Current Processing Position
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)' }}>
              25 September 2026
            </span>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            Turnaround: <strong>~7 calendar days</strong> from submission<br />
            Data checked: 2 October 2026 · Official DETE Weekly Bulletin
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-muted)', borderLeft: '4px solid var(--color-accent)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
            JOIN FAMILY — CATEGORY B SPOUSE/CHILD (ISD)
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
            Administered by Immigration Service Delivery, Department of Justice
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
              Current Processing Position
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)' }}>
              28 June 2024
            </span>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            Queue Front-Line Age: <strong>823 calendar days (~2.3 years)</strong> behind<br />
            Data checked: 29 September 2026 · Official ISD Tuesday Release
          </div>
        </div>
      </div>

      {/* Horizontal Timeline Bar */}
      <div style={{ padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
          Timeline Orientation of Current Processing Positions (As of October 2026)
        </div>
        <div style={{ position: 'relative', height: '24px', backgroundColor: 'var(--color-border)', borderRadius: '12px', overflow: 'hidden' }}>
          <div
            title="Join Family Category B: June 2024"
            style={{ position: 'absolute', left: '0%', width: '15%', height: '100%', backgroundColor: 'var(--color-accent)' }}
          />
          <div
            title="Critical Skills EP: Sept 2026"
            style={{ position: 'absolute', right: '0%', width: '98%', height: '100%', backgroundColor: '#2D6A4F', opacity: 0.85 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
          <span>June 2024 (Join Family Queue)</span>
          <span>Mid-2025</span>
          <span>September / October 2026 (Work Permit Queue)</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: '0.85rem 1.15rem', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', fontSize: '0.75rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
        <strong>Administrative & Legal Disclaimer:</strong> Employment permits and Join Family visa applications are distinct legal and administrative procedures handled by separate government departments. These queue dates illustrate current administrative processing positions and must not be interpreted as directly equivalent procedural requirements.
      </div>
    </div>
  );
}
