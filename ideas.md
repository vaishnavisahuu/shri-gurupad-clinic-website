# Design Exploration

## Approach 1

**Theme Name:** Apothecary Editorial

**Very Brief Intro:** A quiet, premium clinic identity shaped by modern apothecary packaging, Indian botanical references, and editorial healthcare storytelling. Warm ivory, deep verdant green, and a restrained antique-gold accent make the experience feel grounded and considered.

**Probability:** 0.07

## Approach 2

**Theme Name:** Garden House Calm

**Very Brief Intro:** A light, airy wellness direction with sunlit sage surfaces, soft botanical photography, and gentle rounded forms. It prioritizes family comfort and an approachable feeling over clinical authority.

**Probability:** 0.03

## Approach 3

**Theme Name:** Heritage Modernist

**Very Brief Intro:** A bolder architectural interpretation using dark green slabs, high-contrast serif typography, and precise geometric frames. The tone is confident and established, like a long-standing specialist practice reimagined for today.

**Probability:** 0.09

# Selected Direction: Apothecary Editorial

## Design Movement

Modern apothecary editorial with a touch of Japanese-inspired restraint: tactile paper-like surfaces, botanical linework, expressive serif headlines, and generous asymmetrical spacing.

## Core Principles

1. **Credibility before decoration:** credentials, hours, location, and specialist focus are surfaced early and clearly.
2. **Quiet richness:** use warm ivory, deep green, and antique gold with texture and contrast instead of gradients or visual noise.
3. **Editorial asymmetry:** favor split compositions, offset cards, left rails, and staggered content blocks over centered website-template grids.
4. **Human-scale conversion:** every major section resolves toward a practical action—call, WhatsApp, directions, or consultation.

## Color Philosophy

The visual system should feel like a calm consultation room rather than a generic medical interface. Deep verdant green (#174D36) communicates trust and clinical steadiness; warm cream (#FFF9EE) keeps long-form content inviting; sage (#EDF5EE) gives wellness sections breathable space; sandalwood gold (#C79A4B) acts as the ownable detail that references herbal oils, brass vessels, and traditional craft without becoming ornamental. Text stays near-black green (#1D2924) for comfortable reading.

## Layout Paradigm

A vertical editorial journey with a slim section index, asymmetrical two-column hero, offset credential card, split treatment panels, horizontal process line, and a masonry-style gallery. On mobile, the same hierarchy collapses into a clear reading stack with a persistent action bar.

## Signature Elements

- Fine botanical contour lines and cropped leaf silhouettes used as low-opacity background motifs.
- Small uppercase section labels with a gold rule and numeric index, like a printed clinical journal.
- Soft paper grain, hairline borders, and deep-green inset panels that create tactile depth without heavy shadows.

## Interaction Philosophy

Interactions should feel like opening a well-made field guide: buttons respond with a small press and color shift, cards lift only slightly, gallery images reveal a caption on hover and a focused lightbox on tap, and the appointment flow is direct and reassuring. All phone and WhatsApp actions remain one tap away, with no dead-end placeholder actions.

## Animation

Use short fade-up reveals with staggered delays for sections and cards, subtle image scale on gallery hover, and a restrained number count-up when statistics enter the viewport. Keep motion to transform and opacity, use an ease-out curve, and disable non-essential motion under `prefers-reduced-motion`.

## Typography System

Use **DM Serif Display** for high-impact English headlines, **Manrope** for body copy, labels, and CTAs, and **Noto Sans Devanagari** for the Hindi clinic name. Headlines use tight line-height and selective italic emphasis; labels are compact, uppercase, and widely tracked; body copy stays at 16–18px with generous line-height.

## Brand Essence

**Shri Gurupad is the Indore clinic for people seeking grounded Ayurvedic and Panchkarma guidance that connects specialist expertise with individualized care.**

Personality: **grounded, discerning, reassuring**.

## Brand Voice

Headlines are clear, calm, and quietly confident. CTAs are specific and human. Microcopy reassures without promising outcomes and uses “care for,” “support,” and “consultation” language instead of cure claims.

Example lines:

- “Rooted in Ayurveda. Guided by assessment.”
- “Bring your questions. Leave with a clearer care plan.”

## Wordmark & Logo

Use a compact symbol built from a rising leaf, a small sun-disc, and a curved pathway line—an abstract mark for balance, renewal, and guided care. Pair it with a custom-spaced uppercase English wordmark and the Hindi clinic name as a secondary line; the symbol should also work alone as the favicon.

## Signature Brand Color

**Sandalwood Gold — #C79A4B.** A muted, earthy gold inspired by brass and herbal oils; used sparingly for rules, rings, eyebrow labels, and key moments of emphasis.

## Implementation Reminders

- Keep the site light-themed and high-contrast.
- Use generated imagery only for prominent visual storytelling and always preserve supplied clinic photography if it becomes available.
- Keep medical claims qualified and informational.
- Make the appointment modal and WhatsApp handoff fully functional on the frontend.
