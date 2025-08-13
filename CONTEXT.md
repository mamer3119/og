# PROJECT CONTEXT SUMMARY

## Tech Stack
**Exported from Hostinger Horizons**: React 18 + Vite + Node.js

## Deployment Model
**Static Hosting**: Hostinger shared/cloud → upload dist/ folder only

## Key Limitations
1. **No Re-import**: Cannot paste edited code back into Horizons
2. **Static Build Required**: Must work without Node.js server
3. **File Size Limits**: 1024MB-15360MB per hosting plan
4. **Client-Side Only**: No SSR for shared hosting

## Code Requirements
- ES modules and JSX/TSX syntax
- Vite configuration (NO webpack/CRA)
- External APIs via HTTPS only
- Cloud databases (Supabase/Firebase)
- Pinned dependency versions

## Success Metrics
- `npm install` succeeds
- `npm run build` produces clean dist/
- Static deployment works on Hostinger
- No runtime server dependencies
