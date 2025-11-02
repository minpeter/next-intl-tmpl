'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Link, usePathname } from '@/shared/i18n/navigation';
import { routing } from '@/shared/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <LocaleSwitcher />
      <h1>CLIENT: {t('title')}</h1>
      <h1>CLIENT: {t('title-ko-only')}</h1>
    </div>
  );
}

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-2 p-4">
      {routing.locales.map((l) => {
        const isActive = locale === l;
        return (
          <Link
            key={l}
            href={pathname}
            locale={l}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 font-medium text-sm transition-colors ${
              isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isActive && <span aria-label="Selected">✓</span>}
            {t('switchLocale', { locale: l })}
          </Link>
        );
      })}
    </div>
  );
}
