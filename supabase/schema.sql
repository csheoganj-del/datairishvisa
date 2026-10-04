-- =============================================================================
-- THE IRISH RECORD — Supabase Database Schema
-- Version: 1.0
-- Run this script in the Supabase SQL Editor: Dashboard > SQL Editor > New query
-- =============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -----------------------------------------------------------------------------
-- TABLE: cases
-- Stores citizen report submissions and verified archival records
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.cases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    public_case_id TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Classification
    category TEXT NOT NULL,
    subcategory TEXT,
    short_title TEXT NOT NULL,
    public_summary TEXT NOT NULL,
    sponsor_category TEXT DEFAULT 'B',
    immigration_permission TEXT,
    occupation TEXT,
    time_in_ireland TEXT,

    -- Key Dates & Location
    application_date DATE,
    problem_start_date DATE,
    county_public TEXT NOT NULL DEFAULT 'Dublin',
    waiting_days INTEGER NOT NULL DEFAULT 0,

    -- Family & Children
    children_count INTEGER NOT NULL DEFAULT 0,
    children_involved BOOLEAN NOT NULL DEFAULT false,
    irish_citizen_child BOOLEAN NOT NULL DEFAULT false,
    separation_duration TEXT,

    -- Impact & Details
    financial_cost TEXT,
    cost_items TEXT[],
    personal_impacts TEXT[],
    question_for_gov TEXT,

    -- Assistance
    did_anyone_help TEXT,
    helpers TEXT[],
    did_it_help TEXT,

    -- Processing Authority & Status
    authority TEXT NOT NULL DEFAULT 'Immigration Service Delivery',
    current_status TEXT NOT NULL DEFAULT 'unresolved' CHECK (current_status IN ('unresolved', 'resolved', 'in_progress')),
    verification_status TEXT NOT NULL DEFAULT 'user_reported' CHECK (verification_status IN ('official_data', 'documented_case', 'user_reported', 'document_verified', 'historical')),
    publication_status TEXT NOT NULL DEFAULT 'published' CHECK (publication_status IN ('draft', 'under_review', 'published', 'rejected')),
    anonymous_preference TEXT NOT NULL DEFAULT 'ANONYMOUS' CHECK (anonymous_preference IN ('PUBLIC NAME', 'FIRST NAME / INITIAL', 'ANONYMOUS')),
    evidence_summary TEXT,

    -- Privacy & Moderation (Restricted / Private)
    contact_email TEXT,
    consent_contact BOOLEAN NOT NULL DEFAULT false,
    consent_aggregate BOOLEAN NOT NULL DEFAULT true,
    is_demo BOOLEAN NOT NULL DEFAULT false
);

-- Indexes for lightning fast queries and aggregation
CREATE INDEX IF NOT EXISTS idx_cases_publication_status ON public.cases(publication_status);
CREATE INDEX IF NOT EXISTS idx_cases_county_public ON public.cases(county_public);
CREATE INDEX IF NOT EXISTS idx_cases_category ON public.cases(category);
CREATE INDEX IF NOT EXISTS idx_cases_created_at ON public.cases(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cases_verification_status ON public.cases(verification_status);

-- -----------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS)
-- -----------------------------------------------------------------------------
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

-- 1. Public can submit new cases anonymously (INSERT)
CREATE POLICY "Enable public case submission"
    ON public.cases
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 2. Public can read published cases, but email is hidden from public API queries
CREATE POLICY "Enable public read for published cases"
    ON public.cases
    FOR SELECT
    TO anon, authenticated
    USING (publication_status = 'published');

-- 3. Service role can read/update all cases (moderation & backoffice)
CREATE POLICY "Service role full access"
    ON public.cases
    TO service_role
    USING (true)
    WITH CHECK (true);

-- -----------------------------------------------------------------------------
-- SEED DATA: Baseline Verified Cases
-- -----------------------------------------------------------------------------
INSERT INTO public.cases (
    public_case_id, category, subcategory, short_title, public_summary,
    sponsor_category, immigration_permission, application_date, county_public,
    children_count, children_involved, irish_citizen_child, waiting_days,
    authority, current_status, verification_status, publication_status,
    anonymous_preference, evidence_summary, occupation, time_in_ireland
)
VALUES
(
    'IRR-2026-000142',
    'Join Family Delay (Category B)',
    'Staff Nurse / Critical Skills Permit',
    'ICU Staff Nurse Separated from Two Children for 26 Months',
    'A registered ICU nurse who relocated to Dublin under a Critical Skills Employment Permit lodged a Join Family application for a spouse and two dependent children in August 2024. Despite full compliance with salary criteria, the family remains separated after 782 days without an initial determination.',
    'B',
    'Stamp 1 (Critical Skills Employment Permit)',
    '2024-08-14',
    'Dublin',
    2,
    true,
    false,
    782,
    'Immigration Service Delivery / Dublin Visa Office',
    'unresolved',
    'documented_case',
    'published',
    'ANONYMOUS',
    'VFS Global receipt, AVATS application summary, employment contract with Dublin hospital reviewed and verified.',
    'Nurse',
    '5–10 years'
),
(
    'IRR-2026-000089',
    'Child Ageing Out (Age-Lock)',
    'Dependent Child turned 18 during delay',
    'Daughter Turned 18 During 19-Month Administrative Wait',
    'An IT architect legally resident in Galway lodged an application for their dependent daughter when she was 16 years and 11 months old. Following a 19-month processing backlog, the visa office issued an inquiry regarding adult independent status.',
    'B',
    'Stamp 4',
    '2024-02-10',
    'Galway',
    1,
    true,
    false,
    967,
    'Immigration Service Delivery',
    'unresolved',
    'documented_case',
    'published',
    'FIRST NAME / INITIAL',
    'AVATS filing date confirms minor status at lodging; correspondence logs verify absence of interim procedural updates.',
    'Software / IT',
    '3–5 years'
),
(
    'IRR-2026-000043',
    'IRP Expiry & Travel Barrier',
    'Immigration Continuity Gap',
    'Hospital Doctor Trapped Abroad During Family Emergency',
    'A Non-Consultant Hospital Doctor in Cork applied for Stamp 4 renewal 10 weeks prior to expiry. While waiting through an 18-week backlog, the doctor travelled abroad for an urgent bereavement and faced entry complications upon return due to lack of bridging documentation.',
    'Unknown',
    'Stamp 4 Renewal Pending',
    '2025-11-04',
    'Cork',
    1,
    true,
    true,
    334,
    'Registration Office / Border Management Unit',
    'resolved',
    'documented_case',
    'published',
    'ANONYMOUS',
    'ISD renewal application confirmation, travel itinerary, hospital HR letters verified.',
    'Doctor',
    '3–5 years'
),
(
    'IRR-2026-000201',
    'Family Income Threshold Barrier',
    'Healthcare Assistant (General Permit)',
    'Elder Care Specialist Barred by Single-Income Rule',
    'A certified healthcare assistant working in a residential nursing home earning €32,691 annually cannot sponsor their spouse due to Category C income guidelines and the explicit bar against combining prospective spousal earnings.',
    'C',
    'General Employment Permit',
    '2025-05-18',
    'Limerick',
    0,
    false,
    false,
    504,
    'Immigration Service Delivery',
    'unresolved',
    'documented_case',
    'published',
    'ANONYMOUS',
    'Employment permit documents, employment contract, ISD formal rejection notice on threshold grounds.',
    'Healthcare Assistant',
    '3–5 years'
)
ON CONFLICT (public_case_id) DO NOTHING;
