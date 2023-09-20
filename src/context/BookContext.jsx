import {createContext} from "react";
import { booksData } from "../assets/data";

export const BookContext = createContext();

export const BookContextProvider=({children}) => {
     return(
        
        <BookContext.Provider value={booksData}>
            {children}
        </BookContext.Provider>

     )
}

