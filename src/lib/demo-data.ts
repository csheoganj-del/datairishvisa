import type { PublicCase, MetricDataPoint, OfficialProcessingUpdate } from '@/types';

export const DEMO_CASES: PublicCase[] = [
  {
    publicId: 'DEMO-001',
    visaCategory: 'Join Family — Spouse (Category B)',
    visaCategoryCode: 'JOIN_FAMILY_SPOUSE_B',
    applicationOffice: 'New Delhi',
    submissionDate: '2024-01-14',
    decisionDate: null,
    outcome: 'pending',
    relationship: 'spouse',
    sponsorCategory: 'Critical Skills Employment Permit',
    isHealthcareWorker: true,
    verificationStatus: 'document_verified',
    waitingDays: null,
    isDemo: true,
  }
];

export const DEMO_METRICS: MetricDataPoint[] = [
  {
    metricKey: 'join_family_processing_position',
    label: 'Join Family Processing Position',
    value: '4 July 2024',
    unit: 'oldest application being processed',
    sourceUrl: 'https://www.irishimmigration.ie/current-processing-dates/',
    sourceDate: '2026-09-29',
    lastChecked: '2026-10-04',
    methodology: 'Official processing date published weekly by Immigration Service Delivery.',
  },
  {
    metricKey: 'eu_directive_processing_position',
    label: 'EU Treaty Rights Processing Position',
    value: '23 March 2026',
    unit: 'oldest application being processed',
    sourceUrl: 'https://www.irishimmigration.ie/current-processing-dates/',
    sourceDate: '2026-09-29',
    lastChecked: '2026-10-04',
    methodology: 'Official processing date published weekly by ISD for EU Treaty Rights (Directive 2004/38/EC) applications.',
  },
  {
    metricKey: 'verified_family_cases',
    label: 'Verified Family Cases',
    value: '0',
    unit: 'document-verified cases in database',
    sourceUrl: null,
    sourceDate: null,
    lastChecked: '2026-10-04',
    methodology: 'Count of cases in The Irish Record database with verification status of Document Verified or Official Record.',
  },
  {
    metricKey: 'new_nurse_registrations_2024',
    label: 'New Nurse Registrations (India) 2023-24',
    value: '3,717',
    unit: 'NMBI registrations',
    sourceUrl: 'https://www.nmbi.ie/',
    sourceDate: '2024-06-01',
    lastChecked: '2026-10-04',
    methodology: 'From NMBI State of the Register 2024. Represents new registrants educated in India only.',
  },
];

export const DEMO_PROCESSING_UPDATES: OfficialProcessingUpdate[] = [
  {
    id: 'demo-pu-1',
    visaCategory: 'Join Family (Category A — Irish Citizen Sponsor)',
    visaOffice: 'Dublin (ISD)',
    publishedDate: '2026-09-29',
    oldestApplicationDate: '2024-07-04',
    estimatedProcessingDays: null,
    rawText: 'Applications received up to 4 July 2024 are currently being processed.',
    capturedAt: '2026-10-04T00:00:00Z',
  },
  {
    id: 'demo-pu-2',
    visaCategory: 'Join Family (Category B — CSEP/Hosting Agreement)',
    visaOffice: 'Dublin (ISD)',
    publishedDate: '2026-09-29',
    oldestApplicationDate: '2024-06-28',
    estimatedProcessingDays: null,
    rawText: 'Applications received up to 28 June 2024 are currently being processed.',
    capturedAt: '2026-10-04T00:00:00Z',
  },
  {
    id: 'demo-pu-3',
    visaCategory: 'Family Member of EU/EEA/Swiss Citizen',
    visaOffice: 'Dublin (ISD)',
    publishedDate: '2026-09-29',
    oldestApplicationDate: '2026-03-23',
    estimatedProcessingDays: null,
    rawText: 'Applications received up to 23 March 2026 are currently being processed.',
    capturedAt: '2026-10-04T00:00:00Z',
  },
];
