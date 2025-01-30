# HNG12 Stage 0 API - Public Info

## Description

This is a simple public API for retrieving basic information as required for HNG12 Stage 0. The API returns:

- Your registered email on the HNG12 Slack workspace
- The current datetime in ISO 8601 format (UTC)
- The GitHub repository URL of this project

## Technology Stack

- **Framework**: Next.js (Edge Runtime)
- **Language**: TypeScript
- **Deployment**: Hosted on Vercel

## API Documentation

### **Endpoint**

```plaintext
GET https://vercel-edge-nextjs-nu.vercel.app/api/info
```

### **Response Format**

#### **Success Response (200 OK)**

```json
{
  "email": "scansioquielom@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/scansio/vercel-edge-nextjs"
}
```

## CORS Handling

The API allows cross-origin requests by setting the necessary headers in `next.config.js`. It supports requests from any origin.

## Local Development Setup

1. Clone this repository:
   ```sh
   git clone https://github.com/scansio/vercel-edge-nextjs.git
   ```
2. Navigate into the project directory:
   ```sh
   cd vercel-edge-nextjs
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and test the API:
   ```plaintext
   http://localhost:3000/api/info
   ```

## Deployment

This API is deployed on **Vercel**. Any changes pushed to the main branch automatically redeploy the project.

## Repository

GitHub Repository: [https://github.com/scansio/vercel-edge-nextjs](https://github.com/scansio/vercel-edge-nextjs)
