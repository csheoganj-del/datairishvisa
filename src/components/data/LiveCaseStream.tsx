'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { VerificationPill } from '@/components/ui/VerificationPill';
import { CitizenCase } from '@/types';

interface LiveCaseItem {
  profession: string;
  county: string;
  timeInIreland: string;
  category: string;
  waitingDays: number;
  familyNote: string;
  status: 'documented_case' | 'user_reported';
}

const DEFAULT_STREAM_CASES: LiveCaseItem[] = [
  {
    profession: 'STAFF NURSE',
    county: 'DUBLIN',
    timeInIreland: '5 years in Ireland',
    category: 'Join Family (Cat B)',
    waitingDays: 782,
    familyNote: 'Spouse + 2 children separated',
    status: 'documented_case',
  },
  {
    profession: 'SOFTWARE ENGINEER',
    county: 'CORK',
    timeInIreland: '6 years in Ireland',
    category: 'IRP Renewal / Re-entry',
    waitingDays: 121,
    familyNote: 'Travel restricted; bridging gap',
    status: 'user_reported',
  },
  {
    profession: 'HOSPITAL DOCTOR',
    county: 'GALWAY',
    timeInIreland: '3 years in Ireland',
    category: 'Family Reunification',
    waitingDays: 681,
    familyNote: 'Spouse awaiting embassy determination',
    status: 'documented_case',
  },
  {
    profession: 'CARE WORKER',
    county: 'LIMERICK',
    timeInIreland: '4 years in Ireland',
    category: 'Category C Income Threshold',
    waitingDays: 504,
    familyNote: 'Single-income barrier on €32.6k salary',
    status: 'documented_case',
  },
];

export function LiveCaseStream() {
  const [cases, setCases] = useState<LiveCaseItem[]>(DEFAULT_STREAM_CASES);

  useEffect(() => {
    let isMounted = true;
    async function loadLatestCases() {
      try {
        const res = await fetch('/api/reports?limit=4');
        if (!res.ok) return;
        const data = await res.json();
        if (data.success && Array.isArray(data.cases) && data.cases.length > 0) {
          const mapped: LiveCaseItem[] = data.cases.map((c: CitizenCase) => ({
            profession: (c.subcategory || 'RESIDENT').toUpperCase(),
            county: (c.county_public || 'DUBLIN').toUpperCase(),
            timeInIreland: c.immigration_permission || 'Resident in Ireland',
            category: c.category || 'Administrative Delay',
            waitingDays: c.waiting_days || 0,
            familyNote: c.public_summary || 'Citizen case documented.',
            status: c.verification_status === 'documented_case' ? 'documented_case' : 'user_reported',
          }));
          if (isMounted) {
            setCases(mapped);
          }
        }
      } catch (err) {
        console.warn('Could not load live case stream:', err);
      }
    }

    loadLatestCases();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '2.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
            RECENTLY DOCUMENTED SUBMISSIONS
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, margin: '0.25rem 0 0 0', color: 'var(--color-text)' }}>
            People Reporting Now
          </h3>
        </div>
        <Link
          href="/cases"
          style={{
            fontSize: '0.8125rem',
            fontWeight: 700,
            color: 'var(--color-accent)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          VIEW COMPLETE CASE REGISTRY →
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {cases.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <strong style={{ fontSize: '0.8125rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  {item.profession}
                </strong>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                  {item.county}
                </span>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
                {item.timeInIreland} · {item.category}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
                  Reported Waiting Time
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                  Waiting {item.waitingDays} days
                </span>
              </div>

              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
                &ldquo;{item.familyNote}&rdquo;
              </p>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
              <VerificationPill status={item.status} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
