# HOSTINGER HORIZONS PROJECT CONTEXT

## PROJECT BASELINE
This is a React 18 + Vite + Node.js project exported from Hostinger Horizons. This is the ONLY export format available. All code changes must maintain compatibility with this exact stack.

<constraints>
- React 18 with JSX/TSX syntax only
- Vite build system (vite.config.js/ts) - NO webpack, NO CRA configs  
- ES modules import/export syntax required
- Node.js toolchain with npm scripts (dev/build/preview)
- Standard Vite + React src/ directory structure
</constraints>

## CRITICAL LIMITATION
**NO RE-IMPORT CAPABILITY**: Once exported from Horizons, edited code CANNOT be imported back into the Horizons builder. All manual code changes are permanent and final.

## HOSTING CONSTRAINTS
<deployment>
- **Target**: Hostinger shared/cloud hosting (static files only)
- **Build Requirement**: Must produce clean static dist/ via `npm run build`
- **Upload**: Only dist/ folder to hPanel as "Empty PHP/HTML website"
- **File Size Limits**: 1024MB (Web), 3072-15360MB (Cloud) per plan
- **VPS Required For**: SSR, Node.js runtime, server-side features
</deployment>

## ALLOWED TECHNOLOGIES
<allowed>
**Frontend**:
- React 18 with client-side routing only (React Router compatible)
- Standard CSS, CSS modules, CSS-in-JS libraries
- Bootstrap 4.x/5.x framework support
- Vite-compatible dependencies with pinned versions

**File Types**:
- Images: .jpeg, .jpg, .png, .gif, .ico
- Fonts: .woff, .woff2 (requires MIME configuration)
- Documents: .doc, .docx, .pdf (under size limits)
- Code: .js, .jsx, .ts, .tsx files only

**Data/Integrations**:
- Cloud databases: Supabase, Firebase with connection strings
- External APIs via fetch/axios to HTTPS endpoints
- Payment: Stripe client-side SDK only
</allowed>

## FORBIDDEN PATTERNS
<forbidden>
- NO Next.js SSR/ISR features (unless targeting VPS)
- NO server-side rendering components for shared hosting
- NO Node.js APIs in client-side code
- NO webpack-specific loaders or plugins
- NO Create React App (CRA) configuration patterns
- NO local database assumptions for production
- NO file uploads exceeding hosting plan limits
- NO backend server code for shared/cloud deployment
</forbidden>

## BUILD REQUIREMENTS
<requirements>
Every code change must ensure:
- `npm install` completes without errors
- `npm run build` produces clean static dist/ folder
- No SSR-only dependencies in production build
- All imports use ES module syntax
- Assets resolve through Vite's build graph
- External API calls use HTTPS endpoints only
- Database connections via provided cloud credentials
</requirements>

## SUCCESS CRITERIA
<success>
- Project builds to static dist/ successfully
- Dist/ folder uploads and runs on Hostinger shared/cloud hosting
- No Node.js runtime required in production
- All features work in client-side only environment
- File sizes stay within hosting plan limits
- Only allowed file types and frameworks used
</success>

## EMERGENCY RULES
- If server features absolutely required, explicitly flag for VPS deployment
- Never introduce patterns that break static build compatibility
- Always verify changes maintain Vite build process integrity
- Remember: NO path back to Horizons once exported

---
*References: Hostinger Horizons export limitations, hosting plan constraints, text editing mode restrictions*