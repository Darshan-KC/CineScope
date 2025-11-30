import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const addFavorite = (movie) => {
        if(!favorites.find((m) => m.id === movie.id)){
            const update = [...favorites, movie];
            setFavorites(update);
            localStorage.setItem("favorites", JSON.stringify(update));
        }
    };

    return (
        <FavoritesContext.Provider >
            {children}
        </FavoritesContext.Provider>
    )
}