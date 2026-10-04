import { type ClassValue } from 'clsx';
import { differenceInDays, parseISO, format } from 'date-fns';
import type { VerificationStatus } from '@/types';

export function cn(...inputs: ClassValue[]): string {
  return inputs.flat().filter(Boolean).join(' ');
}

export function calculateWaitingDays(submissionDate: string, endDate?: string): number {
  const start = parseISO(submissionDate);
  const end = endDate ? parseISO(endDate) : new Date();
  return Math.max(0, differenceInDays(end, start));
}

export function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return 'Not recorded';
  try {
    return format(parseISO(dateStr), 'd MMMM yyyy');
  } catch {
    return 'Invalid date';
  }
}

export function isSampleTooSmall(n: number): boolean {
  return n < 5;
}

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
}

export function getVerificationLabel(status: VerificationStatus): string {
  switch (status) {
    case 'official_data':
    case 'official_record':
      return 'Official Data';
    case 'documented_case':
    case 'document_verified':
      return 'Documented Case';
    case 'user_reported':
    case 'self_reported':
      return 'User Reported';
    case 'calculated':
      return 'Calculated';
    case 'historical':
      return 'Historical';
    case 'scenario':
      return 'Scenario';
    case 'analysis':
      return 'Analysis';
    default:
      return 'Verified';
  }
}

export function getVerificationDescription(status: VerificationStatus): string {
  switch (status) {
    case 'official_data':
    case 'official_record':
      return 'Information originates from an official publication or primary dataset.';
    case 'documented_case':
    case 'document_verified':
      return 'The Irish Record independently examined supporting documentation.';
    case 'user_reported':
    case 'self_reported':
      return 'Submitted by citizen; awaiting independent documentary audit.';
    case 'calculated':
      return 'Derived mathematically from cited primary datasets.';
    case 'historical':
      return 'Contemporaneous documented historic record.';
    case 'scenario':
      return 'Analytical dependency stress-test; not an operational forecast.';
    case 'analysis':
      return 'Evidence-based legal or policy interpretation.';
    default:
      return 'Verified information.';
  }
}
