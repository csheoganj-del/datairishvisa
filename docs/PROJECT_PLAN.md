# PROJECT PLAN
## The Irish Record — Production Implementation

**Build Start:** 4 October 2026
**Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS · Supabase · Recharts

---

## Product Vision

The Irish Record is a production-quality public-interest investigative publication. It presents verified official data and voluntarily submitted case information about Irish immigration processing — particularly family reunification for internationally recruited workers.

**Core editorial principle:** Present the evidence. Let the reader judge.

**Credibility architecture:**
- Every statistic is source-attributed
- Community data is clearly distinguished from official data
- Verification tiers prevent unverified claims from appearing as facts
- Methodology is completely transparent

---

## Key Verified Data Points (from research, October 2026)

These will seed the live status strip and initial evidence library:

### Processing Dates (ISD — 29 September 2026)
- Join Family (Cat A — Irish citizen): Processing applications from **4 July 2024** (~27 months behind)
- Join Family (Cat B — CSEP etc.): Processing from **28 June 2024** (~27 months behind)  
- EU Treaty Rights (Directive): Processing from **23 March 2026** (~6 months behind)
- Employment visa: Processing from **1 August 2026** (~2 months behind)

### Employment Permits (DETE — 2 October 2026)
- Critical Skills: Processing from 25 September 2026 (~1 week)
- General Employment Permit: Processing from 26 August 2026 (~5-6 weeks)

### Nursing (NMBI State of Register 2024)
- Total registered: 89,496
- New registrants 2023-24: 7,120 (+14% YoY)
- From India: 3,717 (52.2% of new registrations)

### Policy Changes (June 2026)
- Cat A financial threshold increased: €75,000 gross cumulative over 3 years (from €40,000)
- Short-stay (Type C) visa appeal rights abolished from 1 June 2026

---

## Technical Architecture

### Framework
- Next.js 15 with App Router
- TypeScript (strict mode)
- React 19

### Styling
- Tailwind CSS v4
- CSS custom properties for brand tokens
- No UI component library (custom-built from scratch for editorial feel)
- Recharts for data visualisation

### Backend
- Supabase (PostgreSQL + Auth + Storage)
- Server Actions for mutations
- API Routes for public data endpoints
- Row-Level Security on all tables

### Key Libraries
```json
{
  "@supabase/supabase-js": "^2.x",
  "@supabase/ssr": "^0.x",
  "recharts": "^2.x",
  "zod": "^3.x",
  "date-fns": "^3.x",
  "lucide-react": "^0.x"
}
```

---

## Routes

### Public Routes
| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/visa-tracker` | Interactive case data dashboard |
| `/family-separation` | Anonymised case tracker |
| `/nurses` | Investigative section on nursing recruitment |
| `/stamp-4` | Stamp 4 pathway explainer |
| `/eu-vs-non-eu` | Legal framework comparison |
| `/new-delhi` | India/New Delhi visa office dashboard |
| `/refusals` | Anonymised refusal database |
| `/evidence` | Source and evidence library |
| `/stories` | Editorial case stories |
| `/submit` | Multi-step case submission form |
| `/methodology` | Full methodology disclosure |
| `/editorial-standards` | Editorial standards |
| `/corrections` | Published corrections |
| `/right-of-reply` | Right-of-reply records |
| `/privacy` | Privacy policy |
| `/case/[publicId]` | Individual case page |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Robots configuration |

### Admin Routes
| Route | Description |
|-------|-------------|
| `/admin` | Dashboard |
| `/admin/cases` | Case queue |
| `/admin/verification` | Verification queue |
| `/admin/sources` | Evidence library management |
| `/admin/processing-updates` | Official data entry |
| `/admin/moderation` | Moderation actions |

---

## Design Tokens

### Colours
```css
--color-bg: #F5F3EE;           /* warm newsprint ivory */
--color-text: #111111;          /* primary text */
--color-secondary: #4B4B47;    /* secondary text */
--color-dark-bg: #111310;       /* investigation sections */
--color-accent: #8B3A3A;        /* deep muted burgundy */
--color-accent-rust: #9E4F2F;   /* rust accent */
--color-border: #D8D4CB;        /* warm border */
--color-muted: #E8E4DC;         /* muted bg */
```

### Typography
```css
/* Serif — headlines, investigation titles, quotes */
--font-serif: 'Playfair Display', Georgia, serif;

/* Sans — navigation, stats, labels, interface */  
--font-sans: 'Inter', system-ui, sans-serif;
```

---

## File Structure

```
/
├── docs/
│   ├── DPIA.md
│   ├── SECURITY.md
│   ├── DATA_MODEL.md
│   └── SOURCE_REGISTER.md
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── (public)/               # Public routes
│   │   ├── (admin)/                # Admin routes (auth-gated)
│   │   └── api/                    # API routes
│   ├── components/
│   │   ├── layout/                 # Header, Footer, Nav
│   │   ├── ui/                     # Primitive UI components
│   │   ├── charts/                 # Chart wrappers
│   │   ├── cases/                  # Case display components
│   │   ├── data/                   # Status strip, metrics
│   │   ├── forms/                  # Submission form
│   │   └── admin/                  # Admin panel
│   ├── lib/
│   │   ├── supabase/               # DB clients
│   │   ├── db/                     # Query functions
│   │   ├── validations/            # Zod schemas
│   │   └── utils/                  # Helpers
│   └── types/                      # TypeScript types
├── supabase/
│   └── migrations/                 # Schema SQL files
├── .env.example
├── next.config.ts
└── tailwind.config.ts
```

---

## Development Phases

### ✅ Phase 1: Research (Complete)
- Official processing dates verified
- Stamp 4 pathways documented
- Nursing statistics verified
- Legal framework documented
- Source register created

### ✅ Phase 2: Architecture (Complete)
- Data model designed
- DPIA prepared
- Security document prepared
- Source register populated

### 🔄 Phase 3: Core Infrastructure
- Next.js project scaffold
- Tailwind design tokens
- Layout components (Header, Footer)
- Supabase integration
- Database schema

### ⏳ Phase 4: Homepage
### ⏳ Phase 5: Visa Tracker
### ⏳ Phase 6: Family Separation Tracker
### ⏳ Phase 7: Nurses & Families
### ⏳ Phase 8: Stamp 4 + EU vs Non-EU
### ⏳ Phase 9: New Delhi Dashboard
### ⏳ Phase 10: Submissions (secure)
### ⏳ Phase 11: Admin/Moderation
### ⏳ Phase 12: Evidence Library
### ⏳ Phase 13: Accessibility/Security/SEO
### ⏳ Phase 14: Browser QA
### ⏳ Phase 15: Fix issues

---

## Environment Variables Required

See `.env.example` for full documentation.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (public) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server only, never client) |
| `NEXT_PUBLIC_SITE_URL` | Production URL |
| `NEXT_PUBLIC_DEMO_MODE` | Enable demo data mode |

---

## Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run database migrations
npx supabase db push

# Start development server
npm run dev
```

---

## Supabase Setup

1. Create a Supabase project at https://supabase.com
2. Copy Project URL and anon key to `.env.local`
3. Run migrations: `npx supabase db push` or apply SQL from `supabase/migrations/`
4. Enable Row Level Security on all tables
5. Create storage buckets: `case-documents` (PRIVATE)
6. Set up admin user via Supabase Auth dashboard

---

*The Irish Record — Independent immigration data and public-interest reporting.*
*No source. No publish.*
