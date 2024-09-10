import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./features/Books/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: BooksReducer,
    }
})

export default store;