import React from 'react';
import { VerificationStatus } from '@/types';

interface VerificationPillProps {
  status: VerificationStatus;
  showDefinition?: boolean;
}

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string; border: string; desc: string }> = {
  official_data: {
    label: 'OFFICIAL DATA',
    bg: 'rgba(26, 58, 92, 0.08)',
    text: '#1A3A5C',
    border: 'rgba(26, 58, 92, 0.25)',
    desc: 'Irish government / CSO / EU / OECD primary publication'
  },
  documented_case: {
    label: 'DOCUMENTED CASE',
    bg: 'rgba(42, 93, 69, 0.08)',
    text: '#2A5D45',
    border: 'rgba(42, 93, 69, 0.25)',
    desc: 'The Irish Record independently examined supporting documentation'
  },
  user_reported: {
    label: 'USER REPORTED',
    bg: 'rgba(107, 107, 64, 0.08)',
    text: '#55552E',
    border: 'rgba(107, 107, 64, 0.25)',
    desc: 'Submitted by citizen; awaiting independent documentary audit'
  },
  calculated: {
    label: 'CALCULATED',
    bg: 'rgba(74, 124, 89, 0.08)',
    text: '#376846',
    border: 'rgba(74, 124, 89, 0.25)',
    desc: 'Derived mathematically from cited primary datasets'
  },
  historical: {
    label: 'HISTORICAL',
    bg: 'rgba(75, 75, 71, 0.08)',
    text: '#4B4B47',
    border: 'rgba(75, 75, 71, 0.25)',
    desc: 'Contemporaneous documented historic record'
  },
  scenario: {
    label: 'SCENARIO',
    bg: 'rgba(158, 79, 47, 0.08)',
    text: '#9E4F2F',
    border: 'rgba(158, 79, 47, 0.25)',
    desc: 'Analytical dependency stress-test; not an operational forecast'
  },
  analysis: {
    label: 'ANALYSIS',
    bg: 'rgba(139, 58, 58, 0.08)',
    text: '#8B3A3A',
    border: 'rgba(139, 58, 58, 0.25)',
    desc: 'Evidence-based legal or policy interpretation'
  },
  self_reported: {
    label: 'USER REPORTED',
    bg: 'rgba(107, 107, 64, 0.08)',
    text: '#55552E',
    border: 'rgba(107, 107, 64, 0.25)',
    desc: 'Submitted by citizen; awaiting independent documentary audit'
  },
  document_verified: {
    label: 'DOCUMENTED CASE',
    bg: 'rgba(42, 93, 69, 0.08)',
    text: '#2A5D45',
    border: 'rgba(42, 93, 69, 0.25)',
    desc: 'The Irish Record independently examined supporting documentation'
  },
  official_record: {
    label: 'OFFICIAL DATA',
    bg: 'rgba(26, 58, 92, 0.08)',
    text: '#1A3A5C',
    border: 'rgba(26, 58, 92, 0.25)',
    desc: 'Irish government / CSO / EU / OECD primary publication'
  }
};

export function VerificationPill({ status, showDefinition = false }: VerificationPillProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.official_data;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontSize: '0.6875rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '0.2rem 0.55rem',
        borderRadius: '2px',
        backgroundColor: config.bg,
        color: config.text,
        border: `1px solid ${config.border}`,
        lineHeight: 1.2
      }}
      title={config.desc}
    >
      <span style={{ fontSize: '0.6rem' }}>●</span>
      <span>{config.label}</span>
      {showDefinition && (
        <span style={{ fontWeight: 400, opacity: 0.8, textTransform: 'none', marginLeft: '0.25rem' }}>
          — {config.desc}
        </span>
      )}
    </span>
  );
}
