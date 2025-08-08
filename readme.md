# Practo Clone

This is a Practo-like healthcare web application built with Next.js and Tailwind CSS.

## Deployment

- **Frontend (Vercel):** [https://practo-clone-chi.vercel.app](https://practo-clone-chi.vercel.app)
- **Backend (Render):** [https://practo-clone-p6qo.onrender.com](https://practo-clone-p6qo.onrender.com)

## Features

- Responsive header with navigation and dropdown menus
- Mobile-friendly menu toggle
- Image optimization with Next.js `<Image>` component
- Footer with social media links
- Custom 404 Not Found page for unmatched routes

## Technologies Used

- Next.js (React framework)
- Tailwind CSS
- TypeScript
- Lucide Icons
- Simple Icons

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sharmaharshit2000/practo-clone.git
   cd practo-clone
   ```

2. **Frontend Setup:**
   Create a `.env.local` file in your Next.js project root:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
   ```

3. **Backend Setup:**
   Create a `.env` file in your backend project root:
   ```env
   MONGO_URI=mongodb+srv://<your-mongo-uri>
   PORT=5000
   ```

4. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Use the navigation links in the header to explore the app.
- Toggle the mobile menu with the hamburger icon.
- Find social media links in the footer.
- Unmatched routes display a custom 404 page.


