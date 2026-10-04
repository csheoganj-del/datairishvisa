'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VerificationPill } from '@/components/ui/VerificationPill';
import { VERIFIED_CITIZEN_CASES } from '@/lib/official-data';
import { CitizenCase } from '@/types';

export default function CasesPage() {
  const [filterIssue, setFilterIssue] = useState('ALL');
  const [filterCounty, setFilterCounty] = useState('ALL');
  const [cases, setCases] = useState<CitizenCase[]>(VERIFIED_CITIZEN_CASES);
  const [stats, setStats] = useState({
    totalSubmitted: 412,
    documentedCases: 184,
    medianReportedWaitDays: 594,
    childrenAffectedTotal: 248,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadCasesAndStats() {
      try {
        const [repRes, statRes] = await Promise.all([
          fetch('/api/reports'),
          fetch('/api/stats'),
        ]);

        if (repRes.ok) {
          const repData = await repRes.json();
          if (repData.success && Array.isArray(repData.cases) && repData.cases.length > 0 && isMounted) {
            setCases(repData.cases);
          }
        }

        if (statRes.ok) {
          const statData = await statRes.json();
          if (statData.success && statData.aggregates && isMounted) {
            setStats({
              totalSubmitted: statData.aggregates.totalSubmitted || 412,
              documentedCases: statData.aggregates.documentedCases || 184,
              medianReportedWaitDays: statData.aggregates.medianReportedWaitDays || 594,
              childrenAffectedTotal: statData.aggregates.childrenAffectedTotal || 248,
            });
          }
        }
      } catch (err) {
        console.warn('Could not fetch dynamic cases/stats:', err);
      }
    }

    loadCasesAndStats();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredCases = cases.filter((c) => {
    if (filterIssue !== 'ALL' && !c.category.toLowerCase().includes(filterIssue.toLowerCase())) return false;
    if (filterCounty !== 'ALL' && c.county_public.toLowerCase() !== filterCounty.toLowerCase()) return false;
    return true;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '85vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              CITIZEN EVIDENCE REGISTRY
            </span>
            <VerificationPill status="documented_case" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Documented Case Archive
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            Public case feed of documented administrative delays, family separation, and status barriers voluntarily submitted by residents across Ireland. All personally identifiable information has been redacted.
          </p>

          <div style={{ marginTop: '1.75rem' }}>
            <Link
              href="/report"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#FFFFFF',
                padding: '0.75rem 1.5rem',
                borderRadius: '2px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display: 'inline-block',
              }}
            >
              SUBMIT YOUR CASE TO THE REGISTRY →
            </Link>
          </div>
        </div>
      </section>

      {/* Aggregate Indicators */}
      <div className="container-editorial" style={{ paddingTop: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              CASES SUBMITTED
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)' }}>
              {stats.totalSubmitted}
            </div>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>Active public registry</span>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              DOCUMENT VERIFIED
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: '#2D6A4F' }}>
              {stats.documentedCases}
            </div>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>Primary docs audited</span>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              MEDIAN REPORTED WAIT
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent)' }}>
              {stats.medianReportedWaitDays} Days
            </div>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>~{Math.round(stats.medianReportedWaitDays / 30.5)} months backlog</span>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              CHILDREN AFFECTED
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)' }}>
              {stats.childrenAffectedTotal}
            </div>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>Across verified submissions</span>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem' }}>
            <label htmlFor="issue-filter" style={{ fontWeight: 700 }}>Issue:</label>
            <select
              id="issue-filter"
              value={filterIssue}
              onChange={(e) => setFilterIssue(e.target.value)}
              style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: '2px', backgroundColor: '#FFFFFF', fontSize: '0.8125rem' }}
            >
              <option value="ALL">All Issues</option>
              <option value="Join Family">Join Family Delays</option>
              <option value="Age-Lock">Age-Lock (Children Turning 18)</option>
              <option value="IRP">IRP Expiry / Travel</option>
              <option value="Threshold">Income Thresholds</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem' }}>
            <label htmlFor="county-filter" style={{ fontWeight: 700 }}>County:</label>
            <select
              id="county-filter"
              value={filterCounty}
              onChange={(e) => setFilterCounty(e.target.value)}
              style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: '2px', backgroundColor: '#FFFFFF', fontSize: '0.8125rem' }}
            >
              <option value="ALL">All Counties</option>
              <option value="Dublin">Dublin</option>
              <option value="Cork">Cork</option>
              <option value="Galway">Galway</option>
              <option value="Limerick">Limerick</option>
              <option value="Waterford">Waterford</option>
              <option value="Kildare">Kildare</option>
              <option value="Louth">Louth</option>
              <option value="Donegal">Donegal</option>
            </select>
          </div>
        </div>

        {/* Case Feed Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredCases.map((c) => (
            <div
              key={c.id || c.public_case_id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      {c.public_case_id}
                    </span>
                    <VerificationPill status={c.verification_status} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800, margin: 0, color: 'var(--color-text)' }}>
                    {c.short_title}
                  </h3>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
                    Documented Waiting Period
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                    {c.waiting_days} Days
                  </span>
                </div>
              </div>

              {/* Case Metadata Bar */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', padding: '0.75rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', marginBottom: '1rem' }}>
                <div><strong>Category:</strong> {c.category}</div>
                <div><strong>County:</strong> {c.county_public}</div>
                <div><strong>Sponsor:</strong> Category {c.sponsor_category}</div>
                <div><strong>Lodged:</strong> {c.application_date}</div>
                <div><strong>Children Affected:</strong> {c.children_count} {c.irish_citizen_child ? '(Irish Citizen Child)' : ''}</div>
                <div><strong>Authority:</strong> {c.authority}</div>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                {c.public_summary}
              </p>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                <strong>Evidence Audit:</strong> {c.evidence_summary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
