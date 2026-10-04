# Security Architecture
## The Irish Record

**Status:** DRAFT — Review before go-live.

**Prepared:** October 2026

---

## 1. Threat Model

### Assets to Protect

| Asset | Sensitivity | Owner |
|-------|-------------|-------|
| Immigration documents (uploaded) | **CRITICAL** | Submitters |
| Submitter PII (email, case data) | **HIGH** | Submitters |
| Children's data | **CRITICAL** | Submitters / parents |
| Admin credentials | **HIGH** | The Irish Record |
| Database contents | **HIGH** | The Irish Record |
| Source code / secrets | **HIGH** | The Irish Record |

### Threat Scenarios

#### TH-01: Malicious Upload
**Description:** Attacker uploads a malicious file disguised as an immigration document (executable, script, oversized file, polyglot).

**Mitigations:**
- Server-side MIME type validation (not just extension)
- File size limit enforced server-side (max 10MB per file)
- Supabase storage policies restrict allowed MIME types: `application/pdf`, `image/jpeg`, `image/png`
- Files stored with randomised storage paths (not predictable)
- Files are never served with `Content-Disposition: inline` for executable types
- Virus/malware scanning: **[FUTURE]** Consider ClamAV integration or cloud scanning service

#### TH-02: PII Disclosure via Public URLs
**Description:** Immigration documents accidentally placed in public storage bucket, exposing passport images, visa documents.

**Mitigations:**
- All document buckets configured as PRIVATE in Supabase
- Signed URL generation only from server-side admin functions
- Signed URLs expire after short duration (15 minutes)
- Row-level security on storage policies
- No document URLs ever sent to client-side code
- Audit log records every document access

#### TH-03: Unauthorised Moderator Access
**Description:** A rogue or compromised moderator account accesses documents or case data beyond their authorised scope.

**Mitigations:**
- Role separation: `moderator`, `senior_moderator`, `admin`
- Row-level security policies enforce role boundaries
- Audit log records all admin actions (view, approve, reject, delete)
- Senior moderator required for permanent deletion
- Moderator accounts require Supabase Auth with email verification
- No shared credentials

#### TH-04: Public ID Guessing / Enumeration
**Description:** Attacker guesses or enumerates public case IDs (IR-XXXXX) to scrape case data.

**Mitigations:**
- Public IDs use random alphanumeric suffix (not sequential numbers)
- Only published cases return data on public case pages (403/404 for unpublished)
- Rate limiting on case lookup endpoints
- No sequential database PKs exposed

#### TH-05: SQL Injection
**Description:** Attacker injects malicious SQL via user inputs.

**Mitigations:**
- All database queries use Supabase parameterised queries / PostgREST
- Zod validation on all inputs before database calls
- No raw string interpolation in SQL
- Supabase RLS provides additional database-level protection

#### TH-06: XSS (Cross-Site Scripting)
**Description:** Attacker injects malicious scripts via submission form, rendered to other users or admins.

**Mitigations:**
- React's default JSX rendering escapes all string content
- `dangerouslySetInnerHTML` not used except for pre-sanitised editorial content
- If editorial HTML is needed, sanitise with DOMPurify server-side
- Content Security Policy headers configured
- Input sanitisation with Zod on all user inputs

#### TH-07: Document Enumeration
**Description:** Attacker guesses storage paths to access documents not belonging to them.

**Mitigations:**
- Storage paths use UUID-based randomised paths (not case IDs)
- No predictable path structure
- Private bucket: no public access regardless of path knowledge
- Signed URLs required for all access

#### TH-08: Spam Submissions / Coordinated Fake Cases
**Description:** Coordinated campaign submits fabricated cases to manipulate statistics.

**Mitigations:**
- Verification tier system (SELF-REPORTED excluded from core statistics)
- Only DOCUMENT VERIFIED cases included in official analysis
- Rate limiting on submission endpoints
- hCaptcha or similar on submission form (privacy-respecting)
- Duplicate detection in admin panel (similar application dates, same category, same office)
- Admin moderation required before any case affects published statistics

#### TH-09: Scraping of Submitter Information
**Description:** Attacker scrapes published case pages to re-identify individuals.

**Mitigations:**
- No PII published (name, passport, address, email)
- Rounded/generalised data in public display
- Small sample suppression (n < 5 not displayed)
- robots.txt discourages automated scraping of case pages
- Rate limiting on public endpoints

#### TH-10: CSRF (Cross-Site Request Forgery)
**Description:** Attacker tricks authenticated admin into performing unintended actions.

**Mitigations:**
- Next.js Server Actions include built-in CSRF protection
- Supabase Auth uses JWT tokens validated server-side
- Admin actions require re-authentication for destructive operations

---

## 2. Security Headers

Configure in `next.config.ts`:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co; font-src 'self';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

---

## 3. Authentication Architecture

- Supabase Auth for admin/moderator accounts
- Email + password for admin access (no public registration)
- Admin accounts provisioned by system administrator only
- Session tokens via Supabase SSR (httpOnly cookies)
- No admin functionality accessible to unauthenticated users

---

## 4. Database Security

- Row-Level Security (RLS) enabled on ALL tables
- Policies documented in `supabase/migrations/`
- Public read: only published, anonymised case data
- Documents: never readable via public policies
- Audit tables: append-only, no delete policy for standard roles

---

## 5. File Upload Security

```
Allowed MIME types: application/pdf, image/jpeg, image/png, image/webp
Maximum file size: 10MB per file
Maximum files per submission: 10
Storage bucket: PRIVATE
Path format: {randomUUID}/{randomUUID}.{ext}
Virus scanning: [FUTURE ENHANCEMENT]
```

---

## 6. Rate Limiting

| Endpoint | Limit |
|----------|-------|
| POST /api/submit | 3 per IP per hour |
| GET /api/cases/* | 60 per IP per minute |
| POST /api/admin/* | 30 per IP per minute |
| GET /case/* | 120 per IP per minute |

Implementation: Middleware-based (consider Upstash Redis or Supabase Edge Functions for production).

---

## 7. Secret Management

- All secrets in environment variables only
- `.env.local` in `.gitignore`
- `.env.example` documents required variables without values
- No hardcoded credentials anywhere in source
- Supabase anon key is public (restricted by RLS)
- Supabase service_role key is NEVER sent to client

---

## 8. Audit Log

All the following events are recorded to `audit_log` table:

- Case submission
- Case status change
- Document viewed
- Document approved/rejected
- Story published/unpublished
- Moderator action (by whom, on which case)
- Admin login
- Permission change
- Withdrawal request received
- Withdrawal processed
- Source added/updated

Audit records are never deleted by standard moderator role.

---

## 9. Remaining Security Tasks Before Go-Live

- [ ] Penetration test or third-party security review
- [ ] Virus/malware scanning for uploaded files
- [ ] WAF configuration if deployed to Vercel/similar (edge rules)
- [ ] Formalise incident response procedure
- [ ] Conduct access review (confirm all admin accounts are legitimate)
- [ ] Test rate limiting under load
- [ ] Verify CSP does not break functionality
- [ ] Confirm Supabase storage bucket policies (private confirmed)
- [ ] Review Supabase project network restrictions (consider IP allowlisting for admin)
- [ ] Establish monitoring/alerting for anomalous submission patterns
