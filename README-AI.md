# AI ASSISTANT CONTEXT - HOSTINGER HORIZONS PROJECT

## Quick Reference
- **Project**: React 18 + Vite + Node.js from Hostinger Horizons
- **Deployment**: Static hosting on Hostinger shared/cloud
- **Build Command**: `npm run build` → upload dist/ only
- **File Size Limit**: 1024MB-15360MB depending on plan

## Development Rules
1. **NO server-side code** for shared hosting deployment
2. **NO re-import** back to Horizons after export
3. **Client-side only** - static build required
4. **ES modules** and Vite config patterns only
5. **External APIs** via HTTPS for data needs

## Framework Constraints
- React 18 + JSX/TSX
- Vite build system (NO webpack/CRA)
- Client-side routing only
- CSS/CSS modules/CSS-in-JS allowed
- Bootstrap 4.x/5.x compatible

## File Type Restrictions
- Code: .js, .jsx, .ts, .tsx
- Images: .jpeg, .jpg, .png, .gif, .ico
- Fonts: .woff, .woff2
- Max sizes per hosting plan limits

## Integration Boundaries
- Databases: Supabase/Firebase cloud only
- Payments: Stripe client-side
- APIs: External HTTPS endpoints
- NO local database connections
- NO server middleware

## Validation Checklist
Before suggesting any code:
- [ ] Maintains React 18 + Vite compatibility
- [ ] Builds successfully to static files
- [ ] No server-side dependencies
- [ ] Within file size limits
- [ ] Uses only allowed file types
- [ ] External integrations via HTTPS
