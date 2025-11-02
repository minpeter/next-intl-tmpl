import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <h1>SERVER: {t('title')}</h1>
      <h1>SERVER: {t('title-ko-only')}</h1>
    </div>
  );
}
