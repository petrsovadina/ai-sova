# AI Sova

## Úvod

AI Sova je moderní admin dashboard s integrovanou AI funkcionalitou, postavený na nejnovějších webových technologiích. Poskytuje robustní základ pro vytváření pokročilých SaaS aplikací s důrazem na uživatelsky přívětivé rozhraní a výkonné backend funkce.

## Funkce

- Postaveno na Next.js 14 s využitím App Router
- Responzivní design s podporou tmavého a světlého režimu
- Autentizace a správa uživatelů
- Integrace AI pro pokročilé funkce chatbotu
- Zpracování plateb
- Cloudové úložiště pro soubory
- Více než 30 předpřipravených frontend komponent

## Architektura

### Frontend
- **Framework**: Next.js 14
- **UI Knihovna**: React
- **Styling**: Tailwind CSS
- **State Management**: React hooks pro lokální stav

### Backend
- **API**: Next.js API Routes (serverless funkce)
- **Databáze**: Supabase (PostgreSQL)
- **Autentizace**: Supabase Auth
- **AI Služby**: OpenAI API
- **Platební Systém**: Stripe
- **Úložiště Souborů**: AWS S3

### Klíčové Komponenty
1. **Autentizační Systém**:
   - Implementováno pomocí Supabase Auth
   - Podporuje přihlášení pomocí emailu/hesla, magic linku a OAuth poskytovatelů

2. **Dashboard**:
   - Hlavní rozhraní pro uživatele
   - Zobrazuje klíčové metriky a grafy

3. **AI Chat**:
   - Využívá OpenAI API pro generování odpovědí
   - Implementováno jako streamovaná konverzace pro rychlou odezvu

4. **Správa Uživatelů**:
   - CRUD operace pro uživatelské účty
   - Role a oprávnění

5. **Platební Systém**:
   - Integrace se Stripe pro zpracování plateb
   - Správa předplatných a fakturace

6. **Úložiště Souborů**:
   - Využívá AWS S3 pro bezpečné ukládání a správu souborů

### Vizualizace Architektury Repozitáře

```
ai-sova/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
│   │   ├── chatAPI/
│   │   │   └── route.ts
│   │   └── webhooks/
│   │       └── route.ts
│   ├── auth/
│   │   └── callback/
│   │       └── route.ts
│   └── dashboard/
│       ├── page.tsx
│       ├── ai-chat/
│       │   └── page.tsx
│       ├── main/
│       │   └── page.tsx
│       └── settings/
│           └── page.tsx
│
├── components/
│   ├── auth/
│   │   ├── AuthUI.tsx
│   │   └── index.tsx
│   ├── dashboard/
│   │   ├── ai-chat/
│   │   │   └── index.tsx
│   │   └── main/
│   │       ├── index.tsx
│   │       └── cards/
│   │           ├── MainDashboardTable.tsx
│   │           └── MainChart.tsx
│   ├── layout/
│   │   └── index.tsx
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── assets/
│
├── styles/
│   └── globals.css
│
├── types/
│   └── types_db.ts
│
├── utils/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── auth-helpers/
│       ├── client.ts
│       └── server.ts
│
├── .env.local.example
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Začínáme

### Prerekvizity
- Node.js (LTS verze)
- npm nebo yarn
- Účty pro Supabase, OpenAI, Stripe a AWS (pro S3)

### Instalace

1. Naklonujte repozitář:
   ```
   git clone [URL vašeho repozitáře]
   ```

2. Nainstalujte závislosti:
   ```
   npm install
   ```

3. Vytvořte soubor `.env.local` a nastavte následující proměnné:
   ```
   NEXT_PUBLIC_SUPABASE_URL=vaše_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=váš_supabase_anon_klíč
   SUPABASE_SERVICE_ROLE_KEY=váš_supabase_service_role_klíč
   
   NEXT_PUBLIC_OPENAI_API_KEY=váš_openai_api_klíč
   
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=váš_stripe_publishable_klíč
   STRIPE_SECRET_KEY=váš_stripe_secret_klíč
   STRIPE_WEBHOOK_SECRET=váš_stripe_webhook_secret
   
   NEXT_PUBLIC_AWS_S3_REGION=vaše_aws_s3_region
   NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID=vaše_aws_s3_access_key_id
   NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY=vaše_aws_s3_secret_access_key
   NEXT_PUBLIC_AWS_S3_BUCKET_NAME=název_vašeho_s3_bucketu
   ```

4. Spusťte vývojový server:
   ```
   npm run dev
   ```

## Vývoj

### Struktura Projektu
- `/app`: Hlavní aplikační logika a stránky
- `/components`: Znovupoužitelné React komponenty
- `/lib`: Sdílené utility a helpery
- `/styles`: Globální styly a Tailwind konfigurace
- `/public`: Statické assety

### Klíčové Soubory
- `app/layout.tsx`: Hlavní layout aplikace
- `app/page.tsx`: Úvodní stránka
- `app/dashboard/`: Složka obsahující komponenty dashboardu
- `components/auth/`: Autentizační komponenty
- `lib/supabase.ts`: Konfigurace Supabase klienta

### Přidávání Nových Funkcí
1. Vytvořte novou větev pro vaši funkci
2. Implementujte funkcionalitu
3. Otestujte lokálně
4. Vytvořte pull request pro review

## Testování

- Jednotkové testy: `npm run test`
- Integrační testy: `npm run test:integration`
- E2E testy: `npm run test:e2e`

## Nasazení

Projekt je připraven pro nasazení na platformy podporující Next.js, jako je Vercel nebo Netlify. Pro produkční nasazení:

1. Nastavte produkční proměnné prostředí
2. Spusťte build příkaz: `npm run build`
3. Nasaďte výsledný build na vaši hostingovou platformu

## Přispívání

Vítáme příspěvky od komunity! Pokud chcete přispět:

1. Forkněte repozitář
2. Vytvořte větev pro vaši funkci (`git checkout -b feature/AmazingFeature`)
3. Commitněte vaše změny (`git commit -m 'Add some AmazingFeature'`)
4. Pushněte do větve (`git push origin feature/AmazingFeature`)
5. Otevřete Pull Request

## Licence

Tento projekt je licencován pod [vaše licence] - viz soubor `LICENSE.md` pro detaily.

## Kontakt

[Vaše Jméno] - [váš_email@example.com]

Odkaz na projekt: [https://github.com/yourusername/ai-sova](https://github.com/yourusername/ai-sova)
# ai-sova
