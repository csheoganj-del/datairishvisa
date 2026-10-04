# Data Model
## The Irish Record — PostgreSQL Schema Design

**Version:** 1.0
**Database:** PostgreSQL via Supabase

---

## Design Principles

1. **Public IDs are random** — `IR-XXXXX` format; database PKs are UUIDs never exposed publicly
2. **Immutable audit history** — no hard deletes for cases, documents, moderation actions
3. **Verification tiers** — every case has a verification status
4. **Source-first** — statistical data points link to sources
5. **Consent granularity** — separate consent records per purpose
6. **Temporal snapshots** — official processing data stored as time-series, never overwritten

---

## Entity Overview

```
users ──────────────────── cases ──────── case_events
                              │
                              ├────────── case_documents
                              ├────────── case_verification
                              ├────────── stories
                              └────────── consents

countries ──────────────── visa_offices ─ official_processing_updates
visa_categories
sponsor_categories
occupations

sources ────────────────── source_snapshots
                      └─── articles

refusal_reasons ─────────── refusals
                        └── appeals

moderation_actions ──────── audit_log

right_of_reply_records
```

---

## Tables

### `users`
Admin and moderator accounts (Supabase Auth managed).

```sql
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT auth.uid(),
  email         TEXT NOT NULL UNIQUE,
  display_name  TEXT,
  role          TEXT NOT NULL DEFAULT 'moderator'
                  CHECK (role IN ('moderator', 'senior_moderator', 'admin')),
  is_active     BOOLEAN NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `countries`

```sql
CREATE TABLE countries (
  id         SMALLINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name       TEXT NOT NULL UNIQUE,
  iso_alpha2 CHAR(2) NOT NULL UNIQUE,
  region     TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `visa_offices`

```sql
CREATE TABLE visa_offices (
  id         SMALLINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name       TEXT NOT NULL,          -- e.g. "New Delhi"
  city       TEXT,
  country_id SMALLINT REFERENCES countries(id),
  is_active  BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `visa_categories`

```sql
CREATE TABLE visa_categories (
  id          SMALLINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  code        TEXT NOT NULL UNIQUE,  -- e.g. "JOIN_FAMILY_SPOUSE"
  name        TEXT NOT NULL,         -- e.g. "Join Family — Spouse"
  group_name  TEXT,                  -- e.g. "Join Family"
  description TEXT,
  sort_order  SMALLINT DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `sponsor_categories`

```sql
CREATE TABLE sponsor_categories (
  id          SMALLINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  code        TEXT NOT NULL UNIQUE,  -- e.g. "CRITICAL_SKILLS"
  name        TEXT NOT NULL,
  description TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `occupations`

```sql
CREATE TABLE occupations (
  id          SMALLINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name        TEXT NOT NULL UNIQUE,
  sector      TEXT,                  -- e.g. "Healthcare", "Technology"
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `cases`
Core table — one row per immigration case voluntarily submitted.

```sql
CREATE TABLE cases (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  public_id             TEXT NOT NULL UNIQUE,  -- e.g. "IR-00241"
  
  -- Visa details
  visa_category_id      SMALLINT REFERENCES visa_categories(id),
  visa_office_id        SMALLINT REFERENCES visa_offices(id),
  application_year      SMALLINT,
  submission_date       DATE,
  decision_date         DATE,
  
  -- Sponsor
  sponsor_category_id   SMALLINT REFERENCES sponsor_categories(id),
  occupation_id         SMALLINT REFERENCES occupations(id),
  sponsor_is_healthcare BOOLEAN DEFAULT false,
  
  -- Applicant
  relationship          TEXT CHECK (relationship IN (
                          'spouse', 'civil_partner', 'minor_child',
                          'dependent_child', 'parent', 'other'
                        )),
  applicant_country_id  SMALLINT REFERENCES countries(id),
  
  -- Outcome
  outcome               TEXT CHECK (outcome IN (
                          'pending', 'approved', 'refused',
                          'appealed', 'appeal_approved', 'appeal_refused',
                          'withdrawn'
                        )) NOT NULL DEFAULT 'pending',
  
  -- Verification
  verification_status   TEXT NOT NULL DEFAULT 'self_reported'
                          CHECK (verification_status IN (
                            'self_reported', 'document_verified', 'official_record'
                          )),
  
  -- Publication
  is_published          BOOLEAN NOT NULL DEFAULT false,
  is_demo               BOOLEAN NOT NULL DEFAULT false,
  
  -- Metadata
  submitted_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX cases_visa_category_idx ON cases(visa_category_id);
CREATE INDEX cases_visa_office_idx ON cases(visa_office_id);
CREATE INDEX cases_outcome_idx ON cases(outcome);
CREATE INDEX cases_verification_idx ON cases(verification_status);
CREATE INDEX cases_is_published_idx ON cases(is_published);
CREATE INDEX cases_submission_date_idx ON cases(submission_date);
```

### `case_events`
Timeline events for a case.

```sql
CREATE TABLE case_events (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id     UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
  event_type  TEXT NOT NULL CHECK (event_type IN (
                'sponsor_arrived', 'application_filed', 'documents_submitted',
                'additional_docs_requested', 'biometrics_appointment',
                'decision_issued', 'appeal_filed', 'appeal_decided',
                'family_reunited', 'other'
              )),
  event_date  DATE,
  notes       TEXT,                 -- moderator notes, NOT published
  is_verified BOOLEAN DEFAULT false,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `case_documents`
References to uploaded documents (stored in private Supabase storage).

```sql
CREATE TABLE case_documents (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id         UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
  document_type   TEXT NOT NULL CHECK (document_type IN (
                    'acknowledgement', 'vfs_receipt', 'visa_decision',
                    'refusal_letter', 'appeal_decision', 'employment_permit',
                    'immigration_permission', 'other'
                  )),
  storage_path    TEXT NOT NULL,      -- Private Supabase storage path
  mime_type       TEXT NOT NULL,
  file_size_bytes INTEGER,
  label           TEXT,              -- Moderator-assigned label for display
  is_verified     BOOLEAN DEFAULT false,
  
  -- What moderators can display publicly (NO actual document)
  public_label    TEXT,              -- e.g. "Application acknowledgement — verified"
  show_publicly   BOOLEAN DEFAULT false,
  
  uploaded_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  verified_at     TIMESTAMPTZ,
  verified_by     UUID REFERENCES users(id)
);
```

### `case_verification`
Verification workflow record.

```sql
CREATE TABLE case_verification (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id           UUID NOT NULL REFERENCES cases(id),
  reviewer_id       UUID REFERENCES users(id),
  status            TEXT NOT NULL CHECK (status IN (
                      'pending', 'in_review', 'document_verified', 'rejected'
                    )),
  notes             TEXT,
  reviewed_at       TIMESTAMPTZ,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `stories`
Editorial story text attached to a case.

```sql
CREATE TABLE stories (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id         UUID NOT NULL REFERENCES cases(id),
  pseudonym       TEXT,             -- Display name e.g. "A nurse from Kerala"
  story_text      TEXT,             -- Anonymised narrative
  editorial_notes TEXT,             -- Internal notes, NOT published
  contains_allegations BOOLEAN DEFAULT false, -- Flag for editorial review
  moderation_status TEXT NOT NULL DEFAULT 'pending'
                    CHECK (moderation_status IN (
                      'pending', 'in_review', 'approved', 'rejected', 'redaction_needed'
                    )),
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `consents`
Granular consent records — one row per consent type per case.

```sql
CREATE TABLE consents (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id         UUID NOT NULL REFERENCES cases(id),
  consent_type    TEXT NOT NULL CHECK (consent_type IN (
                    'document_review',
                    'statistical_use',
                    'story_publication'
                  )),
  granted         BOOLEAN NOT NULL,
  granted_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  withdrawn_at    TIMESTAMPTZ,
  ip_hash         TEXT,             -- Hashed IP for consent record (not stored plain)
  UNIQUE(case_id, consent_type)
);
```

### `sources`
Evidence library records.

```sql
CREATE TABLE sources (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  institution     TEXT NOT NULL,
  url             TEXT,
  publication_date DATE,
  document_date   DATE,
  accessed_at     DATE NOT NULL DEFAULT CURRENT_DATE,
  archived_url    TEXT,             -- Wayback Machine or similar
  extract         TEXT,             -- Key quote or excerpt
  research_notes  TEXT,
  topics          TEXT[],           -- e.g. ARRAY['join_family', 'processing_times']
  is_active       BOOLEAN DEFAULT true,
  last_verified   DATE,
  needs_reverify  BOOLEAN DEFAULT false,
  created_by      UUID REFERENCES users(id),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `source_snapshots`
Archived snapshots of source content over time.

```sql
CREATE TABLE source_snapshots (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id   UUID NOT NULL REFERENCES sources(id),
  snapshot_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  content     TEXT,                 -- Captured text content
  archived_url TEXT,               -- Wayback Machine URL at time of snapshot
  captured_by UUID REFERENCES users(id)
);
```

### `official_processing_updates`
Time-series snapshots of official processing positions. NEVER overwrite.

```sql
CREATE TABLE official_processing_updates (
  id                        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visa_category_id          SMALLINT REFERENCES visa_categories(id),
  visa_office_id            SMALLINT REFERENCES visa_offices(id),
  source_id                 UUID REFERENCES sources(id),
  published_date            DATE,
  oldest_application_date   DATE,       -- Oldest application currently being processed
  estimated_processing_days INTEGER,    -- Estimated days if published
  raw_text                  TEXT,       -- Verbatim from official source
  captured_at               TIMESTAMPTZ NOT NULL DEFAULT now(),
  captured_by               UUID REFERENCES users(id),
  notes                     TEXT
);

CREATE INDEX processing_updates_category_idx ON official_processing_updates(visa_category_id);
CREATE INDEX processing_updates_captured_idx ON official_processing_updates(captured_at);
```

### `articles`
Editorial content. Must have at least one source.

```sql
CREATE TABLE articles (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT NOT NULL UNIQUE,
  title           TEXT NOT NULL,
  standfirst      TEXT,
  body_html       TEXT,             -- Sanitised HTML
  author_name     TEXT,
  status          TEXT NOT NULL DEFAULT 'draft'
                    CHECK (status IN ('draft', 'in_review', 'published', 'archived')),
  published_at    TIMESTAMPTZ,
  section         TEXT,             -- e.g. 'nurses', 'investigation'
  is_investigation BOOLEAN DEFAULT false,
  data_collection_status TEXT DEFAULT 'underway',
  created_by      UUID REFERENCES users(id),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `article_sources`
Junction: articles ↔ sources (enforces source-first policy).

```sql
CREATE TABLE article_sources (
  article_id  UUID NOT NULL REFERENCES articles(id),
  source_id   UUID NOT NULL REFERENCES sources(id),
  PRIMARY KEY (article_id, source_id)
);
```

### `refusals`
Structured refusal data.

```sql
CREATE TABLE refusals (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id         UUID REFERENCES cases(id),
  visa_category_id SMALLINT REFERENCES visa_categories(id),
  visa_office_id  SMALLINT REFERENCES visa_offices(id),
  country_id      SMALLINT REFERENCES countries(id),
  refusal_year    SMALLINT,
  relationship    TEXT,
  reason_category TEXT CHECK (reason_category IN (
                    'finances', 'relationship_evidence', 'purpose_of_travel',
                    'dependency', 'insufficient_documentation', 'immigration_history',
                    'credibility_concerns', 'other'
                  )),
  reason_detail   TEXT,             -- Structured text, NOT verbatim refusal letter
  is_appealed     BOOLEAN DEFAULT false,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `appeals`

```sql
CREATE TABLE appeals (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  refusal_id    UUID REFERENCES refusals(id),
  case_id       UUID REFERENCES cases(id),
  appeal_date   DATE,
  outcome       TEXT CHECK (outcome IN ('pending', 'approved', 'refused', 'withdrawn')),
  decision_date DATE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `moderation_actions`

```sql
CREATE TABLE moderation_actions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id       UUID REFERENCES cases(id),
  moderator_id  UUID REFERENCES users(id),
  action        TEXT NOT NULL,      -- e.g. 'verify_documents', 'publish', 'reject', 'flag'
  notes         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `audit_log`
Append-only. Never deleted by standard roles.

```sql
CREATE TABLE audit_log (
  id          BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  actor_id    UUID REFERENCES users(id),
  actor_role  TEXT,
  action      TEXT NOT NULL,
  entity_type TEXT,                 -- e.g. 'case', 'document', 'source'
  entity_id   TEXT,                 -- UUID or public ID
  detail      JSONB,
  ip_hash     TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX audit_log_actor_idx ON audit_log(actor_id);
CREATE INDEX audit_log_entity_idx ON audit_log(entity_type, entity_id);
CREATE INDEX audit_log_created_idx ON audit_log(created_at);
```

### `right_of_reply_records`

```sql
CREATE TABLE right_of_reply_records (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id            UUID REFERENCES articles(id),
  organisation          TEXT NOT NULL,
  contact_name          TEXT,
  contacted_at          DATE,
  questions_sent        TEXT,
  response_deadline     DATE,
  response_received_at  DATE,
  response_text         TEXT,
  published_response    TEXT,       -- Edited for publication
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### `metric_data_points`
Admin-maintained live metrics for the homepage status strip.

```sql
CREATE TABLE metric_data_points (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_key      TEXT NOT NULL UNIQUE, -- e.g. 'join_family_processing_position'
  label           TEXT NOT NULL,
  value           TEXT NOT NULL,        -- The displayed value
  unit            TEXT,                 -- e.g. "days", "applications"
  source_id       UUID REFERENCES sources(id),
  source_url      TEXT,
  source_date     DATE,
  last_checked    DATE,
  methodology     TEXT,
  updated_by      UUID REFERENCES users(id),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

---

## Row-Level Security Policies Summary

| Table | Public Read | Moderator Read | Admin Write | Notes |
|-------|-------------|----------------|-------------|-------|
| cases | Published only | All | Yes | RLS on is_published |
| case_documents | None | Assigned | Yes | Never public |
| case_verification | None | Own reviews | Yes | |
| stories | Published only | All | Yes | |
| consents | None | None | Yes | Admin only |
| sources | All | All | Yes | |
| audit_log | None | None | Append only | |
| metric_data_points | All | All | Admin only | |
| official_processing_updates | All | All | Yes | Insert only, no delete |

---

## Seed Data (Reference)

Non-personal reference data to seed on setup:
- Countries (ISO standard list)
- Visa categories (defined above)
- Sponsor categories
- Visa offices (at minimum: Dublin, New Delhi, Beijing, Manila, Lagos, Karachi)
- Occupations (sectors: Healthcare/Nursing, Technology, Other)
- Reference sources (official Irish immigration sources)
