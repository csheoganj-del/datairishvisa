# Data Protection Impact Assessment (DPIA) Preparation Document
## The Irish Record

**Status:** DRAFT — Requires review by qualified Irish GDPR/Data Protection legal counsel before go-live.

**Prepared:** October 2026
**Organisation:** The Irish Record

> ⚠️ **Legal Review Required.** This document identifies data protection considerations and risk scenarios. It does not constitute a completed DPIA. Items marked **[LEGAL REVIEW REQUIRED]** must be reviewed by a qualified data protection professional with knowledge of Irish law and GDPR before the site collects personal data.

---

## 1. Overview

### 1.1 Project Description

The Irish Record is an independent public-interest website that:
- Collects voluntarily submitted immigration case data from members of the public
- Publishes anonymised aggregated statistical analysis
- Publishes anonymised individual case stories (with explicit consent)
- Maintains a library of official published sources
- Provides an administrative interface for editorial moderation

### 1.2 Data Controller

**[LEGAL REVIEW REQUIRED]** — The legal entity operating as data controller must be established, registered and named. Consider whether this is an individual journalist, a limited company, a press/media entity or another form. This affects applicable legal obligations.

### 1.3 Data Protection Officer

**[LEGAL REVIEW REQUIRED]** — Assess whether appointment of a DPO is required under GDPR Article 37, particularly given processing of special category or high-risk data.

---

## 2. Data Categories Processed

### 2.1 Submitter Personal Data (High Sensitivity)

| Data Category | Examples | Sensitivity | Legal Basis Needed |
|---------------|----------|-------------|-------------------|
| Contact information | Email address (for correspondence only) | Medium | **[LEGAL REVIEW]** |
| Immigration status | Visa type, permission stamp, permit category | **HIGH** | **[LEGAL REVIEW]** |
| Nationality | Country of nationality | **HIGH** | **[LEGAL REVIEW]** |
| Occupation | Job title, employer sector | Medium | **[LEGAL REVIEW]** |
| Relationship data | Spouse, children, parents | **HIGH** | **[LEGAL REVIEW]** |
| Immigration timeline | Application dates, decision dates | **HIGH** | **[LEGAL REVIEW]** |
| Case outcome | Approval, refusal, appeal | **HIGH** | **[LEGAL REVIEW]** |
| Personal narrative | Written account of experience | **HIGH** | **[LEGAL REVIEW]** |

### 2.2 Uploaded Immigration Documents (Very High Sensitivity)

These documents may contain:

- **Passport data** (biographic page, passport number, photograph)
- **IRP/GNIB card numbers**
- **Visa reference numbers**
- **Home addresses**
- **Date of birth**
- **Employer information**
- **Financial documents** (bank statements, payslips)
- **Marriage/birth certificates**
- **Photographs**
- **Children's personal data** (names, dates of birth, photographs)
- **Signatures**
- **Medical information** (in some cases)
- **Refusal letters** (containing detailed personal assessments)

> ⚠️ **CAUTION:** Uploaded documents are among the most sensitive categories of personal data this site will handle. They must NEVER be publicly accessible. Strict access controls and encryption at rest are required.

### 2.3 Children's Data

**[LEGAL REVIEW REQUIRED]** — Some submissions may include information about minor children. GDPR provides enhanced protections for children's data. The legal basis for collecting and processing children's data must be carefully established. Consider whether a separate consent mechanism or parental/guardian consent architecture is required.

### 2.4 Official Data

Official published statistics, processing dates, and public records are not personal data and are published under their respective source licences.

---

## 3. Processing Purposes and Lawful Basis

### 3.1 Purpose 1: Statistical Research / Aggregated Analysis

**Purpose:** Compile aggregated anonymous statistics about Irish immigration processing times and outcomes for public-interest research.

**Lawful Basis Candidate:** Article 6(1)(e) — Processing in the public interest, OR Article 6(1)(a) — Consent

**[LEGAL REVIEW REQUIRED]** — The most appropriate lawful basis must be determined. If relying on public interest, the precise legal basis in Irish national law must be identified. If relying on consent, consent must be freely given, specific, informed and unambiguous.

**Special Category Data Consideration:** Nationality and immigration status may constitute special category data or be closely connected to it. **[LEGAL REVIEW REQUIRED]** — An Article 9 basis must be identified.

### 3.2 Purpose 2: Anonymised Story Publication

**Purpose:** Publish anonymised individual case experiences for public-interest journalism.

**Lawful Basis Candidate:** Consent (Article 6(1)(a)) and/or journalistic exemption under Article 85 GDPR and the Data Protection Act 2018 (Ireland).

**[LEGAL REVIEW REQUIRED]** — Ireland's implementation of Article 85 and journalistic exemptions under the Data Protection Act 2018, Part 5, must be assessed for applicability.

### 3.3 Purpose 3: Document Verification

**Purpose:** Moderators review submitted immigration documents to verify case timelines.

**Lawful Basis Candidate:** Consent (Article 6(1)(a))

**Note:** Consent must be granular. A person must be able to consent to document review without consenting to story publication.

### 3.4 Purpose 4: Contact and Correspondence

**Purpose:** Contact submitters about their case, withdrawal requests, corrections.

**Lawful Basis Candidate:** Consent (Article 6(1)(a)) or Legitimate Interests (Article 6(1)(f))

---

## 4. Risk Scenarios

### 4.1 HIGH RISK: Unauthorised Access to Immigration Documents

**Scenario:** A malicious actor gains access to private Supabase storage containing immigration documents.

**Consequence:** Exposure of passports, visa numbers, children's data, financial records — serious harm to submitters.

**Mitigations:**
- Documents stored in private Supabase buckets (no public URL)
- Access only via signed URLs generated server-side for authorised moderators
- Row-level security policies restricting storage access
- Admin role separation (editor vs senior moderator vs system admin)
- Audit log of all document access
- Encryption at rest (Supabase provides this)
- No documents in source code, logs, or error messages

**Residual Risk:** Medium (dependent on implementation quality and Supabase platform security)

### 4.2 HIGH RISK: Re-identification of Anonymised Cases

**Scenario:** Combination of publicly displayed case attributes (visa category, nationality, occupation, application date, office) allows re-identification of a specific individual.

**Consequence:** Person's immigration history becomes publicly linkable to their identity without consent.

**Mitigations:**
- Small-sample suppression (do not display breakdowns with n < 5)
- Round waiting days to nearest week in public display
- No employer name or location unless explicitly consented
- No children's names or dates of birth ever published
- Moderation review of all published story text for re-identification risk
- Public case IDs are random (IR-XXXXX) not sequential

**Residual Risk:** Medium — **[LEGAL REVIEW REQUIRED]** to assess adequacy of anonymisation standard.

### 4.3 HIGH RISK: Children's Personal Data

**Scenario:** Submissions include information about minor children. If inadequately anonymised, children's data is published.

**Consequence:** Potential breach of enhanced GDPR protections for children.

**Mitigations:**
- Explicit instruction to submitters not to include children's identifying details
- Moderation checklist item: children's data review
- Children's details never published (case shows "minor child" category only)
- **[LEGAL REVIEW REQUIRED]** — Whether additional consent architecture is required.

### 4.4 MEDIUM RISK: Defamatory or Legally Problematic Content

**Scenario:** A submitter's story contains allegations of corruption, racism, discrimination or illegal conduct by named individuals or organisations.

**Consequence:** Legal liability for The Irish Record.

**Mitigations:**
- Editorial safeguard flags in submission form
- Moderation keyword detection for high-risk language
- Stories containing allegations require senior editorial review
- Right-of-reply process for named organisations
- Legal disclaimer on all pages

### 4.5 MEDIUM RISK: Spam / Fabricated Submissions

**Scenario:** Coordinated submission of false cases distorts statistics.

**Consequence:** Publication of inaccurate data presented as research.

**Mitigations:**
- Verification tiers (SELF-REPORTED vs DOCUMENT VERIFIED)
- Only DOCUMENT VERIFIED cases included in core statistics
- Duplicate detection in admin panel
- Rate limiting on submission endpoint
- All data labelled with sample size and verification status

### 4.6 LOW-MEDIUM RISK: Data Subject Withdrawal

**Scenario:** A submitter requests deletion of their case and data.

**Consequence:** If not handled correctly, breach of GDPR Article 17 rights.

**Mitigations:**
- Withdrawal mechanism built into submission confirmation
- Contact email for data requests
- Admin withdrawal workflow that anonymises/deletes case data
- Audit log preserves that a case existed and was withdrawn (no personal data)

---

## 5. Retention

**[LEGAL REVIEW REQUIRED]** — A formal retention schedule must be established for:

| Data Category | Proposed Retention | Notes |
|---------------|-------------------|-------|
| Submitted case data (aggregated/anonymised) | Indefinitely (no personal data) | Confirm anonymisation adequacy |
| Uploaded immigration documents | Until moderation complete, then deletion | Confirm timing |
| Contact email addresses | Until case resolved + reasonable period | Must be defined |
| Audit log entries | **[LEGAL REVIEW]** | Balance accountability vs minimisation |
| Consent records | Duration of processing + limitation period | **[LEGAL REVIEW]** |
| Withdrawn case data | Anonymised record only | Personal data deleted |

---

## 6. Access Controls

| Role | Cases (anonymised) | Documents | Admin Panel | User PII |
|------|-------------------|-----------|-------------|----------|
| Public | Read (published only) | None | None | None |
| Submitter | Own case | Own (upload only) | None | Own |
| Moderator | All cases (read) | Assigned cases | Limited | Limited |
| Senior Moderator | All cases | All documents | Full | Full |
| System Admin | All | All | Full | Full |

---

## 7. International Transfers

**[LEGAL REVIEW REQUIRED]** — Assess whether use of Supabase (hosted infrastructure) constitutes an international transfer under GDPR Chapter V. Supabase offers EU region hosting — confirm data residency settings.

---

## 8. Data Subject Rights

The site must support:

- **Access** (Article 15): Mechanism for submitters to access their data
- **Rectification** (Article 16): Mechanism to correct inaccurate data
- **Erasure** (Article 17): Withdrawal mechanism
- **Restriction** (Article 18): Ability to restrict processing while dispute resolved
- **Portability** (Article 20): Where applicable
- **Objection** (Article 21): Where legitimate interests lawful basis used

---

## 9. Breach Notification Procedures

**[LEGAL REVIEW REQUIRED]** — A breach notification procedure must be established covering:
- Internal detection and assessment
- DPC (Data Protection Commission) notification within 72 hours where required
- Submitter notification where high risk to individuals

Contact: Data Protection Commission Ireland — https://www.dataprotection.ie

---

## 10. Areas Requiring Professional Review Before Go-Live

1. Legal entity and data controller registration
2. DPO requirement assessment
3. Lawful basis for each processing purpose (especially immigration status / special category data)
4. Adequacy of anonymisation approach
5. Children's data architecture
6. Article 85 journalistic exemption applicability
7. Retention schedule
8. International transfer assessment for Supabase
9. Data subject rights procedures
10. Breach notification procedures
11. Privacy notice drafting
12. Terms and conditions

---

*This document is a preparation aid. It does not constitute legal advice and does not satisfy the requirement for a completed DPIA under GDPR Article 35. Professional legal review by a qualified Irish GDPR practitioner is required.*
