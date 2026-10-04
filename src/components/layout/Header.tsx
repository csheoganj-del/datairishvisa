'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/dependence', label: 'DEPENDENCE' },
  { href: '/family-status', label: 'FAMILY & STATUS' },
  { href: '/rights-gap', label: 'RIGHTS GAP' },
  { href: '/if-they-stopped', label: 'IF THEY STOPPED' },
  { href: '/cases', label: 'CASES' },
  { href: '/evidence', label: 'EVIDENCE' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)',
      }}
      role="banner"
    >
      {/* Top Banner */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-dark)',
          color: 'var(--color-text-inverse)',
          fontSize: '0.6875rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '0.35rem 1rem',
          textAlign: 'center',
          fontFamily: 'var(--font-sans)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        Independent immigration data observatory & public-interest evidence archive
      </div>

      <div className="container-editorial">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            gap: '1rem',
          }}
        >
          {/* Masthead */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.8vw, 1.875rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              textDecoration: 'none',
              lineHeight: 1,
              flexShrink: 0,
            }}
            aria-label="The Irish Record — Home"
          >
            THE IRISH RECORD
          </Link>

          {/* Primary Navigation */}
          <nav
            aria-label="Primary navigation"
            style={{ display: 'none' }}
            className="editorial-desktop-nav"
          >
            <ul
              style={{
                display: 'flex',
                gap: '0.35rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                alignItems: 'center',
              }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: isActive ? 700 : 600,
                        letterSpacing: '0.08em',
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                        padding: '0.45rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'all var(--transition-fast)',
                        whiteSpace: 'nowrap',
                        borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                      }}
                      className="nav-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Strong Red CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="/report"
              style={{
                display: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: 'var(--color-accent)',
                color: '#FFFFFF',
                padding: '0.55rem 1.15rem',
                borderRadius: '2px',
                whiteSpace: 'nowrap',
                transition: 'background-color var(--transition-fast)',
                border: '1px solid rgba(0,0,0,0.15)',
                boxShadow: '0 1px 3px rgba(139, 58, 58, 0.25)',
              }}
              className="editorial-report-cta"
            >
              REPORT AN ISSUE
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                color: 'var(--color-text)',
              }}
              className="editorial-mobile-btn"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileOpen && (
          <nav
            style={{
              borderTop: '1px solid var(--color-border)',
              paddingBottom: '1.25rem',
              paddingTop: '0.5rem',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.75rem 0',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: 'var(--color-text)',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li style={{ paddingTop: '1rem' }}>
                <Link
                  href="/report"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    backgroundColor: 'var(--color-accent)',
                    color: '#FFFFFF',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '2px',
                  }}
                >
                  REPORT AN ISSUE
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <style>{`
        @media (min-width: 1080px) {
          .editorial-desktop-nav { display: flex !important; }
          .editorial-report-cta { display: inline-block !important; }
          .editorial-mobile-btn { display: none !important; }
        }
        .nav-link:hover {
          color: var(--color-text) !important;
          background-color: var(--color-bg-muted);
        }
        .editorial-report-cta:hover {
          background-color: #722E2E !important;
        }
      `}</style>
    </header>
  );
}
