import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { insertCase, getPublishedCases } from '@/lib/server-repository';

const ReportSubmissionSchema = z.object({
  occupation: z.string().optional(),
  timeInIreland: z.string().optional(),
  immigrationStatuses: z.array(z.string()).optional(),
  appliedFor: z.string().optional(),
  appliedDate: z.string().optional(),
  problemsFacing: z.array(z.string()).optional(),
  primaryProblem: z.string().optional(),
  familyImpactType: z.string().optional(),
  childrenCount: z.union([z.string(), z.number()]).optional(),
  hasIrishCitizenChild: z.string().optional(),
  separationDuration: z.string().optional(),
  hasFinancialCost: z.string().optional(),
  costItems: z.array(z.string()).optional(),
  totalCostRange: z.string().optional(),
  solicitorCostRange: z.string().optional(),
  personalImpacts: z.array(z.string()).optional(),
  didAnyoneHelp: z.string().optional(),
  helpers: z.array(z.string()).optional(),
  didItHelp: z.string().optional(),
  storyText: z.string().optional(),
  questionForGov: z.string().optional(),
  hasUploadedEvidence: z.boolean().optional(),
  publicIdentity: z.enum(['Anonymous', 'First name only', 'Initials', 'Full name']).optional(),
  consentAggregate: z.boolean().optional(),
  consentContact: z.boolean().optional(),
  contactEmail: z.string().email().optional().or(z.literal('')),
  county: z.string().optional(),
  waitingDays: z.number().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = ReportSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const publicId = `IRR-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    const numChildren = Number(data.childrenCount) || 0;
    const hasChildren = numChildren > 0 || (data.familyImpactType && data.familyImpactType.includes('child'));
    const isIrishChild = data.hasIrishCitizenChild === 'Yes';

    const shortTitle = `${data.occupation || 'Resident'} — ${data.primaryProblem || 'Administrative Delay'}`;
    const publicSummary = data.storyText && data.storyText.trim().length > 0
      ? data.storyText.trim()
      : `Applicant (${data.occupation || 'Worker'}, ${data.county || 'Dublin'}) reported persistent delay under ${data.primaryProblem || 'Immigration System'}.`;

    const newCase = await insertCase({
      public_case_id: publicId,
      category: data.primaryProblem || 'Immigration Backlog',
      subcategory: data.occupation || 'Applicant',
      short_title: shortTitle,
      public_summary: publicSummary,
      sponsor_category: 'B',
      immigration_permission: (data.immigrationStatuses && data.immigrationStatuses.length > 0)
        ? data.immigrationStatuses.join(', ')
        : 'Stamp 1 / Critical Skills',
      application_date: data.appliedDate || new Date().toISOString().split('T')[0],
      county_public: data.county || 'Dublin',
      children_count: numChildren,
      children_involved: Boolean(hasChildren),
      irish_citizen_child: Boolean(isIrishChild),
      waiting_days: data.waitingDays || 420,
      authority: 'Immigration Service Delivery',
      current_status: 'unresolved',
      verification_status: data.hasUploadedEvidence ? 'documented_case' : 'user_reported',
      publication_status: 'published',
      anonymous_preference: data.publicIdentity === 'Anonymous'
        ? 'ANONYMOUS'
        : data.publicIdentity === 'First name only'
          ? 'FIRST NAME / INITIAL'
          : 'PUBLIC NAME',
      evidence_summary: data.hasUploadedEvidence
        ? 'Supporting document uploaded and queued for verification.'
        : 'Citizen testimony logged and recorded in public observatory.',
    });

    return NextResponse.json({
      success: true,
      caseId: newCase.public_case_id,
      case: newCase,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Failed to submit report:', err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const county = searchParams.get('county') || undefined;
    const category = searchParams.get('category') || undefined;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

    const cases = await getPublishedCases({ county, category, limit });

    return NextResponse.json({
      success: true,
      count: cases.length,
      cases,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
