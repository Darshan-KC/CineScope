import { Route } from "react-router";
import { Routes } from "react-router";
import Homepage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import SearchPage from "../pages/SearchPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="" element={<NotFoundPage />} />
        </Routes>
    )
}