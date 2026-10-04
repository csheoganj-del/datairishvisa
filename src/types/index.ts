// =============================================================================
// THE IRISH RECORD — Core TypeScript Types
// =============================================================================

export type VerificationStatus =
  | 'official_data'
  | 'documented_case'
  | 'user_reported'
  | 'calculated'
  | 'historical'
  | 'scenario'
  | 'analysis'
  | 'self_reported'
  | 'document_verified'
  | 'official_record';

export type MetricStatus =
  | 'VERIFIED — PRIMARY SOURCE'
  | 'VERIFIED — SECONDARY SOURCE'
  | 'CALCULATED'
  | 'HISTORICAL'
  | 'ESTIMATE'
  | 'SCENARIO'
  | 'USER REPORTED'
  | 'UNVERIFIED';

export type CaseOutcome =
  | 'pending'
  | 'approved'
  | 'refused'
  | 'appealed'
  | 'appeal_approved'
  | 'appeal_refused'
  | 'withdrawn';

export type SponsorCategory = 'A' | 'B' | 'C' | 'Unknown';

export interface PublicCase {
  publicId: string;
  visaCategory: string;
  visaCategoryCode: string;
  applicationOffice: string;
  submissionDate: string | null;
  decisionDate: string | null;
  outcome: CaseOutcome;
  relationship: string;
  sponsorCategory: string;
  isHealthcareWorker: boolean;
  verificationStatus: VerificationStatus;
  waitingDays: number | null;
  isDemo: boolean;
}

export interface OfficialProcessingUpdate {
  id: string;
  visaCategory: string;
  visaOffice: string;
  publishedDate: string;
  oldestApplicationDate: string | null;
  estimatedProcessingDays: number | null;
  rawText: string | null;
  capturedAt: string;
}

export interface MetricDataPoint {
  metricKey: string;
  label: string;
  value: string;
  unit: string | null;
  sourceUrl: string | null;
  sourceDate: string | null;
  lastChecked: string | null;
  methodology: string | null;
}

export interface OfficialMetric {
  id: string;
  metric: string;
  value: string | number;
  displayValue: string;
  unit: string;
  period: string;
  population_definition: string;
  source_organisation: string;
  source_title: string;
  source_url: string;
  publication_date: string;
  last_checked: string;
  status: MetricStatus;
  notes: string;
}

export interface CitizenCase {
  id: string;
  public_case_id: string;
  created_at: string;
  updated_at: string;
  category: string;
  subcategory: string;
  short_title: string;
  public_summary: string;
  sponsor_category: SponsorCategory;
  immigration_permission?: string;
  application_date: string;
  problem_start_date?: string;
  county_public: string;
  children_count: number;
  children_involved: boolean;
  irish_citizen_child: boolean;
  waiting_days: number;
  authority: string;
  current_status: 'unresolved' | 'resolved' | 'in_progress';
  verification_status: VerificationStatus;
  publication_status: 'draft' | 'under_review' | 'published';
  anonymous_preference: 'PUBLIC NAME' | 'FIRST NAME / INITIAL' | 'ANONYMOUS';
  evidence_summary: string;
}

export interface ProcessingDateSnapshot {
  id: string;
  category: string;
  category_label: string;
  source: string;
  snapshot_date: string;
  applications_processing_date: string;
  calculated_queue_age_days: number;
  source_url: string;
  notes?: string;
}

export interface EvidenceSource {
  id: string;
  title: string;
  organisation: string;
  date: string;
  category: string;
  last_checked: string;
  source_url: string;
  archived_url?: string;
  data_used_on_site: string;
  definition: string;
  methodology_notes: string;
}

export interface CorrectionEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'Policy Threshold' | 'Processing Date' | 'Statistical Source' | 'Editorial Clarification';
  previous_version: string;
  updated_version: string;
}
