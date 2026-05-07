EMVYAI LOGO PACK — WEBSITE IMPLEMENTATION

FILES INCLUDED
- emvyai-logo-lockup-generated.png: 2172 x 724 px, mode RGB
- emvyai-logo-mark-generated.png: 1254 x 1254 px, mode RGB
- emvyai-wordmark-generated.png: 2172 x 724 px, mode RGB
- emvyai-logo-lockup-transparent.png: 1220 x 804 px, mode RGBA
- emvyai-logo-lockup-transparent.webp: 1220 x 804 px, mode RGBA
- emvyai-logo-mark-transparent.png: 370 x 390 px, mode RGBA
- emvyai-logo-mark-transparent.webp: 370 x 390 px, mode RGBA
- emvyai-logo-wordmark-transparent.png: 778 x 225 px, mode RGBA
- emvyai-favicon-512.png: 370 x 390 px, mode RGBA
- emvyai-logo-approx.svg: vector/SVG or non-raster file

RECOMMENDED USAGE

1. Website header logo
Use:
- emvyai-logo-lockup-transparent.webp
Fallback:
- emvyai-logo-lockup-transparent.png

CSS:
.logo {
  height: 40px;
  width: auto;
  display: block;
}

Mobile:
.logo {
  height: 32px;
}

2. Hero / brand section
Use:
- emvyai-logo-lockup-generated.png
or
- emvyai-logo-lockup-transparent.png

Recommended display:
- Desktop width: 360px–520px
- Mobile width: 220px–300px
- Keep width auto / height auto
- Do not crop or stretch

3. Logo mark / icon use
Use:
- emvyai-logo-mark-transparent.webp
Fallback:
- emvyai-logo-mark-transparent.png

Recommended display:
- Header icon only: 36px–44px height
- Card/icon usage: 48px–72px
- App icon/fav icon: use emvyai-favicon-512.png

4. Wordmark only
Use:
- emvyai-logo-wordmark-transparent.png

Recommended display:
- Header wordmark only: 140px–180px wide desktop
- Mobile wordmark only: 120px–150px wide

5. Favicon
Use:
- emvyai-favicon-512.png

HTML:
<link rel="icon" type="image/png" href="/assets/emvyai-favicon-512.png" />

HEADER HTML EXAMPLE

<img
  src="/assets/emvyai-logo-lockup-transparent.webp"
  alt="EMVYAI"
  class="site-logo"
/>

HEADER CSS EXAMPLE

.site-logo {
  height: 40px;
  width: auto;
  display: block;
  object-fit: contain;
}

@media (max-width: 768px) {
  .site-logo {
    height: 32px;
  }
}

MEASUREMENTS / SPACING

Header:
- Desktop header height: 80px–88px
- Mobile header height: 68px–76px
- Logo desktop height: 40px–48px
- Logo mobile height: 32px–38px
- Left page padding desktop: 48px–80px
- Left page padding mobile: 20px–24px

Logo lockup ratio:
- Use 3:1 lockup ratio where possible
- Never squeeze horizontally
- Never crop glow
- Leave minimum clear space around logo equal to 25% of logo mark height

Logo mark ratio:
- Square/icon format
- Use 1:1 container
- Keep mark centered
- Leave 10%–15% padding inside icon container if used in a square button/card

COLORS

Main background:
#020617

Dark navy:
#050816

Surface/card:
#0B1020

White text:
#F8FAFC

Muted text:
#CBD5E1

Electric blue:
#007BFF

Deep blue:
#2563EB

Purple:
#7C3AED

Neon purple:
#8B5CF6

Magenta:
#D946EF

Cyan accent:
#38BDF8

Primary gradient:
linear-gradient(90deg, #2563EB 0%, #7C3AED 45%, #D946EF 100%)

Accent/logo gradient:
linear-gradient(135deg, #007BFF 0%, #7C3AED 55%, #D946EF 100%)

IMPORTANT NOTES

- Use WebP first for the live website.
- Use PNG as fallback.
- SVG included is approximate only, not the exact glowing 3D mark.
- For visual accuracy, use the raster transparent logo assets, not the approximate SVG.
- Do not stretch, recolor, or crop the logo.
- Place logo on a dark navy/black background for best result.
