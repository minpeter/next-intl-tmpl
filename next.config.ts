import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: './shared/i18n/request.ts',
  experimental: {
    // Provide the path to the messages that you're using in `AppConfig`
    createMessagesDeclaration: './shared/i18n/ko.json',
  },
});

export default withNextIntl(nextConfig);
