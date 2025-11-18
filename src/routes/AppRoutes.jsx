import { Route } from "react-router";
import { Routes } from "react-router";
import Homepage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import SearchPage from "../pages/SearchPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import DetailLayout from "../layouts/DetailLayout";

export default function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/search" element={<SearchPage />} /> */}

            {/* Main Layout Pages */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Route>

            {/* Detail Layout */}
            <Route element={<DetailLayout />}>
                <Route path="/movie/:id" element={<MovieDetailPage />} />
            </Route>

            {/* 404 */}
            <Route path="" element={<NotFoundPage />} />
        </Routes>
    )
}