# Wearwise

**Just describe the look you want, and let Wearwise's AI Style Advisor create it with products we have in our store.**

Wearwise is a modern menswear shopping experience built around minimalist fashion and personalized outfit discovery. It combines a curated clothing catalog with an AI-powered Style Advisor to help users discover products and create outfits that match their preferences.

## Demo

https://github.com/user-attachments/assets/e58cd6d9-7ffa-4532-9b13-b66c9258d675

## Features

### Shopping Experience

- Responsive storefront with a premium, minimalist design.
- Curated catalog of 24 fictional menswear products.
- Browse products through category-based collections.
- Search, filter, and sort products.
- Dedicated product detail pages.
- Product size and quantity selection.
- Add products to cart and manage cart quantities.
- Cart state persisted using local storage.
- Wishlist functionality.
- About and Contact page.

### AI Style Advisor

Explore five ways to discover your next look:

- **Outfit Suggestions:** Describe a style or outfit you want, and get recommendations using products from the store.
- **Owned Item Styling:** Describe an item you already own and discover what goes well with it.
- **Product Discovery:** Find products based on category, color, and budget.
- **Product Pairing:** Select a product and discover complementary pieces.
- **Three Outfit Variations:** Generate three different outfit combinations around an item.

The AI interprets natural-language requests and generates structured recommendations. The backend validates recommended product IDs against eligible catalog products before returning results.

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React, TypeScript, Tailwind CSS, Vite |
| Routing | React Router |
| Backend | Node.js, Express.js, TypeScript |
| Database | Supabase PostgreSQL |
| AI | Google Gemini API |
| Validation | Zod |
| Icons | Lucide React |
| Development | npm Workspaces |

## Architecture

Wearwise follows a separated frontend and backend architecture:

- **Frontend:** Handles the storefront, product browsing, cart, and AI Style Advisor interface.
- **Backend:** Provides REST API endpoints, retrieves catalog data, processes AI requests, and validates recommendations.
- **Supabase:** Stores product information and provides product image URLs.
- **Gemini:** Interprets styling requests and generates product recommendations.
- **Shared:** Contains shared project types and definitions.

## Project Structure

```text
Wearwise/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── lib/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── server.ts
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   └── main.tsx
│   └── package.json
│
├── shared/
│   └── src/
│
├── .env.example
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- A Supabase project
- A Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/laibath003/Wearwise.git
cd Wearwise
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory using `backend/.env.example` as a reference.

```env
PORT=4000
FRONTEND_URL=http://localhost:5173

GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.5-flash-lite

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SECRET_KEY=your_supabase_secret_key
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:4000
```

Replace the placeholder values with your own credentials.

**Important:** Keep API keys and Supabase secret keys private. Never commit actual `.env` files to GitHub.

### 4. Configure Supabase

Wearwise uses a Supabase PostgreSQL table named `products`.

The table should contain the following columns:

| Column | Purpose |
|---|---|
| id | Product identifier |
| name | Product name |
| category | Product category |
| price | Current price |
| old_price | Previous price |
| color | Product color |
| badge | Optional product badge |
| image_url | Product image URL |
| description | Product description |
| sizes | Available sizes |
| occasions | Suitable occasions |
| style_tags | Associated style tags |
| in_stock | Product availability |
| created_at | Creation timestamp |
| updated_at | Last update timestamp |

Add the demo catalog products to this table.

Create a public Supabase Storage bucket named `products` and upload the corresponding product images. The `image_url` values in the database should point to the publicly accessible images.

### 5. Run the Application

Open two terminals from the project root.

**Terminal 1 — Backend**

```bash
npm run dev --workspace=backend
```

**Terminal 2 — Frontend**

```bash
npm run dev:frontend
```

Open the local frontend URL displayed by Vite, normally:

```text
http://localhost:5173
```

## Build

Build the frontend:

```bash
npm run build --workspace=frontend
```

Build the backend:

```bash
npm run build --workspace=backend
```

## Notes

- Wearwise uses a fictional demo catalog for portfolio and demonstration purposes.
- Product prices are displayed in Pakistani Rupees (PKR).
- The contact form is a frontend demonstration and does not send or store messages.
- Checkout and payment processing are not implemented.
- AI recommendations depend on the configured Gemini API and Supabase catalog.

## Author

**Laiba Tahir**

- GitHub: [@laibath003](https://github.com/laibath003)

---

*Built with React, TypeScript, Node.js, Supabase, and Google Gemini.*
