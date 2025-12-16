# 🎬 cineScope (React)

cineScope is a modern movie discovery web application built with **React** and **Tailwind CSS**. It allows users to browse trending movies, search by title, view detailed information, and manage favorites.

---

## 🚀 Features

- Browse trending/popular movies
- Search movies by title
- View movie details (poster, rating, overview)
- Responsive design (mobile-first)
- Add movies to favorites (saved in localStorage)
- Dark/light theme toggle

---

## 🧱 Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Axios (for API calls)
- Context API (Theme & Favorites)
- TMDB API for movie data

---

## 📁 Project Structure

```bash
src/
├── assets/          # Images, icons, static files
├── components/      # Reusable UI components (Navbar, Footer, MovieCard, Loader, Skeletons)
├── context/         # ThemeContext, FavoritesContext
├── hooks/           # Custom hooks (API fetch, debounce, localStorage)
├── layouts/         # Page layouts (MainLayout, DetailLayout)
├── pages/           # Routed pages (Home, Search, MovieDetail, Favorites, NotFound)
├── routes/          # AppRoutes.jsx
├── services/        # API logic (movieApi.js)
├── styles/          # Tailwind and global CSS
├── utils/           # Helpers (formatDate, getPosterUrl, constants)
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

---

## ▶️ Run the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📌 Notes

- Designed with a scalable folder structure and reusable components
- Fully responsive and optimized for performance
- Favorites and theme are persisted using localStorage

---

### ✨ Author
**cineScope Project**  
Built as a structured React learning project.