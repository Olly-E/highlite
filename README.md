# Crypto Assets Dashboard

A web application for displaying and tracking cryptocurrency prices using the CoinGecko public API.

## Features

- Display list of cryptocurrencies with:
  - Asset name
  - Symbol
  - Current price (USD)
- Loading states during data fetch
- Error handling with user-friendly messages
- Interactive features (search, refresh, or sort)

## Limitations

**Data Display**: Currently displays 100 cryptocurrencies in a single request.

**Note**: The initial implementation included infinite scroll pagination to load more data progressively. However, due to CoinGecko API rate limiting (429 Too Many Requests errors after multiple sequential calls), the implementation was simplified to fetch 100 items at once to avoid hitting rate limits during normal usage.

## How to Run Locally

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

**Access the application:**
- Homepage: http://localhost:3000

## Technology Stack

- **Framework**: Next.js 16 (App Router) + TypeScript 5
- **UI**: React 19 + Tailwind CSS 4
- **Forms**: React Hook Form + Zod validation
- **Components**: Headless UI, Radix UI
- **Notifications**: react-hot-toast
- **API**: CoinGecko public API

## License

MIT
