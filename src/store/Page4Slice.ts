import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from ".";

export interface Book{
    [x: string]: any;
    name: string;
    author: string;
    pages: number;
}

interface Library {
    books: Book[];
}

const initialState: Library = {
    books: []
};

export const librarySlice = createSlice({
    name: 'page4',
    initialState,
    reducers: {
        add: (state, {payload: book}: PayloadAction<Book>) => {state.books.push(book)},
        del: (state, {payload: id}: PayloadAction<number>) => {state.books.splice(id, 1);}
    }
});

export const {add, del} = librarySlice.actions;
export const booksSelector = (state: RootState) => state.four;

export default librarySlice.reducer;