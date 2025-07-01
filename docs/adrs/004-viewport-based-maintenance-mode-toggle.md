# 004: Implement Viewport-Based Maintenance Mode Toggle

## Status
**Accepted** | Date: 2025-01-07

## Context
- Website requires temporary access restriction during development handoff period
- Client needs to launch with limited viewport support while delegating full responsive development
- Maintenance mode should target specific viewport ranges (425px-1440px) while allowing access on very small mobile and large desktop screens
- Solution must be easily toggleable for future maintenance periods
- Implementation should be non-invasive to existing codebase
- Professional user experience required during maintenance periods
- Clear documentation needed for developer handoff and future maintenance

## Decision
We will implement a viewport-based maintenance wrapper system that can be easily toggled on/off.

**Technical Architecture:**
```
App Component
     ↓
MaintenanceWrapper (Conditional)
     ↓
Normal Website Content OR Maintenance Screen
```

**Viewport Logic:**
```
< 425px (Mobile S)           → Normal Website
425px - 1440px (Tablet/Desktop) → Maintenance Screen  
> 1440px (Large Desktop)     → Normal Website
```

**Toggle Implementation:**
```bash
# .env file configuration

# ENABLE Maintenance Mode
VITE_MAINTENANCE_MODE=true

# DISABLE Maintenance Mode
VITE_MAINTENANCE_MODE=false
```

**Completion Criteria:**
- MaintenanceWrapper component wraps entire application
- Viewport detection responds to window resize events
- Professional German maintenance screen with contact information
- Single-line toggle capability for enabling/disabling
- Zero impact on existing functionality when disabled

**Implementation Specifics:**
- Component files: `MaintenanceWrapper.jsx`, `MaintenanceScreen.jsx`
- Environment variable: `VITE_MAINTENANCE_MODE` in `.env` file
- Viewport detection: `window.innerWidth` with resize listeners
- Toggle method: Environment variable boolean (`true`/`false`)
- Maintenance content: German language, branded design, WhatsApp contact

## Consequences

### ✅ Positive
- Environment variable toggle enables instant control without code changes
- Professional user experience during maintenance periods
- Non-invasive implementation preserves existing functionality
- Clear viewport targeting allows strategic access control
- Easy developer handoff with documented environment configuration
- Responsive maintenance screen works across all affected viewports
- Build-time configuration prevents runtime environment variable exposure

### ❌ Negative
- Client-side detection can be bypassed by developer tools
- Additional JavaScript bundle size for maintenance components
- Environment variable changes require application rebuild/restart
- Viewport detection adds runtime overhead during resize events

### ⚪ Neutral
- Documentation requirements for maintenance toggle procedures
- Testing requirements across all viewport breakpoints
- Component cleanup needed when permanently removing maintenance mode
- Potential confusion for users accessing from restricted viewport sizes

## Alternatives Considered

| Alternative | Rejection Reason |
|-------------|------------------|
| **Manual Code Toggle** | Requires code changes and deployment for each toggle operation |
| **Server-Side Maintenance Mode** | Static site deployment doesn't support server-side logic |
| **CSS-Only Media Query Solution** | Cannot provide dynamic contact information or professional messaging |
| **Complete Site Replacement** | Would lose existing functionality and require duplicate deployment |
| **Feature Flag Service** | Adds external dependency and complexity for temporary requirement |

## Toggle Instructions

### Enable Maintenance Mode
```bash
# Edit .env file
VITE_MAINTENANCE_MODE=true
```
Then restart the development server or rebuild for production.

### Disable Maintenance Mode
```bash
# Edit .env file
VITE_MAINTENANCE_MODE=false
```
Then restart the development server or rebuild for production.

### Environment Variable Setup
```bash
# .env file (create if doesn't exist)
# Maintenance Mode Configuration
# Set to 'true' to enable maintenance mode for viewport 425px-1440px
# Set to 'false' to disable maintenance mode (normal website for all viewports)
VITE_MAINTENANCE_MODE=true
```

### Complete Removal (When No Longer Needed)
1. Remove `<MaintenanceWrapper>` from `App.jsx`
2. Delete `src/components/MaintenanceWrapper.jsx`
3. Delete `src/components/MaintenanceScreen.jsx`
4. Remove import statements from `App.jsx`
5. Remove `VITE_MAINTENANCE_MODE` from `.env` file
