'use client';

import React from 'react';
import { audienceRepository } from '@/lib/repositories';

export function AudienceCounter() {
  const stats = audienceRepository.getAudienceMetrics();

  return (
    <div style={{ backgroundColor: 'var(--color-bg-dark)', color: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-light)', marginBottom: '1.25rem' }}>
        OBSERVATORY REACH &amp; PUBLIC ENGAGEMENT
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.55)', display: 'block' }}>
            Total Readers
          </span>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>
            {stats.totalReaders.toLocaleString()}
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.55)', display: 'block' }}>
            Readers Today
          </span>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>
            {stats.readersToday.toLocaleString()}
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.55)', display: 'block' }}>
            Countries Reached
          </span>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>
            {stats.countriesReached}
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.55)', display: 'block' }}>
            Reports Submitted
          </span>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent-light)' }}>
            {stats.reportsSubmitted}
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'rgba(245, 243, 238, 0.55)', display: 'block' }}>
            Cases Documented
          </span>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, color: '#4A7C59' }}>
            {stats.casesDocumented}
          </div>
        </div>
      </div>
    </div>
  );
}
