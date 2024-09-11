import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <html lang="cs">
      <head>
        <title>AI Sova - Inteligentní admin dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="AI, admin dashboard, Next.js, React, Tailwind CSS, Supabase"
        />
        <meta name="description" content="AI Sova je pokročilý admin dashboard s integrovanou AI funkcionalitou, postavený na moderních webových technologiích." />
        <meta itemProp="name" content="AI Sova" />
        <meta
          itemProp="description"
          content="Pokročilý admin dashboard s AI funkcionalitou"
        />
        <meta
          itemProp="image"
          content="https://ai-sova.com/seo-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Sova - Inteligentní admin dashboard"
        />
        <meta
          name="twitter:description"
          content="Pokročilý admin dashboard s AI funkcionalitou"
        />
        <meta
          name="twitter:image"
          content="https://ai-sova.com/twitter-card-image.png"
        />
        <meta
          property="og:title"
          content="AI Sova - Inteligentní admin dashboard"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-sova.com" />
        <meta
          property="og:image"
          content="https://ai-sova.com/og-image.png"
        />
        <meta
          property="og:description"
          content="AI Sova je pokročilý admin dashboard s integrovanou AI funkcionalitou, postavený na moderních webových technologiích."
        />
        <meta
          property="og:site_name"
          content="AI Sova"
        />
        <link rel="canonical" href="https://ai-sova.com" />
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body id={'root'} className="loading bg-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>
            <main id="skip">{children}</main>
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
