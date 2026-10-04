import { ExternalLink } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export function SourceAttribution({ institution, title, url, date, className }: { institution: string, title?: string, url?: string | null, date?: string | null, className?: string }) {
  return (
    <div className={className} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', flexWrap: 'wrap', gap: '0.25rem 0.5rem', alignItems: 'center' }}>
      <span style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.6875rem', fontWeight: 600 }}>Source:</span>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', textDecoration: 'underline', textUnderlineOffset: '2px', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
          {title ?? institution} <ExternalLink size={10} aria-hidden="true" />
        </a>
      ) : <span>{title ?? institution}</span>}
      <span>—</span>
      <span>{institution}</span>
      {date && <><span>—</span><span>{formatDate(date)}</span></>}
    </div>
  );
}
