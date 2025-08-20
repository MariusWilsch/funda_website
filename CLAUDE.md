# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Pretty Point** - A premium aesthetic medical practice website built with React + Vite. This is a mobile-first landing page targeting elderly users (50+) with simplified navigation and luxury medical spa aesthetics.

**Target Users**: Tech-challenged patients in Berlin-Charlottenburg who need obvious navigation and premium presentation to justify medical service pricing.

**Design Philosophy**: "Beauty Editorial meets Medical Luxury" - Vogue photoshoot aesthetics in a premium medical spa environment.

## Development Commands

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build

# Local Testing
npm run dev          # Runs on localhost:5173 by default
```

## Architecture Overview

### Component Structure
```
src/
├── features/                 # Feature-based modules
│   └── services/            # Service dialogs and cards
│       ├── components/      # ServiceCard, ServiceDialog, etc.
│       └── data/           # Service configuration data
├── components/              # Shared components
│   ├── Header.jsx          # Navigation with booking CTA
│   ├── HeroSection.jsx     # Main landing section
│   ├── BookingSection.jsx  # Cal.com integration
│   ├── FAQSection.jsx      # Accordion-based FAQ
│   └── ui/                 # shadcn/ui components (DO NOT MODIFY)
├── data/                   # Site configuration
│   ├── contactData.js      # Contact information
│   ├── faqData.js         # FAQ content
│   └── siteData.js        # Site-wide settings
└── core/                  # Application essentials
    └── services/          # External service integrations
```

### State Management
- **BookingProvider**: Context for Cal.com booking integration
- **Component State**: Simple useState for UI interactions (intro splash, mobile menu)
- **MaintenanceWrapper**: Viewport-based maintenance mode with ADR-documented strategy

### Key Integrations
- **Cal.com**: Booking system collecting name, phone, address, desired treatment
- **WhatsApp**: Direct contact integration for elderly users
- **React Icons**: Lucide icons for UI elements

## Design System

### Color Palette (Tailwind Config)
- **warm-gray**: 9-shade palette for backgrounds and text
- **bordeaux**: 9-shade palette for primary brand color (medical luxury)
- **gold**: 9-shade palette for accent highlights

### Typography
- **Headings**: Playfair Display (serif) - conveys medical authority
- **Body**: Inter (sans-serif) - modern accessibility
- **Sizes**: Elder-friendly scale starting at 16px base

### Responsive Strategy
- **Mobile-First**: Primary experience optimized for phones
- **Breakpoints**: Custom `xs: "475px"` for large phones
- **Container Strategy**: Progressive containment based on viewport (see ADR-003)

## Development Guidelines

### Component Creation
- Place new components in appropriate feature directory first
- Only move to `/shared/components` when used by second feature
- Use PascalCase for component files (e.g., `ServiceCard.jsx`)

### Service Content Management
- Service data lives in `/src/features/services/data/`
- Dialog content in `servicesDialogData.js`
- Card display data in `serviceCardData.js`

### Styling Approach
- Use Tailwind utility classes
- Custom color tokens for brand consistency
- Mobile-first responsive design
- Maintain luxury aesthetic with generous white space

## Important Implementation Notes

### Elderly User Accessibility
- Large, obvious buttons with clear labels
- Simple navigation paths without complex dropdowns
- "Termin buchen" (Book Appointment) prominently displayed
- WhatsApp integration for familiar communication

### Maintenance Mode
- Viewport-based toggling system (see `/docs/adrs/004-viewport-based-maintenance-mode-toggle.md`)
- Allows selective rollout to different screen sizes
- Maintenance screen preserves brand aesthetic

### Content Architecture
- **4 Main Services**: Botox, Hyaluron, Lipolyse, PRP with pricing
- **FAQ Structure**: Accordion-based for space efficiency
- **Contact Integration**: Multiple channels (phone, WhatsApp, booking)

## File Structure Patterns

### Data Configuration
```javascript
// Standard service data structure
export const serviceData = [
  {
    id: "service-id",
    title: "Service Name", 
    price: "Price Range",
    description: "Brief description",
    // ... other fields
  }
];
```

### Component Export Pattern
```javascript
// Always use named exports for components
export function ComponentName() {
  // Component logic
}
```

## Build and Deployment

- Static site generation via Vite
- No server-side functionality required
- Production build outputs to `/dist`
- Optimized for static hosting platforms

## Key Dependencies

- **@calcom/embed-react**: Booking integration
- **@radix-ui/react-***: Accessible UI primitives
- **lucide-react**: Icon system
- **tailwindcss**: Utility-first styling
- **react-icons**: Additional icon support

## Development Priorities

1. **Mobile Experience**: Always test on mobile devices first
2. **Elder-Friendly UX**: Large touch targets, clear typography
3. **Performance**: Fast loading for impatient users
4. **Conversion Focus**: Prominent booking CTAs throughout
5. **Premium Aesthetic**: Maintain luxury medical spa feeling