# HNG12 Stage 1 API - **Number Classification API**

An API that classifies numbers based on mathematical properties and provides a fun fact about them.

## **Features**

- Determines if a number is **prime**, **perfect**, or an **Armstrong number**.
- Classifies numbers as **odd** or **even**.
- Computes the **sum of the digits** of a number.
- Fetches a **fun fact** from the [Numbers API](http://numbersapi.com/).
- Returns structured **JSON responses**.

## **Live Demo**

🚀 **Base URL:**

```
https://vercel-edge-nextjs-nu.vercel.app
```

## **API Documentation**

### **Endpoint:**

```
GET /api/classify-number?number={number}
```

### **Example Request**

```bash
curl -X GET "https://vercel-edge-nextjs-nu.vercel.app/api/classify-number?number=371"
```

### **Successful Response (200 OK)**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### **Error Response (400 Bad Request)**

```json
{
  "number": "alphabet",
  "error": true
}
```

## **Setup & Installation**

### **1. Clone the repository**

```bash
git clone https://github.com/scansio/vercel-edge-nextjs.git
cd vercel-edge-nextjs
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Run the server locally**

```bash
npm run dev
```

The API will be available at **http://localhost:3000/api/classify-number**.

---

## **Deployment**

### **Deploying to Vercel**

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel deploy
   ```

Your API will be deployed to a publicly accessible endpoint.

---

## **Technologies Used**

- **Node.js** with **Next.js API Routes**
- **Vercel Edge Functions** for fast response times
- **Typescript/JavaScript (ES6+)**
- **Fetch API** for external requests

---

## **Project Structure**

```
/vercel-edge-nextjs
│── /api
│   ├── classify-number.ts  # API route
│── /lib
│   ├── utils.js            # Utility functions (math operations)
│── next.config.js          # CORS settings
│── package.json
│── README.md               # Documentation
│── vercel.json             # Deployment configuration
```

---

## **Additional Notes**

- ✅ API responds in **<500ms**.
- ✅ Handles **CORS** for cross-origin requests.
- ✅ Supports **only integer inputs**.

## Deployment

This API is deployed on **Vercel**. Any changes pushed to the main branch automatically redeploy the project.

## Repository

GitHub Repository: [https://github.com/scansio/vercel-edge-nextjs](https://github.com/scansio/vercel-edge-nextjs)

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
HNG TECHHNG TECH
Hire NodeJs Developers Talent | HNG Hire
Hire the best Developers available for hire and freelance jobs anywhere in the world. Find Developers that suit your needs — chat with us now.
