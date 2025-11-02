'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>CLIENT: {t('title')}</h1>
      <h1>CLIENT: {t('title-ko-only')}</h1>
    </div>
  );
}
