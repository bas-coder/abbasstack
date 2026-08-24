# AbbasStack Website

Static site for **abbasstack.com**, deployed on Vercel.

Design pass uses **AIWA Design Agent** workflow (warm mesh stage, floating cards, feature visuals) plus **Bugatti** typography and **ChatGPT-style** clarity.

## Pages

| File | URL |
|------|-----|
| `index.html` | `/` - B2B leads + company home |
| `eris.html` | `/eris` - Eris Open API project page (cTrader review) |

## Features

- AIWA colorflow mesh + dot grid (light mode warm `#F3F0E9`)
- Bugatti dark mode (pure black, sharp cards)
- Floating hero stage (LaunchReviewPreview pattern)
- Feature cards with visual panels (SaasFeatureVisual pattern)
- Scroll reveal animations
- Light / dark theme toggle
- Grade 3 reading level copy

## Deploy

1. Copy `abbasstack-site/` contents to your GitHub repo root
2. Push - Vercel redeploys
3. Hard refresh `abbasstack.com`

## Local preview

```bash
cd abbasstack-site
npx serve .
```
