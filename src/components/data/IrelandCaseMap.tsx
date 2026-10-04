'use client';

import React, { useState } from 'react';
import { caseRepository, CountyReportStats } from '@/lib/repositories';
import { VerificationPill } from '@/components/ui/VerificationPill';

const COUNTIES = [
  { name: 'Dublin', count: 487, x: 74, y: 48 },
  { name: 'Cork', count: 114, x: 38, y: 78 },
  { name: 'Galway', count: 68, x: 36, y: 46 },
  { name: 'Limerick', count: 45, x: 38, y: 62 },
  { name: 'Waterford', count: 28, x: 62, y: 74 },
  { name: 'Kildare', count: 32, x: 68, y: 52 },
  { name: 'Louth', count: 24, x: 72, y: 38 },
  { name: 'Donegal', count: 19, x: 48, y: 18 },
];

export function IrelandCaseMap() {
  const [selectedCounty, setSelectedCounty] = useState<string>('Dublin');
  const stats: CountyReportStats = caseRepository.getCountyStats(selectedCounty);

  return (
    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
            REGIONAL DISTRIBUTION
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, margin: '0.25rem 0 0 0', color: 'var(--color-text)' }}>
            Citizen Reports by County (Aggregated Data)
          </h3>
        </div>
        <VerificationPill status="user_reported" />
      </div>

      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem', lineHeight: 1.5 }}>
        To guarantee privacy and prevent identification, all citizen submissions are aggregated at county level. Select a county to inspect documented queue patterns, affected professions, and family separation impacts.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        {/* Interactive Selector List & Visual Map Representation */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
            Select County to View Incident Breakdown
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
            {COUNTIES.map((c) => {
              const isSelected = selectedCounty.toLowerCase() === c.name.toLowerCase();
              return (
                <button
                  key={c.name}
                  onClick={() => setSelectedCounty(c.name)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: isSelected ? 'var(--color-bg-dark)' : 'var(--color-bg-muted)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontSize: '0.8125rem',
                    fontWeight: isSelected ? 700 : 500,
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{c.name}</span>
                  <span style={{ fontSize: '0.75rem', opacity: isSelected ? 0.9 : 0.65, fontWeight: 700 }}>
                    {c.count} cases
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected County Dossier Card */}
        <div style={{ padding: '1.75rem', backgroundColor: 'var(--color-bg-muted)', borderLeft: '4px solid var(--color-accent)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text)' }}>
              COUNTY {stats.county.toUpperCase()}
            </span>
            <span style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-accent)' }}>
              {stats.totalReports} reports
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Most Common Profession:</span>
              <strong style={{ color: 'var(--color-text)' }}>{stats.mostCommonOccupation}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Healthcare Workers Affected:</span>
              <strong style={{ color: 'var(--color-text)' }}>{stats.healthcareWorkerCount}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Primary Reported Barrier:</span>
              <strong style={{ color: 'var(--color-text)' }}>{stats.mostCommonIssue}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Median Reported Waiting Time:</span>
              <strong style={{ color: 'var(--color-accent)', fontSize: '0.9375rem' }}>{stats.medianWaitDays} Days</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Children Reported Affected:</span>
              <strong style={{ color: 'var(--color-text)' }}>{stats.childrenAffected} children</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed var(--color-border)', paddingTop: '0.5rem' }}>
              <span>Status Unresolved:</span>
              <strong style={{ color: '#8B3A3A' }}>{stats.unresolvedPercentage}%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
