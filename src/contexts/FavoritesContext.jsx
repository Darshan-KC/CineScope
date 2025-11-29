import { createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {

    return (
        <FavoritesContext.Provider >
            {children}
        </FavoritesContext.Provider>
    )
}