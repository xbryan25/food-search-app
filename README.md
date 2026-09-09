# FoodSearch 🥑

A full-stack food product search application built with **Next.js** and **Express**. Users can search packaged food items via the **Open Food Facts API**, view localized interface and product information in 4 languages (EN, NL, DE, FR), toggle light/dark modes, and subscribe to a Pro tier using **Stripe Checkout** to unlock detailed nutritional breakdown data.

## 🌟 Key Features

- **Open Food Facts API Integration:** Live search and detailed product info retrieval with graceful handling for missing/incomplete fields.
- **Multilingual Support (i18n):** Manual language selector supporting English (EN), Dutch (NL), German (DE), and French (FR) across the interface and product tags.
- **Data Gating & Tiered Access:** Basic information (title, brand, image, Nutri-Score) is public; detailed nutritional facts are gated behind an active Stripe Pro subscription.
- **Stripe Checkout & Webhooks:** End-to-end subscription purchasing flow with real-time MySQL database sync via Stripe webhooks (`checkout.session.completed`).
- **Dark / Light Theme:** Custom visual themes using `next-themes` and Tailwind CSS v4.
- **Search History Tracking:** User recent searches stored in a containerized MySQL database via Prisma ORM.

## 🛠️ Tech Stack & Dependencies

### Frontend (`apps/web`)

- **Framework:** Next.js 16 (React 19) (TypeScript)
- **Styling & UI Components:** Tailwind CSS v4, `@base-ui/react`, `@tabler/icons-react`, `shadcn`, `class-variance-authority`, `tw-animate-css`
- **Theme & Notifications:** `next-themes`, `sonner`

### Backend (`apps/api`)

- **Runtime & Server:** Node.js, Express v5, TypeScript
- **Database & Containerization:** MySQL 8, Docker, Docker Compose, Prisma ORM v6
- **Integrations & Utilities:** `stripe`, `axios`, `zod`, `dotenv`, `cors`
- **Testing:** Vitest v5

## 🚀 Quick Start & Setup Instructions

### Prerequisites

- Node.js (v18+)
- Docker & Docker Desktop (for running the MySQL container instance)
- Stripe CLI (optional for local webhook listening)

### 1. Repository Setup & Dependencies

```bash
# Clone repository
git clone <your-repo-url>
cd FoodSearch

# Install dependencies
npm install
```

### 2. Environment Configuration

Copy `.env.example` in both api/web directories:

```bash
cp .env.example .env
```

Configure your `.env` variables (matching the Docker Compose setup):

#### /api/.env

```env
DATABASE_URL="mysql:/..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID="price_..."
PORT=4000
```

#### /web/.env

```env
NEXT_PUBLIC_API_URL="http:/..."
```

### 3. Spin Up MySQL Container & Apply Migrations

Start the local MySQL database instance using Docker Compose, then run Prisma migrations:

```bash
# Start MySQL container
docker compose up -d

# Run Prisma migrations to set up tables and initialize demo user
npx prisma migrate dev --name init
```

### 4. Running the Project

Start both backend server and frontend application in development mode:

```bash
# Backend (apps/api)
npm run dev

# Frontend (apps/web)
npm run dev
```

### 5. Running Webhooks Locally (Optional)

Forward Stripe webhook events to your local API server:

```bash
stripe listen --forward-to localhost:4000/api/webhook
```

## 🧪 Automated Testing

Unit testing is focused on backend domain logic, data transformation, and payment synchronization using **Vitest**.

### Run Tests

```bash
npm run test
```

### Covered Test Cases

1. **Unsubscribed User Gating:** Ensures `ProductResource` returns `nutrition: null` when `isSubscribed = false`.
2. **Pro Subscriber Access:** Ensures `ProductResource` returns full nutritional breakdown when `isSubscribed = true`.
3. **User Status Database Lookup:** Validates querying user subscription state via Prisma mock.
4. **Stripe Webhook Processing:** Validates that receiving `checkout.session.completed` correctly updates `isSubscribed: true` in MySQL.

## 📐 Technical Decisions & Architecture

- **Containerized Database Environment:** Used Docker Compose within the monorepo to isolate the MySQL instance, ensuring zero host system database configuration and uniform development setup across environments.
- **Data Gating at the Resource Level (`ProductResource`):** Gating logic is centralized in the backend API response layer (`ProductResource`). Sensitive/pro fields are stripped on the server side before being sent down to the client, preventing unauthorized client-side inspection.
- **Single Demo User Pattern:** To streamline the evaluation process without full auth overhead, the application operates around a static demo user account (`demo-user-1`).
- **Resilient BFCache Handling:** Implemented a client-side `pageshow` listener on Stripe checkout redirects to automatically handle browser back/forward cache navigation and prevent stuck loading states.
- **Backend-First Testing Strategy:** Prioritized unit testing business-critical access gating and webhook persistence logic using Vitest rather than flaky UI component rendering tests under tight submission deadlines.

## 🌐 Internationalization (i18n) Approach

- **Global Translation Dictionary:** Built using a centralized dictionary mapping key phrases across 4 languages (`en`, `nl`, `de`, `fr`).
- **Dynamic Localized Product Extraction:** Open Food Facts provides localized product tags (e.g., `product_name_fr`, `categories_tags`). The backend `ProductResource` parses the target language query param and extracts localized titles/categories with fallbacks to English or default raw fields when specific translations are missing.

## ⚠️ Known Limitations

1. **Incomplete Open Food Facts Data:** External API entries frequently lack complete nutritional fields or localized names across all 4 languages.
2. **Single User Account:** Designed specifically around one demo user context without multi-tenant authentication.
3. **Testing Scope:** Automated test coverage is currently focused on core backend unit tests. Frontend integration tests (React Testing Library) and E2E tests (Playwright) were omitted due to strict time constraints.
