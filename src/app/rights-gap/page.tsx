import type { Metadata } from 'next';

import { VerificationPill } from '@/components/ui/VerificationPill';

export const metadata: Metadata = {
  title: 'Rights Gap — Comparative Legal Frameworks | The Irish Record',
  description: 'Evidence-based legal analysis comparing EU/EEA freedom of movement rights under Directive 2004/38/EC against the Irish non-EEA statutory regime.',
};

export default function RightsGapPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              COMPARATIVE LEGAL FRAMEWORK
            </span>
            <VerificationPill status="analysis" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            The Two-Tier Architecture: EU Treaty Rights vs National Discretion
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '75ch', lineHeight: 1.7 }}>
            A comparative examination of residency, family reunification, appellate remedies, and constitutional protections across EU/EEA nationals, non-EEA permit holders, and Irish citizen families.
          </p>
        </div>
      </section>

      <div className="container-editorial" style={{ paddingTop: '3.5rem' }}>
        {/* Comparative Matrix Table */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800 }}>
              Comparative Rights Matrix
            </h2>
            <VerificationPill status="official_data" />
          </div>

          <div style={{ overflowX: 'auto', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-bg-muted)', borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: '1rem', fontWeight: 700, width: '22%' }}>Rights Dimension</th>
                  <th style={{ padding: '1rem', fontWeight: 700, width: '39%', color: 'var(--color-official)' }}>EU / EEA National (Directive 2004/38/EC)</th>
                  <th style={{ padding: '1rem', fontWeight: 700, width: '39%', color: 'var(--color-accent)' }}>Non-EEA Legal Resident (Stamp 4 / Permits)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Legal Basis</td>
                  <td style={{ padding: '1rem' }}>EU Treaty / S.I. No. 548 of 2015 (Statutory EU Law)</td>
                  <td style={{ padding: '1rem' }}>Immigration Act 2004 & Ministerial Policy Discretion</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: '#FAF9F6' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Family Reunification</td>
                  <td style={{ padding: '1rem' }}>Automatic for qualifying family members (spouse, direct descendants &lt;21, dependent ascendants)</td>
                  <td style={{ padding: '1rem' }}>Conditional on sponsor permit category, waiting periods (0–12 mos), and stringent income thresholds</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Visa / Processing Queue</td>
                  <td style={{ padding: '1rem' }}>No entry visa required for EU national; Residence Card applications currently processing from March 2026</td>
                  <td style={{ padding: '1rem' }}>Long Stay D Join Family required; queue positions currently processing from June/July 2024 (~27-month wait)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: '#FAF9F6' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Spousal Labour Access</td>
                  <td style={{ padding: '1rem' }}>Automatic, immediate, unconditional full right to work</td>
                  <td style={{ padding: '1rem' }}>Stamp 1G granted upon arrival for CSEP spouses; Stamp 3 (unpaid) or restricted permits for others</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Appeals & Legal Redress</td>
                  <td style={{ padding: '1rem' }}>Independent statutory appeal mandated by Article 31 Directive 2004/38/EC</td>
                  <td style={{ padding: '1rem' }}>No independent tribunal. Internal ISD administrative review or costly High Court Judicial Review (€13k–€36k)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: '#FAF9F6' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Permit Renewal & Re-Entry</td>
                  <td style={{ padding: '1rem' }}>Unconditional right of entry upon production of national passport/ID card</td>
                  <td style={{ padding: '1rem' }}>Conditional on physical IRP card validity. No statutory bridging leave if renewal is pending during travel</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.75rem', lineHeight: 1.5 }}>
            <em>Source Frameworks:</em> European Communities (Free Movement of Persons) Regulations 2015 (S.I. No. 548/2015); Immigration Act 2004; Department of Justice Non-EEA Family Reunification Policy.
          </p>
        </section>

        {/* Section: Constitutional & Zambrano Jurisprudence */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Irish Citizen Children & Constitutional Jurisprudence
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text)' }}>
                Article 41 & 42A (Bunreacht na hÉireann)
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                Article 41 recognizes the Family as the fundamental unit of society, while Article 42A (Thirty-First Amendment) enshrines the best interests of the child as the paramount consideration in all proceedings affecting their welfare.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                In <em>Gorry v Minister for Justice [2020] IESC 55</em>, the Irish Supreme Court confirmed that State administrative decisions must perform a proportionate balancing between constitutional family rights and immigration control interests, rather than exercising unfettered discretion.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text)' }}>
                The Ruiz Zambrano Doctrine (CJEU C-34/09)
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                The Court of Justice of the European Union held in <em>Ruiz Zambrano</em> that Article 20 TFEU precludes national measures that deprive EU citizen children of the genuine enjoyment of the substance of their rights.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                When an Irish citizen child is separated from their non-EEA primary caregiver due to 12–21 month administrative visa queues with no expedited or bridging pathway, substantial legal tensions arise with Article 24(3) of the EU Charter of Fundamental Rights.
              </p>
            </div>
          </div>
        </section>

        {/* Section: International Comparators */}
        <section style={{ backgroundColor: 'var(--color-bg-muted)', padding: '2.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
            International Comparators: Statutory Accountability
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: '80ch', marginBottom: '1.5rem' }}>
            Unlike peer jurisdictions that bind immigration processing by statutory service standards and independent tribunals, Ireland relies on administrative guidelines without external oversight:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', fontSize: '0.8125rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <strong>United Kingdom</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-secondary)' }}>
                Section 3C Leave automatically extends lawful status during pending renewal; First-Tier Tribunal provides merits review of refusals.
              </p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <strong>Germany</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-secondary)' }}>
                Skilled Immigration Act provides a 90-day statutory processing limit; Fiktionsbescheinigung guarantees border re-entry.
              </p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <strong>Canada</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-secondary)' }}>
                IRCC publishes binding processing targets with dynamic online trackers; Immigration Appeal Division (IAD) offers accessible merits appeals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
