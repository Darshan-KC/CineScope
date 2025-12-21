import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import useDebounce from "../../hooks/useDebounce";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react"; // if using icons
import { Link } from "react-router";


export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const debounceQuery = useDebounce(query, 500);

    // Navigate automatically when debounced query changes
    // if (debouncedQuery) {
    //     navigate(`/search?query=${debouncedQuery}`);
    // }
    // useEffect(() => {
    //   if (debouncedQuery) {
    //     navigate(`/search?query=${debouncedQuery}`);
    //   }
    // }, [debouncedQuery, navigate]);

    return (
        <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
            <Link to="/" className="text-2xl font-bold text-yellow-400 tracking-wide">
                CineScope
            </Link>

            <div className="relative w-64 flex">
                <Link to="/" className="text-2xl mx-4 text-light tracking-wide">
                    Home
                </Link>
                <input type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                <button className="absolute right-3 top-2.5 text-gray-400" />
                <button onClick={toggleTheme}>
                    {theme === "light" ? <Moon /> : <Sun />}
                </button>
            </div>
        </nav>
    )
}