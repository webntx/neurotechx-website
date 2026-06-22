import React from 'react';

// Consistent interior-page header: eyebrow + title + optional subtitle.
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-12">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
      {subtitle && <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
