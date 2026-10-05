# Đàm Lương — agent website

Static Vietnamese website. Open `index.html` directly, or serve this directory locally:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/. No build, installation, or hosted service is required.

## Design

The homepage follows established personal-agent layouts: property-led opening, agent profile, featured projects, services, evidence of work, process, questions, and direct contact. Its primary structural reference is [Jade Mills Estates](https://jademillsestates.com/). Related references: [Huynh Vo](https://huynhvo.com/) and [Ryan Serhant](https://ryanserhant.com/). All layout code and copy were written for this project; reference-site photographs, branding, and client reviews were not imported.

## Files

- `index.html`: page content, navigation, FAQs, and structured data.
- `assets/css/styles.css`: desktop/mobile layout and typography.
- `assets/js/main.js`: mobile menu, current year, certificate dialog, contextual enquiry drafting, and mobile keyboard-focus clearance.
- `assets/img/`: existing project imagery and new monogram favicon.
- `assets/fonts/`: locally served Lora variable font and its SIL Open Font License. Vietnamese coverage is documented in [Google Fonts metadata](https://github.com/google/fonts/blob/main/ofl/lora/METADATA.pb).

## Content provenance

The existing `content_approval_checklist.md` and media manifest were used for project and experience wording. The certificate is a **team award** for Mayhomes room MH26.1, January and February 2026. It is not presented as an individual award or developer endorsement. Featured project renderings are labeled as illustrations. Current prices, live property availability, client quotations, transaction counts, and return claims were not supplied and are not invented.

Phone/Zalo: `+84332610703`. Facebook: `https://www.facebook.com/kem.kem.79`.

The October 2 follow-up replaces the event selfie with the existing office photograph and adds two dated case studies. Case narratives are explicitly attributed to Đàm Lương's own posts, not presented as client testimonials. See `content_provenance.md` for exact source records and approval entries. Client-approved quotes and a dedicated professional portrait were unavailable; testimonials are deferred until approved material is supplied.

This is a local redesign. There is no publishing or deployment step in this change.

## Validation

Chromium checks cover image loading, internal anchors, unique IDs, structured-data parsing, consistent contact links, and horizontal overflow at 320, 390, 580, 768, 800, 900, 960, 961, 1024, and 1440 pixels. Interaction checks cover mobile navigation, short landscape menus, Escape behavior, keyboard-operated case and FAQ entries, certificate dialog closing/focus restoration, draft-copy success and denial, and navigation without JavaScript. Automated axe-core checks cover WCAG 2 A/AA, 2.1 AA, and 2.2 AA rules at desktop and mobile widths. Desktop and mobile screenshots were inspected visually; automated checks do not establish complete accessibility compliance.

The original site is preserved in `../site-backup-before-redesign-2026-10-02/`.

The version before the portrait/case-study follow-up is preserved in `../site-backup-before-client-cases-2026-10-02/`.

## Final review improvements

Reading text and tap targets were enlarged; case details use native disclosures to keep the page easier to scan. The short landscape menu scrolls within the available viewport. Certificate viewing uses a native image link enhanced with a dialog. The enquiry composer accepts a purpose, area/project, and optional note; it copies a draft for the visitor to paste into Zalo. It sends no messages and requires no backend. Clipboard denial exposes a selectable draft.

The source photograph with visible document details was replaced by an existing project photograph whose source post date is shown. Unused assets are preserved in `../site-private-assets-review-2026-10-02/`, outside the served site. The version before this review is preserved in `../site-backup-before-final-review-2026-10-02/`.


## Selected archive and supplied-photo revision — 2026-10-03

The website base is the user-selected `../site-20261003T153652Z-1-001.zip`. The rejected modern premium revision is preserved separately in `../site-backup-before-archive-restoration/`.

The original cream/green design, Lora typography, hero, section order and project content are retained. Six original JPEGs from `../Chi Huong [03-10-2026 22_34].zip` are used: one profile photograph and five gallery images. Full images open through the existing accessible dialog, with native image links available without JavaScript. No photo modification or fabricated client statements are introduced. See `content_provenance.md` for file mapping.

The photo gallery is independent of the dated case histories. The newer project detail pages and Inter font are absent from this restored website. This revision is local and has not been published.
Validation for this restored revision: 43 website checks and 16 gallery checks passed in Chromium. All six supplied JPEGs retain their original bytes. Desktop/mobile layouts, full-size image viewing, keyboard focus restoration and native no-script image links were verified.


## Caption cleanup — 2026-10-05

At the user's request, photo captions, source lines, date badges and repetitive case explanations were removed from the visible website. Concise service examples, team recognition, interpretation experience and direct Facebook/phone/Zalo links remain. Source records are retained in `content_provenance.md` for editorial verification. Images retain their original files and accessible descriptions. The previous version is preserved in `../site-backup-before-caption-cleanup-2026-10-05/`.

Photo-frame and Facebook update, 2026-10-05: the offset decorative outline is replaced with a border aligned to the photo container. Visible illustration labels were removed at the user's request. Facebook is accessible from the main navigation and mobile contact bar at https://www.facebook.com/kem.kem.79 . Eight responsive widths and full-size viewing were reviewed. The design target is a clear, credible and approachable personal adviser website. The prior version is backed up in ../site-backup-before-frame-facebook-2026-10-05/.
