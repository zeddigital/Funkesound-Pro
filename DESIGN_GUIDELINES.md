# Funkesound — Design Guidelines

> A reference for designers and developers maintaining or extending the Funkesound website. Follow these conventions to keep the brand consistent across every page and component.

---

## 1. Brand Identity

**Name:** Funkesound  
**Tagline:** *Premium home technology, installed with precision.*  
**Positioning:** High-end AV and home technology installation on the Mornington Peninsula, Melbourne. The brand communicates expert craftsmanship, attention to detail, and a seamless luxury experience — not a commodity trade service.

**Brand keywords:** Expert · Premium · Seamless · Precision · Craftsmanship · Peace of mind

**Tone of voice:**
- Professional yet approachable
- Confident, never boastful
- Specific over vague ("millimetre-perfect cable management", not "great installation")
- Avoid filler phrases like "cutting-edge" or "world-class"

---

## 2. Color Palette

Colors are defined as CSS custom properties in `artifacts/funkesound/src/index.css` and consumed via Tailwind utility classes.

### Core Tokens

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--primary` | `hsl(116 75% 37%)` | `hsl(116 75% 59%)` | CTAs, icons, highlights |
| `--background` | `hsl(0 0% 98%)` — `#FAFAFA` | `hsl(0 0% 5%)` | Page background |
| `--foreground` | `hsl(220 15% 12%)` | `hsl(0 0% 94%)` | Body text |
| `--card` | `hsl(0 0% 100%)` | `hsl(0 0% 8%)` | Card surfaces |
| `--muted` | `hsl(220 10% 94%)` | `hsl(0 0% 12%)` | Subtle backgrounds |
| `--muted-foreground` | `hsl(220 10% 45%)` | `hsl(0 0% 60%)` | Secondary / helper text |
| `--border` | `hsl(220 10% 88%)` | `hsl(0 0% 15%)` | Borders, dividers |

### Hero Overlays

Hero sections always use a background image with a dark gradient overlay to ensure text legibility:

```css
background: linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.70))
/* Tailwind: bg-gradient-to-b from-black/45 to-black/70 */
```

Hero backgrounds: `#0D0D0D` / `#111827` — deep charcoal, never pure black.

### Accent Tints

- Green badge background: `hsl(116 60% 92%)` — used for icon wrappers and badge chips
- Primary overlay on images: `bg-primary/20 mix-blend-overlay`

---

## 3. Typography

Fonts are loaded via Google Fonts in `index.html`.

| Role | Font | Tailwind Class | Notes |
|---|---|---|---|
| Display / Headings | **Outfit** | `font-display` | All H1–H3, hero text |
| Body / UI | **Inter** | `font-sans` | Navigation, body copy, buttons |

### Scale

| Element | Classes | Typical size |
|---|---|---|
| Hero H1 | `text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter` | 48–96px |
| Section H2 | `text-3xl md:text-4xl font-bold tracking-tight` | 30–36px |
| Section H3 | `text-xl md:text-2xl font-bold` | 20–24px |
| Lead / subtitle | `text-lg md:text-xl font-medium` | 18–20px |
| Body | `text-base font-normal` | 16px |
| Small / helper | `text-sm text-muted-foreground` | 14px |

### Rules

- Always use `tracking-tighter` on display-size headings (≥ `text-4xl`)
- Body copy max-width: `max-w-2xl` centered — prevents overly long lines
- Never use more than two font weights in a single component (`font-bold` + `font-normal` is the standard pairing)

---

## 4. Spacing & Layout

### Container

```html
<div class="container mx-auto px-6 md:px-12">
```

- Default container: `max-w-7xl` (full layout)
- Narrow text blocks: `max-w-4xl` (section intros, hero copy)
- Prose / CTA copy: `max-w-2xl`

### Vertical Rhythm

| Context | Classes |
|---|---|
| Section padding | `py-24 md:py-32` |
| Inner section gap | `gap-12 md:gap-16` |
| Card internal padding | `p-6 md:p-8` |
| Tight spacing (badges, tags) | `gap-2` / `gap-3` |

### Grid

- Feature / split sections: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- Card grids: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Never use more than 3 columns on content grids at desktop

---

## 5. Component Patterns

### Buttons

```tsx
// Primary CTA
<Button size="lg" className="rounded-full gap-2">
  Book a consultation <ArrowRight className="w-4 h-4" />
</Button>

// Secondary / ghost
<Button variant="outline" size="lg" className="rounded-full gap-2">
  <PhoneCall className="w-4 h-4" /> Call us
</Button>
```

- Shape: always `rounded-full` (pill) for CTAs
- Icon: always right-aligned for "go forward" actions (`ArrowRight`), left-aligned for communication (`PhoneCall`)
- Size: `lg` for primary CTAs, `default` for inline actions
- Hover: icons use `group-hover:translate-x-1 transition-transform` for the ArrowRight micro-animation

### Hero Section

Every service page hero follows this structure:

```
Full-height section (min-h-[100dvh])
  └── Background image (object-cover, absolute inset-0)
       └── Dark gradient overlay (from-black/45 to-black/70)
            └── Content (centered, z-10)
                 ├── Badge chip (icon + label)
                 ├── H1 (Outfit, bold, tracking-tighter)
                 ├── Lead paragraph (max-w-2xl)
                 └── CTA button row
```

All hero content is animated with Framer Motion (`fadeInUp` stagger, 0.15s delay increments).

### Cards

```tsx
<Card className="rounded-xl border bg-card p-6 md:p-8">
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-primary" />
  </div>
  <h3 className="font-bold text-xl mb-2">Title</h3>
  <p className="text-muted-foreground">Description</p>
</Card>
```

- Corner radius: `rounded-xl` for cards, `rounded-2xl` for image containers
- Icon wrappers: always `rounded-xl bg-primary/10` with `text-primary` icon
- Hover state: `hover:shadow-lg transition-shadow` or `hover:-translate-y-1 transition-transform`

### Section Badge / Chip

Used above section headings to label the content type:

```tsx
<div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
  <Icon className="w-4 h-4" />
  Our Services
</div>
```

### Review / Testimonial Cards

```tsx
<Card className="rounded-xl p-6 border">
  <div className="flex items-center gap-1 mb-3">
    {[...Array(5)].map(() => <Star className="w-4 h-4 fill-primary text-primary" />)}
  </div>
  <p className="text-muted-foreground mb-4 text-sm">"Quote text..."</p>
  <div className="flex items-center gap-3">
    <Avatar />
    <div>
      <p className="font-semibold text-sm">Name</p>
      <p className="text-muted-foreground text-xs">Location</p>
    </div>
  </div>
</Card>
```

---

## 6. Imagery

### Hero Images

- Format: `.jpg`, high-resolution (≥ 1920px wide), lifestyle/installation photography
- Style: dark, moody, professional — matches the dark overlay treatment
- Avoid: stock photo clichés, over-bright or heavily saturated images

### In-page Images

- Shape: `rounded-2xl overflow-hidden`
- Fit: `object-cover w-full h-full`
- Optional overlay: `<div className="absolute inset-0 bg-primary/20 mix-blend-overlay rounded-2xl" />`
- Aspect ratio: `aspect-video` (16:9) for feature images, `aspect-square` for profile/avatar thumbnails

### Current Asset Library

| File | Used for |
|---|---|
| `hero-tv.jpg` | TV wall mounting hero, remote programming hero |
| `home-theatre.jpg` | Home theatre hero, hi-fi hero, projectors hero |
| `logo.png` | Navbar and footer logo |

> **Note:** The new service pages (Remote Programming, Hi-Fi, Projectors & Screens) currently share images from the existing library. Dedicated hero images for each are a planned improvement.

---

## 7. Animation

All animations use **Framer Motion**. Follow the established patterns:

```tsx
// Standard fade-in-up variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Stagger children
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={fadeInUp}>...</motion.div>
</motion.div>
```

- `viewport={{ once: true }}` — elements animate in once, never replay on scroll-back
- Stagger delay: `0.1s` to `0.15s` between children
- Duration: `0.4s`–`0.6s` for entrance animations; `0.2s` for hover micro-interactions
- Never animate more than 5–6 elements in a single stagger group

---

## 8. Navigation

- **Navbar**: Sticky, transparent on hero, transitions to `bg-background/80 backdrop-blur-md` on scroll
- **Active state**: `text-primary font-semibold`
- **Mobile**: Collapsible sheet drawer (shadcn/ui `Sheet` component)
- **CTA in nav**: "Book Now" pill button, always visible

---

## 9. Footer

Three-column layout at desktop, stacked on mobile:

1. **Brand column** — logo, tagline, social links
2. **Services column** — links to all six service pages
3. **Suburb links column** — quick links to suburb landing pages for SEO

Background: `bg-slate-900` (dark, regardless of light/dark mode setting)  
Text: `text-slate-400` for links, `text-white` for headings

---

## 10. Dark / Light Mode

The site supports both modes via the `class` strategy (Tailwind). The `ThemeProvider` wraps the app and reads `localStorage`.

- Default: follows system preference
- Toggle: available in the navbar
- **All new components must look correct in both modes.** Test by toggling the theme in the navbar before shipping.
- Use semantic tokens (`text-foreground`, `bg-card`, `border`) — never hardcode `text-gray-900` or `bg-white` in components that appear outside hero sections.

---

## 11. Service Pages — Standard Structure

Every service page follows this section order:

1. **Hero** — full-height, background image, H1 + lead + CTA
2. **Features / Why us** — 3-column icon card grid
3. **Process steps** — numbered 1–4 steps, alternating layout or vertical list
4. **Reviews** — 3 testimonial cards in a grid
5. **CTA / Contact section** — light background, headline + contact form or phone CTA

---

## 12. Do's and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| Use `rounded-full` for all CTA buttons | Use `rounded-md` or `rounded-lg` on CTAs |
| Use semantic color tokens | Hardcode hex values in component styles |
| Animate with `whileInView` + `once: true` | Use `animate` on mount for below-fold content |
| Keep hero overlays at `from-black/45 to-black/70` | Go darker than `/80` — it kills the image |
| Test in both light and dark mode | Ship components only tested in one mode |
| Use `Outfit` for all headings | Mix heading fonts |
| Write specific, crafted copy | Use placeholder or generic filler text |
| Keep section padding at `py-24 md:py-32` | Use inconsistent vertical spacing across sections |

---

*Last updated: July 2026*
