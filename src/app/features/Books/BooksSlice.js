import { createSlice } from "@reduxjs/toolkit"

const initialBooks = [
    { id: 1, title: 'Harry Potter' },
    { id: 2, title: 'The Hobbit' },
    { id: 3, title: 'The Lord of the Rings' },
]

const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,

    reducers: {
        showBooks: (state) => state,

        addBooks: (state, action) => {
            state.push(action.payload);
        },

        deleteBooks: (state, action) => {
            return state.filter(book => book.id !== action.payload);
        },

        editBooks: (state, action) => {

            const { id, title } = action.payload;

            const findBook = state.find(book => book.id === id);
            if (findBook) {
                findBook.title = title;
            }


        }


    }

})

export const { showBooks, addBooks, deleteBooks  , editBooks} = booksSlice.actions;
export default booksSlice.reducer;