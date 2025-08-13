# Modern Web App

A modern, scalable React + Vite web application built with TypeScript, featuring authentication, theming, and external API integrations.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **React Router** for client-side routing
- **TanStack Query** for server state management
- **Zustand** for client state management
- **Firebase/Supabase** for authentication and database
- **Stripe** for payment processing
- **CSS Modules** for scoped styling
- **Dark/Light Mode** with system preference detection
- **Responsive Design** with mobile-first approach
- **Accessibility** features built-in
- **Framer Motion** for smooth animations

## 🛠️ Tech Stack

### Frontend
- React 18.2.0
- TypeScript 5.2.2
- Vite 4.4.5
- React Router DOM 6.16.0

### State Management
- TanStack Query 5.8.4 (React Query)
- Zustand 4.4.6

### Styling
- CSS Modules
- CSS Custom Properties (CSS Variables)
- Responsive design utilities

### External Services
- Firebase (Auth, Firestore, Storage)
- Supabase (Alternative database)
- Stripe (Payments)

### Development Tools
- ESLint with TypeScript support
- React development tools
- TanStack Query DevTools

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your API keys:
   - Firebase configuration
   - Supabase configuration
   - Stripe publishable key

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Firebase
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage
3. Copy configuration values to your environment variables

### Supabase Setup

1. Create a Supabase project at [Supabase](https://supabase.com/)
2. Get your project URL and anon key
3. Set up your database tables

### Stripe Setup

1. Create a Stripe account at [Stripe](https://stripe.com/)
2. Get your publishable key
3. Set up webhook endpoints (for backend integration)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   ├── Header.tsx      # Navigation header
│   └── Hero.tsx        # Hero section component
├── pages/               # Page components
│   └── Home.tsx        # Home page
├── store/               # State management
│   ├── authStore.ts    # Authentication state
│   └── themeStore.ts   # Theme state
├── lib/                 # Utility libraries
│   ├── firebase.ts     # Firebase configuration
│   ├── supabase.ts     # Supabase configuration
│   ├── stripe.ts       # Stripe utilities
│   └── theme.ts        # Theme utilities
├── types/               # TypeScript type definitions
│   └── index.ts        # Main type definitions
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── App.css             # Global styles
```

## 🎨 Theming

The app supports both light and dark themes with:

- CSS Custom Properties for dynamic theming
- System preference detection
- Smooth theme transitions
- Persistent theme selection

### Theme Colors

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
  --color-error: #ef4444;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
}
```

## 🔐 Authentication

The app supports multiple authentication providers:

- **Firebase Auth** (primary)
- **Supabase Auth** (alternative)

### Authentication Flow

1. User signs up/signs in
2. Authentication state is managed by Zustand
3. User data is stored in local storage
4. Protected routes can check authentication status

## 💳 Payments

Stripe integration for payment processing:

- Stripe-hosted Checkout
- Payment intent creation
- Success/failure handling
- No sensitive data stored locally

## 📱 Responsive Design

- Mobile-first approach
- CSS Grid and Flexbox layouts
- Responsive typography
- Touch-friendly interactions
- Optimized for all screen sizes

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder, ready for static hosting.

### Hosting Options

- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **Firebase Hosting**: Integrated with Firebase services
- **GitHub Pages**: Free static hosting
- **Any static hosting provider**

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Code Quality

- ESLint configuration for React and TypeScript
- Prettier for code formatting
- TypeScript strict mode enabled
- Component prop validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review the code examples

## 🔮 Future Enhancements

- [ ] User profile management
- [ ] Advanced form validation
- [ ] Internationalization (i18n)
- [ ] Progressive Web App (PWA) features
- [ ] Unit and integration tests
- [ ] Storybook for component documentation
- [ ] Performance monitoring
- [ ] Error tracking and analytics
